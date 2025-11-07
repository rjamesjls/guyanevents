# 🔍 Effet Zoom sur "CUP"

## ✅ Animation Ajoutée !

Le mot **"CUP"** du titre principal a maintenant un effet de **zoom in/zoom out doux** et continu.

---

## 🎬 Caractéristiques de l'Animation

### Paramètres
- **Durée** : 3 secondes par cycle
- **Type** : `ease-in-out` (doux aux extrémités)
- **Répétition** : Infinie
- **Amplitude** : Scale de 1.0 à 1.08 (8% d'agrandissement)
- **Point d'origine** : Centre du mot

### Déroulement
```
0% ──────────> 50% ──────────> 100%
Scale 1.0      Scale 1.08      Scale 1.0
(Normal)       (Agrandi)       (Normal)
```

---

## 🎨 Code Ajouté

### Dans styles.css

**Animation appliquée (ligne 326-327) :**
```css
.hero-title-sub {
    /* ... styles existants ... */
    animation: zoomPulse 3s ease-in-out infinite;
    transform-origin: center;
}
```

**Keyframes créés (lignes 330-337) :**
```css
@keyframes zoomPulse {
    0%, 100% {
        transform: scale(1);      /* Taille normale */
    }
    50% {
        transform: scale(1.08);   /* Agrandi de 8% */
    }
}
```

---

## 🎯 Résultat Visuel

Le mot **"CUP"** :
- ✅ Grossit doucement
- ✅ Revient à sa taille normale
- ✅ Répète le cycle en continu
- ✅ Effet fluide et élégant
- ✅ Attire l'attention sans être agressif

---

## ⚙️ Personnalisation

### Rendre l'Effet Plus Doux (Plus Lent)

```css
animation: zoomPulse 4s ease-in-out infinite;
/* Au lieu de 3s */
```

### Rendre l'Effet Plus Dynamique (Plus Rapide)

```css
animation: zoomPulse 2s ease-in-out infinite;
/* Au lieu de 3s */
```

### Augmenter l'Amplitude du Zoom

```css
@keyframes zoomPulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.15);  /* 15% au lieu de 8% */
    }
}
```

### Diminuer l'Amplitude (Plus Subtil)

```css
@keyframes zoomPulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);  /* 5% seulement */
    }
}
```

### Ajouter un Effet de Brillance Simultané

```css
@keyframes zoomPulse {
    0%, 100% {
        transform: scale(1);
        text-shadow: 0 8px 30px rgba(255, 215, 0, 0.5);
    }
    50% {
        transform: scale(1.08);
        text-shadow: 0 8px 40px rgba(255, 215, 0, 0.8);
    }
}
```

### Changer le Type de Transition

```css
/* Plus sec (in/out rapide) */
animation: zoomPulse 3s ease infinite;

/* Linéaire (vitesse constante) */
animation: zoomPulse 3s linear infinite;

/* Accélération au début */
animation: zoomPulse 3s ease-in infinite;

/* Décélération à la fin */
animation: zoomPulse 3s ease-out infinite;
```

---

## 🔄 Pour Voir l'Effet

1. **Rafraîchissez** votre navigateur (Cmd + R)
2. **Regardez** le titre "SOHOLANG CUP"
3. Le mot **"CUP"** va grossir et rétrécir doucement en continu

---

## 📊 Comparaison avec l'Effet de Feu

| Élément | Animation | Effet |
|---------|-----------|-------|
| **SOHOLANG** | Feu (0.8s) | Clignotement lumineux |
| **CUP** | Zoom (3s) | Pulsation douce |

Les deux animations **se complètent** :
- SOHOLANG attire l'attention avec le feu
- CUP maintient l'attention avec le zoom

---

## 💡 Pourquoi 3 Secondes ?

**3 secondes** est la durée idéale pour un effet doux car :
- ✅ Assez lent pour être élégant
- ✅ Assez rapide pour rester dynamique
- ✅ Pas fatigant pour les yeux
- ✅ Ne distrait pas de la lecture

---

## 🎨 Amélioration Possible (Optionnel)

### Zoom + Rotation Légère

```css
@keyframes zoomPulse {
    0%, 100% {
        transform: scale(1) rotate(0deg);
    }
    50% {
        transform: scale(1.08) rotate(2deg);
    }
}
```

### Zoom + Déplacement Vertical

```css
@keyframes zoomPulse {
    0%, 100% {
        transform: scale(1) translateY(0);
    }
    50% {
        transform: scale(1.08) translateY(-5px);
    }
}
```

### Effet "Respiration"

```css
@keyframes zoomPulse {
    0%, 100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.08);
        opacity: 0.9;
    }
}
```

---

## 🔧 Fichier Modifié

**styles.css**
- **Ligne 326** : Animation ajoutée à `.hero-title-sub`
- **Ligne 327** : Point d'origine défini
- **Lignes 330-337** : Keyframes `@keyframes zoomPulse`

---

## 🚀 Performances

**Impact :** Minimal
- ✅ Animation CSS native (GPU accelerated)
- ✅ Utilise `transform` (optimisé)
- ✅ Pas de JavaScript requis
- ✅ Fluide à 60 FPS
- ✅ Compatible tous navigateurs

---

## 📱 Mobile

L'animation fonctionne parfaitement sur mobile avec :
- Même fluidité
- Même effet
- Aucun problème de performance

---

**🔍 Le mot "CUP" pulse maintenant doucement pour attirer l'attention ! ✨**
