# ⏱️ Compte à Rebours - Tournoi Soholang CUP

## ✅ Fonctionnalité Ajoutée

Un **compte à rebours dynamique** a été ajouté pour afficher le temps restant jusqu'au début du tournoi le **26 décembre 2025 à 8h00** !

---

## 📍 Emplacement

**Position :** Juste en dessous de la mention "26 au 28 décembre 2025" dans la section "Le Tournoi Soholang CUP"

Le compte à rebours s'affiche dans un bloc bleu élégant avec :
- 📅 **Jours** restants
- ⏰ **Heures** restantes
- ⏲️ **Minutes** restantes
- ⏱️ **Secondes** restantes

---

## 🎨 Design

### Apparence
```
┌────────────────────────────────────────┐
│  ⏱️ LE TOURNOI COMMENCE DANS :        │
│                                        │
│  ┌──────┐   ┌──────┐   ┌──────┐      │
│  │  47  │ : │  12  │ : │  35  │ : │28││
│  │Jours │   │Heures│   │Minutes│  │Sec││
│  └──────┘   └──────┘   └──────┘      │
└────────────────────────────────────────┘
```

### Caractéristiques Visuelles
- ✅ **Fond bleu dégradé** (003366 → 0077CC)
- ✅ **Cartes translucides** avec effet glassmorphism
- ✅ **Effet hover** : Les cartes se soulèvent au survol
- ✅ **Ombres élégantes** pour la profondeur
- ✅ **Police Montserrat** pour les chiffres
- ✅ **Responsive** adapté mobile

---

## ⚙️ Fonctionnement

### Date Cible
**26 décembre 2025 à 8h00** (heure de début du tournoi)

### Mise à Jour
Le compte à rebours se met à jour **automatiquement toutes les secondes** en temps réel.

### Calculs
```javascript
Jours    = Temps restant / (24 heures)
Heures   = Reste / (1 heure)
Minutes  = Reste / (1 minute)
Secondes = Reste
```

### Quand le Tournoi Commence
Lorsque la date du 26 décembre 2025 est atteinte, le compte à rebours affiche :
```
🎉 Le tournoi est en cours ! 🎉
```

---

## 📦 Fichiers Modifiés

### 1️⃣ index.html (lignes 125-149)
**Ajouté :** Structure HTML du compte à rebours
- Container avec titre
- 4 blocs pour jours, heures, minutes, secondes
- Séparateurs ":" entre chaque bloc
- IDs pour la mise à jour JavaScript

### 2️⃣ styles.css (lignes 574-666)
**Ajouté :** Styles CSS complets
- `.countdown-container` : Fond bleu dégradé
- `.countdown-title` : Titre centré
- `.countdown` : Flex layout pour les cartes
- `.countdown-item` : Cartes individuelles
- `.countdown-value` : Chiffres grands et gras
- `.countdown-label` : Labels (Jours, Heures, etc.)
- `.countdown-separator` : Séparateurs ":"
- Responsive mobile avec adaptations

### 3️⃣ script.js (lignes 159-198)
**Ajouté :** Logique JavaScript
- Fonction `updateCountdown()` pour calculs
- Mise à jour toutes les 1000ms (1 seconde)
- Format 2 chiffres avec `padStart()`
- Détection fin du tournoi
- Dans le bloc `DOMContentLoaded`

---

## 🔢 Format d'Affichage

Les nombres s'affichent toujours sur **2 chiffres** :
```
05 jours (pas 5 jours)
08 heures (pas 8 heures)
00 minutes (pas 0 minutes)
09 secondes (pas 9 secondes)
```

---

## 📱 Responsive

### Desktop (>768px)
- 4 cartes côte à côte
- Séparateurs ":" visibles
- Grande taille de police (48px)
- Padding généreux

### Mobile (<768px)
- Cartes en grid adaptatif
- Séparateurs ":" cachés
- Taille de police réduite (36px)
- Padding réduit
- 2 cartes par ligne

---

## 🎯 Animations

### Effet Hover
Au survol d'une carte :
- **Déplacement** : translateY(-5px)
- **Ombre** : Plus prononcée
- **Transition** : Douce (0.3s ease)

### Mise à Jour en Temps Réel
Les chiffres changent automatiquement chaque seconde avec une transition fluide.

---

## 💡 Personnalisation

### Modifier la Date Cible
Dans `script.js` ligne 164 :
```javascript
const tournamentDate = new Date('2025-12-26T08:00:00').getTime();
```

Changez la date/heure selon vos besoins :
```javascript
'YYYY-MM-DDTHH:MM:SS'
```

### Modifier les Couleurs
Dans `styles.css` ligne 580 :
```css
background: linear-gradient(135deg, #003366, #0077CC);
```

### Modifier le Message Final
Dans `script.js` ligne 189 :
```javascript
countdownContainer.innerHTML = '<div class="countdown-title">🎉 Le tournoi est en cours ! 🎉</div>';
```

---

## ✅ Avantages

1. **Dynamique** : Mise à jour automatique en temps réel
2. **Précis** : Jusqu'à la seconde près
3. **Visuellement attractif** : Design moderne et élégant
4. **Responsive** : Fonctionne sur tous les écrans
5. **Informatif** : Crée de l'anticipation pour le tournoi
6. **Automatique** : Aucune intervention manuelle nécessaire

---

## 🔄 Pour Voir le Compte à Rebours

1. **Rafraîchissez** la page (Cmd + R)
2. **Scrollez** jusqu'à la section "Le Tournoi Soholang CUP"
3. **Le compte à rebours s'affiche** juste après "26 au 28 décembre 2025"
4. **Regardez les secondes** changer en temps réel ! ⏱️

---

## 🎊 Exemple de Compte à Rebours

Si nous sommes le **1er décembre 2025 à 14h30** :
```
⏱️ LE TOURNOI COMMENCE DANS :

┌──────┐   ┌──────┐   ┌──────┐   ┌──────┐
│  24  │ : │  17  │ : │  30  │ : │  00  │
│Jours │   │Heures│   │Minutes│   │Secondes│
└──────┘   └──────┘   └──────┘   └──────┘
```

---

**⏱️ Le compte à rebours est maintenant actif et affiche le temps restant jusqu'au tournoi ! Rafraîchissez pour le voir ! 🎉⚽**
