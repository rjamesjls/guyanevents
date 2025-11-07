# 🗺️ Corriger la Localisation de la Carte

## ✅ Mise à Jour Effectuée

J'ai mis à jour l'URL de la carte pour pointer vers l'emplacement exact du Stade de la Charbonnière que vous avez entouré.

---

## 🎯 Pour une Précision Maximale

Pour obtenir l'emplacement **EXACT** à 100%, voici la meilleure méthode :

### Étape 1 : Ouvrir Google Maps

1. Allez sur [Google Maps](https://www.google.com/maps)
2. Cherchez : **"Stade de la Charbonnière 5 Rue Edgard Milien Saint-Laurent-du-Maroni"**
3. Ou utilisez l'emplacement que vous avez entouré sur votre capture

### Étape 2 : Obtenir le Code d'Intégration

1. Cliquez sur le **marqueur** du stade
2. Dans la fenêtre qui s'ouvre, cliquez sur **"Partager"**
3. Sélectionnez **"Intégrer une carte"**
4. Cliquez sur **"COPIER LE CODE HTML"**

### Étape 3 : Remplacer dans le Code

1. Ouvrez `contact.html`
2. Trouvez la ligne 277 (l'iframe)
3. Remplacez toute la balise `<iframe>...</iframe>` par le code que vous venez de copier
4. Gardez juste les styles : `style="border:0; border-radius: 20px;"`

---

## 🔄 Exemple de Code à Remplacer

**Actuellement (lignes 276-285) :**
```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!..."
    width="100%" 
    height="100%" 
    style="border:0; border-radius: 20px;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"
    title="Stade de la Charbonnière">
</iframe>
```

**Remplacez par le code Google Maps avec les bordures arrondies :**
```html
<iframe 
    src="[URL COPIÉE DEPUIS GOOGLE MAPS]"
    width="100%" 
    height="100%" 
    style="border:0; border-radius: 20px;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

---

## 📍 Adresse Exacte

D'après votre capture :
```
Stade de la Charbonnière
5 Rue Edgard Milien
97320 Saint-Laurent-du-Maroni
Guyane
```

---

## 🔍 Vérification

Pour vérifier que la carte est correcte :

1. **Rafraîchissez** la page contact (Cmd + R)
2. **Scrollez** jusqu'à "Comment nous trouver"
3. **Vérifiez** que le marqueur est bien à l'endroit que vous avez entouré
4. **Cliquez** sur "Agrandir le plan" dans la carte
5. **Confirmez** que c'est le bon emplacement

---

## 🎯 Alternative : Utiliser les Coordonnées GPS

Si vous avez les coordonnées GPS exactes du stade :

### Format Google Maps Embed avec Coordonnées
```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3977!2d-54.035!3d5.501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5m2!1sfr!2sfr"
    width="100%" 
    height="100%" 
    style="border:0; border-radius: 20px;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

**Remplacez :**
- `2d-54.035` par la **longitude** exacte
- `3d5.501` par la **latitude** exacte

---

## 💡 Astuce : Trouver les Coordonnées GPS

1. Sur Google Maps, **clic droit** sur le stade
2. Cliquez sur les **coordonnées** qui apparaissent (ex: 5.5012, -54.0345)
3. Elles seront copiées automatiquement
4. Utilisez-les dans l'URL

---

## 🆘 Méthode Ultra-Simple

Si c'est trop compliqué, envoyez-moi :
- Les **coordonnées GPS** exactes du stade (latitude, longitude)
- Ou une **capture d'écran** de l'URL Google Maps

Et je générerai le code exact pour vous !

---

## ✅ Test Rapide

Après avoir mis à jour :
```bash
# Rafraîchir avec cache vidé
Cmd + Shift + R
```

La carte devrait maintenant pointer exactement à l'endroit que vous avez entouré !

---

**📍 J'ai mis à jour l'URL, mais pour une précision à 100%, utilisez la méthode Google Maps ci-dessus !**
