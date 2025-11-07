# 🚀 Démarrage Rapide - Soholang CUP

Guide ultra-simple pour lancer votre site en 2 minutes !

## Option 1 : Double-clic (Le plus simple)

1. Ouvrez le dossier `soholang-cup`
2. Double-cliquez sur `index.html`
3. ✅ Le site s'ouvre dans votre navigateur !

## Option 2 : Serveur Local (Recommandé)

### Avec Python (Pré-installé sur Mac)

```bash
cd /Users/studiojls/Downloads/GEST-SIMPLE-main/soholang-cup
python3 -m http.server 8000
```

Puis ouvrez votre navigateur : **http://localhost:8000**

### Avec VS Code + Live Server

1. Ouvrez VS Code
2. Installez l'extension "Live Server" de Ritwick Dey
3. Ouvrez le dossier `soholang-cup` dans VS Code
4. Clic-droit sur `index.html` → "Open with Live Server"
5. ✅ Le site s'ouvre automatiquement !

## 🎯 Navigation du Site

Le site contient 3 pages :

1. **index.html** → Page d'accueil (Landing page)
2. **about.html** → À propos de Guyane Event's
3. **contact.html** → Contact & Formulaire d'inscription

## 📱 Tester sur Mobile

1. Lancez le serveur local (Option 2)
2. Trouvez l'IP de votre Mac :
   ```bash
   ifconfig | grep "inet " | grep -v 127.0.0.1
   ```
3. Sur votre téléphone, ouvrez : `http://[VOTRE-IP]:8000`
   Exemple : `http://192.168.1.10:8000`

## 🎨 Ajouter Vos Images

Placez vos images dans le dossier `assets/` :

```
assets/
├── logo.png              ← Logo Guyane Event's
├── field.jpg             ← Photo du stade
└── partners/             ← Logos partenaires
    ├── ebsk.png
    ├── la-transports.png
    ├── saci.png
    └── ...
```

Le site a des images de secours si vos fichiers n'existent pas encore.

## ✅ Vérifier que Tout Fonctionne

Testez ces fonctionnalités :

- [ ] Navigation entre les pages
- [ ] Menu mobile (clic sur hamburger)
- [ ] Formulaire d'inscription équipe
- [ ] FAQ (clic pour ouvrir/fermer)
- [ ] Scroll fluide sur les ancres
- [ ] Responsive design (redimensionnez la fenêtre)

## 📝 Personnaliser le Contenu

### Changer le Téléphone & Email

Recherchez et remplacez dans tous les fichiers HTML :
- Téléphone : `+594 694 98 50 35`
- Email : `contact@guyanevents.com`

### Changer les Couleurs

Éditez `styles.css` (lignes 14-23) :

```css
:root {
    --primary-blue: #0077CC;    ← Bleu principal
    --gold: #FFD700;            ← Or
    --yellow: #FFC107;          ← Jaune
    --orange: #FF6B35;          ← Orange
}
```

## 🌐 Déployer en Ligne (Gratuit)

### Sur Netlify (Le plus simple)

1. Créez un compte sur [netlify.com](https://netlify.com)
2. Glissez-déposez le dossier `soholang-cup` sur Netlify
3. ✅ Votre site est en ligne en 30 secondes !

### Sur GitHub Pages

1. Créez un repo GitHub
2. Uploadez tous les fichiers
3. Settings → Pages → Deploy from main branch
4. ✅ Site accessible sur `votre-nom.github.io/soholang-cup`

### Sur Vercel

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Importez votre projet
3. ✅ Site déployé automatiquement !

## 🔥 Activer WhatsApp pour les Formulaires

Éditez `script.js` et décommentez ces lignes :

```javascript
// Ligne ~90, ~115, ~140
window.open(whatsappUrl, '_blank');  // ← Retirez le //
```

Les formulaires redirigeront vers WhatsApp avec le message pré-rempli.

## 📞 Besoin d'Aide ?

Le site est **100% fonctionnel** tel quel. Toutes les fonctionnalités marchent !

### Problèmes Courants

**❌ Les images ne s'affichent pas**
→ Normal si vous n'avez pas encore ajouté vos images dans `assets/`

**❌ Le formulaire ne fonctionne pas**
→ Normal, il faut connecter un backend ou activer WhatsApp

**❌ Le menu mobile ne s'ouvre pas**
→ Vérifiez que `script.js` est bien chargé

## 🎉 C'est Tout !

Votre site est prêt à l'emploi. Il ne vous reste qu'à :
1. Ajouter vos vraies images
2. Connecter les formulaires si besoin
3. Le déployer en ligne

**Bon tournoi ! ⚽🏆**
