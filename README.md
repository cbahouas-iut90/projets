# Projet - Exploration des Stratégies d’Authentification avec Node.js et Vue.js

## Auteurs
- Mehdi EZZOUAK
- Christ BAHOUASSILA

## Description Générale
Ce projet est constitué de **trois mini-projets** indépendants, chacun explorant une stratégie d’authentification différente :
- Mini-projet 1 : Authentification avec Passport-Local et gestion des sessions via cookies
- Mini-projet 2 : Authentification avec JWT (JSON Web Token)
- Mini-projet 3 : Authentification OAuth2 avec Google + système de messagerie en temps réel

Chaque mini-projet est accompagné d’un backend (Node.js + Express) et d’un frontend (Vue.js).

## 🔐 Mini-projet 1 : Authentification avec Passport-Local et Session

### 🛠️ Technologies utilisées
- **Backend** : Node.js avec Express.js et Passport.js
- **Frontend** : Vue.js (v2)
- **Base de données** : PostgreSQL ou MySQL (via Sequelize ORM)
- **Sessions** : express-session avec cookies

### ✅ Fonctionnalités
- Inscription des utilisateurs
- Connexion avec vérification des identifiants
- Page d’accueil protégée après connexion
- Stockage des sessions dans les cookies

## 🔐 Mini-projet 2 : Authentification avec JWT (JSON Web Token)

### 🛠️ Technologies utilisées
- **Backend** : Node.js avec Express.js et JWT
- **Frontend** : Vue.js (v2)
- **Base de données** : PostgreSQL ou MySQL (via Sequelize ORM)
- **Stockage du token** : LocalStorage ou SessionStorage

### ✅ Fonctionnalités
- Inscription des utilisateurs
- Connexion avec génération et validation d’un JWT
- Page d’accueil sécurisée avec vérification du JWT
- Gestion du token côté client


## 🌐 Mini-projet 3 : Authentification OAuth2 avec Google + Chat en temps réel

### 🛠️ Technologies utilisées
- **Backend** : Node.js avec Express.js et Passport.js (Google Strategy)
- **Frontend** : Vue.js (v2)
- **Base de données** : MongoDB avec Mongoose
- **Sessions** : Redis + express-session
- **Websockets** : Socket.io

### ✅ Fonctionnalités
- Authentification via Google OAuth2 (et potentiellement un autre fournisseur)
- Sauvegarde des utilisateurs et tokens dans MongoDB
- Mise en cache des sessions avec Redis
- Interface de chat entre utilisateurs connectésauvegarde de l’historique des messages dans MongoDB


## ⚙️ Instructions d’exécution

### Prérequis
- Node.js (v18 ou v20 recommandé)
- MongoDB / PostgreSQL / MySQL selon le projet
- Redis (pour le mini-projet 3)
- gestionnaire de package npm

### Cloner le dépôt
```bash
git clone --recurse-submodules https://github.com/cbahouas-iut90/mini-projet3.git
```

### Commandes générales (à adapter pour chaque mini-projet)
```bash
# Installation des dépendance mini-projet1

# pour le backend
cd backend
npm install

# Démarrage du backend
node server.js

# pour le frontend
cd ../frontend
npm install

# Démarrage du frontend (dans le dossier frontend)
npm run serve
```

Chaque mini-projet possède son propre dossier :
```
/mini-projet1
  ├── backend
  └── frontend
/mini-projet2
  ├── backend
  └── frontend
/mini-projet3
  ├── backend
  └── frontend
```


 Organisation du dépôt GitHub
- Un dossier par mini-projet
- Un fichier README.md global à la racine (ce document)
- Un fichier README spécifique dans chaque mini-projet 
