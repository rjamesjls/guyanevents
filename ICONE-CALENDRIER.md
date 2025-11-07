# 📅 Icône de Calendrier - Dates du Tournoi

## ✅ Fonctionnalité Ajoutée

Une **icône de calendrier** a été ajoutée dans le coin supérieur gauche du cadre des dates (26, 27, 28) sur la page d'accueil !

---

## 📍 Emplacement

**Section :** Hero (page d'accueil)
**Position :** Dans le cadre avec les dates "26 • 27 • 28 DÉCEMBRE 2025"
**Coin :** Haut à gauche dans la partie arrondie

---

## 🎨 Design

### Apparence
```
┌────────────────────────┐
│ 📅                     │ ← Icône calendrier
│                        │
│   26 • 27 • 28        │
│                        │
└────────────────────────┘
    DÉCEMBRE 2025
```

### Caractéristiques Visuelles
- ✅ **Icône SVG** de calendrier
- ✅ **Couleur dorée** (var(--gold))
- ✅ **Position** : Coin supérieur gauche (8px, 8px)
- ✅ **Taille** : 24x24 pixels
- ✅ **Animation pulse** : L'icône pulse doucement
- ✅ **Opacité** : 80% avec variation

---

## ⚙️ Animation

### Effet Pulse
L'icône pulse subtilement pour attirer l'attention :

```css
@keyframes calendarPulse {
    0%, 100% {
        opacity: 0.8;
        transform: scale(1);
    }
    50% {
        opacity: 1;
        transform: scale(1.1);
    }
}
```

**Durée :** 2 secondes
**Répétition :** Infinie
**Effet :** Zoom léger (110%) + opacité variable

---

## 📦 Fichiers Modifiés

### 1️⃣ index.html (ligne 51-53)
**Ajouté :** Icône SVG de calendrier
```html
<svg class="date-calendar-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14..."/>
</svg>
```

### 2️⃣ styles.css (lignes 362 et 365-385)
**Modifié :** Ajout de `position: relative` à `.date-box`
**Ajouté :** Styles `.date-calendar-icon` et animation `calendarPulse`

---

## 🎯 Styles CSS

### Position de l'Icône
```css
.date-calendar-icon {
    position: absolute;
    top: 8px;           /* 8px du haut */
    left: 8px;          /* 8px de la gauche */
    width: 24px;
    height: 24px;
    color: var(--gold); /* Couleur dorée */
    opacity: 0.8;
}
```

### Cadre de Date (Modifié)
```css
.date-box {
    position: relative;  /* Ajouté pour positionner l'icône */
    border-radius: 20px;
    /* ... autres styles ... */
}
```

---

## 🎨 Résultat Visuel

### Avant (Sans Icône)
```
┌────────────────────────┐
│                        │
│   26 • 27 • 28        │
│                        │
└────────────────────────┘
```

### Maintenant (Avec Icône)
```
┌────────────────────────┐
│ 📅 ✨                 │ ← Icône avec pulse
│                        │
│   26 • 27 • 28        │
│                        │
└────────────────────────┘
```

---

## 💡 Détails de l'Icône SVG

L'icône représente un **calendrier** avec :
- Haut du calendrier (barre horizontale)
- Corps du calendrier
- Ligne de date mise en évidence

**Format :** SVG (vectoriel)
**Avantage :** Reste net sur tous les écrans (même Retina)

---

## ✨ Avantages

1. **Visuel clair** : Indique immédiatement qu'il s'agit de dates
2. **Animation subtile** : Attire l'attention sans être distrayant
3. **Design cohérent** : Couleur dorée comme les numéros
4. **Professionnel** : Ajoute un élément graphique élégant
5. **Responsive** : S'adapte à tous les écrans

---

## 🔄 Pour Voir l'Icône

1. **Rafraîchissez** la page d'accueil (Cmd + R)
2. **Regardez** le cadre avec "26 • 27 • 28"
3. **Observez** l'icône de calendrier en haut à gauche qui pulse doucement ! 📅

---

## 📐 Position Exacte

```
┌─────────────────────────────┐
│ 8px                         │
│ ┌──┐                       │
│ │📅│  ← 24x24px            │
│ └──┘                       │
│                             │
│        26 • 27 • 28        │
│                             │
└─────────────────────────────┘
  8px du bord gauche
  8px du bord haut
```

---

## 🎯 Couleur

**Couleur principale :** `var(--gold)` = #FFD700 (or)
**Opacité :** 80% (0.8) avec variation jusqu'à 100%

Assortie aux numéros de date pour une cohérence visuelle parfaite !

---

## ⏱️ Animation Timeline

```
0s    : Opacité 80%, Taille 100%
1s    : Opacité 100%, Taille 110% (pic)
2s    : Retour à Opacité 80%, Taille 100%
Puis répète...
```

---

**📅 L'icône de calendrier est maintenant visible dans le coin supérieur gauche du cadre des dates ! Rafraîchissez pour la voir ! ✨**
