
# 🌤️ Nom du projet : Météo Transports

Affichage des données météo en temps réel pour les écrans des transports en commun.  
Ce projet est développé dans le cadre de la préparation à la journée de sélection pour la formation **Concepteur Développeur d’Applications (CDA)**.

---

## 📦 Fichiers du projet

- `index.html` : structure HTML de l’interface  
- `style.css` : design mobile responsive et fond dynamique selon la météo  
- `meteo.js` : récupération des données via l’API OpenWeatherMap  
- `conf.json` : fichier de configuration contenant le nom de la ville à afficher  

---

## ⚙️ Fonctionnalités

- Affiche la météo actuelle de la ville spécifiée
- Affiche :
  - Température
  - Description (ex. : ciel dégagé)
  - **Ressenti**
  - **Humidité**
  - Icône météo
- Fond coloré qui varie selon la météo (ex. ciel bleu pour "clear")
- Mise à jour automatique toutes les **1 heure**

---

## 🔌 Configuration

1. Création d'un compte gratuit sur https://openweathermap.org/api  
2. Récupèration de la clé API  
3. Dans `meteo.js`, intégration de la clé API personnalisée :
4. Dans `conf.json`, indication du choix de la ville :

```json
{
  "ville": "Lyon"
}
```

---

## 📲 Affichage mobile

Le design est pensé pour les petits écrans (affichage public, bus, stations) avec :
- textes larges et lisibles
- fond visuel dynamique
- responsive sur mobile

---

## 🚀 Comment lancer le projet ?

Ouvrir simplement le fichier `index.html` dans un navigateur.  
Il est aussi possible d'héberger le projet sur un serveur local (avec l'extension VsCode LiveServer par exemple).

---

## ✅ Objectifs pédagogiques

- Manipulation du DOM avec JavaScript
- Utilisation de `fetch` et gestion d’API externe
- Mise à jour automatique des données
- Affichage dynamique (DOM + CSS)
- Projet structuré pour présentation Git

---

## 📁 Exemple de structure

```
/projet-meteo
├── index.html
├── style.css
├── meteo.js
├── conf.json
└── README.md
```

---

## 🧠 Améliorations possibles

- Ajouter les heures du lever / coucher du soleil  
- Ajouter la vitesse du vent  
- Prendre en compte la géolocalisation automatique (si utilisé sur navigateur)  

---

## 👨‍💻 Auteur : Nabil Sahrane

Projet réalisé dans le cadre du processus de séléction pour la formation CDA IA.
