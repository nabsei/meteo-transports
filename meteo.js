// Charge le nom de la ville depuis conf.json
async function chargerVille() {
  const response = await fetch("conf.json");
  const config = await response.json();
  return config.ville;
}

// Récupère les données météo depuis l'API OpenWeatherMap
async function chargerMeteo(ville) {
  const API_KEY = "6426a1f92c57a35fb3683bd466bda330";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${API_KEY}&units=metric&lang=fr`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Met à jour les éléments HTML avec les données météo
function afficherMeteo(data) {
  document.getElementById("ville").textContent = data.name;
  document.getElementById("temperature").textContent = `${Math.round(data.main.temp)}°C`;
  document.getElementById("description").textContent = data.weather[0].description;
  document.getElementById("ressenti").textContent = `Ressenti : ${Math.round(data.main.feels_like)}°C`;
  document.getElementById("humidite").textContent = `Humidité : ${data.main.humidity}%`;
  document.getElementById("icone").innerHTML =
    `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Icone météo">`;
}

// Change la couleur de fond selon la météo
function changerFond(meteo) {
  const type = meteo.weather[0].main.toLowerCase();
  const classesFond = ["clear", "clouds", "rain", "thunderstorm", "snow", "mist"];
  document.body.classList.remove(...classesFond);
  if (classesFond.includes(type)) {
    document.body.classList.add(type);
  }
}

// Fonction principale appelée au chargement et chaque heure
async function mettreAJourMeteo() {
  const ville = await chargerVille();
  const data = await chargerMeteo(ville);
  afficherMeteo(data);
  changerFond(data);
}

// Lancement initial et mise à jour toutes les heures
mettreAJourMeteo();
setInterval(mettreAJourMeteo, 3600000);
