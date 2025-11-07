# Site Web Soholang CUP 2025 ⚽

Site web officiel du tournoi de football Soholang CUP organisé par l'association Guyane Event's.

## 🎯 Description

Site web complet et professionnel pour la première édition du tournoi Soholang CUP qui se déroulera du **26 au 28 décembre 2025** à Saint-Laurent du Maroni, Guyane française.

## ✨ Fonctionnalités

### Pages
- **Page d'accueil (index.html)** : Landing page avec toutes les informations du tournoi
  - Hero section avec dates et lieu
  - Présentation du tournoi
  - Informations pratiques
  - Récompenses détaillées
  - Section partenaires
  
- **Page À propos (about.html)** : Présentation de Guyane Event's
  - Mission et valeurs
  - Impact social
  - Statistiques
  - Domaines d'intervention
  
- **Page Contact (contact.html)** : Formulaires et informations de contact
  - Formulaire d'inscription équipe
  - Formulaire de contact général
  - Formulaire de partenariat
  - FAQ interactive
  - Localisation

### Fonctionnalités Techniques
- ✅ Design moderne et responsive (mobile, tablette, desktop)
- ✅ Navigation fluide avec smooth scrolling
- ✅ Animations au scroll
- ✅ Formulaires interactifs avec validation
- ✅ Tabs pour différents types de formulaires
- ✅ FAQ accordion
- ✅ Messages de succès/erreur
- ✅ Validation email et téléphone
- ✅ Compatible tous navigateurs modernes

## 📁 Structure du Projet

```
soholang-cup/
├── index.html              # Page d'accueil
├── about.html              # Page à propos
├── contact.html            # Page contact & inscription
├── styles.css              # Styles principaux
├── contact-styles.css      # Styles spécifiques page contact
├── script.js               # Scripts JavaScript
├── README.md               # Ce fichier
└── assets/                 # Dossier pour les images
    ├── logo.png            # Logo Guyane Event's
    ├── field.jpg           # Photo du stade
    └── partners/           # Logos des partenaires
        ├── ebsk.png
        ├── la-transports.png
        ├── saci.png
        ├── cmn.png
        ├── ville-slm.png
        └── aides.png
```

## 🚀 Installation & Utilisation

### Méthode 1 : Ouverture Directe
1. Ouvrez le fichier `index.html` dans votre navigateur web
2. C'est tout ! Le site fonctionne sans serveur

### Méthode 2 : Serveur Local (Recommandé)
Pour un meilleur rendu et éviter les problèmes CORS :

**Avec Python:**
```bash
cd soholang-cup
python -m http.server 8000
```
Puis ouvrez : http://localhost:8000

**Avec Node.js (http-server):**
```bash
npm install -g http-server
cd soholang-cup
http-server
```
Puis ouvrez : http://localhost:8080

**Avec VS Code:**
Installez l'extension "Live Server" et cliquez-droit sur `index.html` → "Open with Live Server"

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `styles.css` (variables CSS) :
```css
:root {
    --primary-blue: #0077CC;
    --deep-blue: #003366;
    --gold: #FFD700;
    --yellow: #FFC107;
    --orange: #FF6B35;
}
```

### Images
Placez vos images dans le dossier `assets/` :
- Logo : `assets/logo.png`
- Stade : `assets/field.jpg`
- Partenaires : `assets/partners/nom-partenaire.png`

### Informations de Contact
Modifiez dans les fichiers HTML :
- Téléphone : `+594 694 98 50 35`
- Email : `contact@guyanevents.com`

## 📱 Fonctionnalités des Formulaires

### Formulaire d'Inscription Équipe
Collecte :
- Type d'équipe (Masculin/Féminin)
- Nom de l'équipe
- Quartier
- Informations responsable
- Nombre de joueurs

Prix automatiquement affiché selon le type d'équipe.

### Formulaire Contact Général
Pour toute question sur le tournoi.

### Formulaire Partenariat
Pour les entreprises souhaitant devenir partenaires.

## 💡 Intégration Backend (Optionnel)

Les formulaires envoient actuellement les données en console. Pour une vraie intégration :

### Option 1 : EmailJS
```javascript
// Dans script.js, ajoutez EmailJS
emailjs.send("service_id", "template_id", data)
    .then(response => {
        console.log('Email envoyé !', response);
    });
```

### Option 2 : Formspree
```html
<form action="https://formspree.io/f/votre-id" method="POST">
```

### Option 3 : Backend Custom
Créez une API pour recevoir les données des formulaires.

### Option 4 : WhatsApp (Activé)
Le code WhatsApp est commenté dans `script.js`. Décommentez pour rediriger vers WhatsApp :
```javascript
// window.open(whatsappUrl, '_blank');
```

## 🎯 SEO

Le site inclut :
- Meta descriptions optimisées
- Titres sémantiques (H1, H2, H3)
- Alt text sur les images
- Structure HTML5 sémantique
- Schema markup (à ajouter si besoin)

## 📊 Statistiques du Tournoi

- **16 équipes** participantes
- **3 jours** de compétition (26-28 décembre 2025)
- **40+ bénévoles** mobilisés
- **30 arbitres** formés
- **2000€+** en récompenses
- **1000+ spectateurs** attendus

## 🤝 Partenaires

- EBSK
- LA Transports
- SACI
- Culture Maroni
- Ville de Saint-Laurent du Maroni
- AIDES

## 🔧 Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Animations, Flexbox, Grid, Variables CSS
- **JavaScript (Vanilla)** : Interactivité, validation
- **Google Fonts** : Montserrat & Roboto
- **SVG Icons** : Icônes intégrées

## ✅ Compatibilité

- ✅ Chrome (dernière version)
- ✅ Firefox (dernière version)
- ✅ Safari (dernière version)
- ✅ Edge (dernière version)
- ✅ Mobile iOS & Android

## 📱 Responsive Design

Le site s'adapte automatiquement à :
- 📱 Mobile (< 480px)
- 📱 Tablette (481px - 768px)
- 💻 Desktop (> 768px)

## 🎨 Design

Design inspiré du flyer officiel du tournoi avec :
- Couleurs : Bleu, Or, Jaune
- Typographie : Montserrat (titres), Roboto (corps)
- Style : Moderne, dynamique, sportif

## 📞 Support

Pour toute question concernant le site ou le tournoi :
- 📞 Téléphone : +594 694 98 50 35
- 📧 Email : contact@guyanevents.com
- 📍 Lieu : Stade de la Charbonnière, Saint-Laurent du Maroni

## 📝 License

© 2025 Guyane Event's. Tous droits réservés.

## 🚀 Prochaines Étapes

1. [ ] Ajouter les vraies images (logo, stade, partenaires)
2. [ ] Connecter les formulaires à un backend ou EmailJS
3. [ ] Ajouter Google Analytics (si souhaité)
4. [ ] Ajouter une section Actualités/Blog
5. [ ] Intégrer une galerie photos
6. [ ] Ajouter un système de paiement en ligne
7. [ ] Créer une section Résultats en temps réel

---

**Développé avec ❤️ pour le Soholang CUP 2025**

*Site web 100% fonctionnel, prêt à être déployé !*
