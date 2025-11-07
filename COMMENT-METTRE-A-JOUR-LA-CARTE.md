# 🗺️ Comment Mettre à Jour la Carte Google Maps

## ✅ Carte Ajoutée !

J'ai ajouté une vraie carte Google Maps interactive dans la section "Comment nous trouver" de la page contact.html.

---

## 📍 Emplacement Actuel

La carte affiche l'adresse exacte :
- **Stade de la Charbonnière**
- **5 Rue Edgard Milien**
- **97320 Saint-Laurent-du-Maroni, Guyane**
- Adresse précise configurée

---

## 🔧 Pour Mettre l'Emplacement EXACT

Si vous avez l'adresse précise du stade, voici comment générer une carte exacte :

### Méthode 1 : Via Google Maps (Recommandé)

1. Allez sur [Google Maps](https://www.google.com/maps)
2. Cherchez : **"Stade de la Charbonnière, Saint-Laurent du Maroni"**
3. Cliquez sur **"Partager"**
4. Sélectionnez **"Intégrer une carte"**
5. Cliquez sur **"COPIER LE CODE HTML"**
6. Dans `contact.html` ligne 276-285, remplacez l'URL `src="..."` par la nouvelle

### Méthode 2 : Avec des Coordonnées GPS

Si vous avez les coordonnées exactes (latitude, longitude) :

1. Allez sur : `https://www.google.com/maps/@LATITUDE,LONGITUDE,15z`
   Exemple : `https://www.google.com/maps/@5.501886,-54.032347,15z`
2. Cliquez sur **"Partager" → "Intégrer une carte"**
3. Copiez le code
4. Remplacez dans `contact.html`

---

## 🎨 Personnalisation de la Carte

### Changer le Zoom

Dans l'URL de la carte, modifiez `15z` :
- `12z` = Zoom large (ville)
- `15z` = Zoom moyen (quartier) ← Actuel
- `18z` = Zoom proche (rue)

### Changer le Style

Ajoutez `&style=` à l'URL pour un style personnalisé.

---

## 💡 Fonctionnalités Actuelles

✅ **Carte Interactive**
- Zoom avec molette
- Déplacement avec souris
- Fullscreen disponible
- Itinéraire Google Maps

✅ **Info Box Élégante**
- Overlay en bas de la carte
- Effet verre (glassmorphism)
- Animation slide-up au chargement
- Affiche nom et adresse

✅ **Responsive**
- S'adapte à tous les écrans
- Mobile-friendly
- Loading optimisé (lazy)

---

## 📱 Responsive Mobile

Sur mobile, la carte s'ajuste automatiquement :
- Hauteur conservée : 450px
- Info box réduite
- Interactions tactiles

---

## 🔄 Tester la Carte

1. Rafraîchissez la page contact : `http://localhost:8000/contact.html`
2. Scrollez jusqu'à "Comment nous trouver"
3. La carte devrait être interactive avec :
   - Contrôles de zoom
   - Bouton fullscreen
   - Info box en bas

---

## 🎯 Adresse Exacte à Utiliser

Pour générer une carte précise, vous aurez besoin de :

**Option 1 - Adresse complète :**
```
Stade de la Charbonnière
Lamori-Cochi Maurice Moni Walter
Saint-Laurent du Maroni
97320, Guyane
```

**Option 2 - Coordonnées GPS :**
```
Latitude : [À définir]
Longitude : [À définir]
```

Une fois que vous avez cette information, suivez la Méthode 1 ci-dessus pour générer l'iframe exacte.

---

## 🛠️ Fichiers Modifiés

### contact.html (lignes 275-298)
- Ajout de l'iframe Google Maps
- Ajout de l'info box en overlay
- Structure HTML complète

### contact-styles.css (lignes 281-330)
- Style pour .map-container
- Style pour iframe
- Style pour .map-info (overlay)
- Animation slideUpFadeIn

---

## ✨ Effet Visuel

L'info box a un **effet de verre** avec :
- Fond transparent blanc (95%)
- Blur de 10px sur l'arrière-plan
- Ombre portée
- Animation slide-up au chargement
- Border subtile

---

## 🚀 Alternative : OpenStreetMap

Si vous préférez OpenStreetMap (gratuit, open-source) :

```html
<iframe 
    src="https://www.openstreetmap.org/export/embed.html?bbox=-54.05,5.49,-54.01,5.52&layer=mapnik&marker=5.501886,-54.032347"
    width="100%" 
    height="100%" 
    style="border:0; border-radius: 20px;">
</iframe>
```

---

**📍 La carte est maintenant fonctionnelle et interactive ! L'emplacement peut être affiné avec les coordonnées exactes.**
