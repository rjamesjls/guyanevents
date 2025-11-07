# ⚽ Ballon Diagonal avec Rebonds

## ✅ Modification Effectuée

Le **ballon 2** (qui traversait l'écran en diagonale) a été modifié pour **rebondir sur les bords** au lieu de disparaître !

---

## 🔄 Avant vs Maintenant

### ❌ Avant
```
Ballon 2 départ coin haut-droit
         ↓
      Traverse en diagonale
         ↓
   Sort de l'écran (disparaît)
         ↓
   Réapparaît en haut
         ↓
   Recommence...
```

### ✅ Maintenant
```
Ballon 2 départ coin haut-droit
         ↓
      Se déplace en diagonale
         ↓
   Touche un bord → REBOND!
         ↓
   Change de direction
         ↓
   Continue à rebondir
         ↓
   Ne disparaît JAMAIS
```

---

## ⚽ Comportement des 2 Ballons Diagonaux

### Ballon 1 (Existant - déjà avec rebonds)
- **Départ** : Coin haut-gauche (100, 100)
- **Vitesse** : vx = 4, vy = 3
- **Direction initiale** : Diagonale vers bas-droite
- **Rebonds** : Sur tous les bords

### Ballon 2 (Modifié - maintenant avec rebonds)
- **Départ** : Coin haut-droit (largeur - 150, 150)
- **Vitesse** : vx = -3.5, vy = 3.5
- **Direction initiale** : Diagonale vers bas-gauche
- **Rebonds** : Sur tous les bords

---

## 🎾 Physique des Rebonds

### Collision Bord Gauche/Droit
```javascript
if (x2 <= 0) {
    x2 = 0;
    vx2 = Math.abs(vx2);  // Force vers la droite
    Compression visuelle scaleX(0.85)
} else if (x2 >= largeur - 50) {
    x2 = largeur - 50;
    vx2 = -Math.abs(vx2);  // Force vers la gauche
    Compression visuelle scaleX(0.85)
}
```

### Collision Bord Haut/Bas
```javascript
if (y2 <= 0) {
    y2 = 0;
    vy2 = Math.abs(vy2);  // Force vers le bas
    Compression visuelle scaleY(0.85)
} else if (y2 >= hauteur - 50) {
    y2 = hauteur - 50;
    vy2 = -Math.abs(vy2);  // Force vers le haut
    Compression visuelle scaleY(0.85)
}
```

---

## 🎨 Effets Visuels

### Rotation Continue
```javascript
rotation2 += (vx2 + vy2) * 0.5
transform: rotate(${rotation2}deg)
```

### Compression au Rebond
- **Rebond horizontal** : `scaleX(0.85)` pendant 100ms
- **Rebond vertical** : `scaleY(0.85)` pendant 100ms
- Simule l'écrasement du ballon à l'impact

### Ombre Portée
```javascript
filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))
```

---

## 📦 Fichier Modifié

**animations.js (lignes 357-427)**

### Changements
1. **Supprimé** : Système avec transitions CSS
2. **Supprimé** : Disparition hors écran
3. **Supprimé** : setInterval pour réinitialisation
4. **Ajouté** : Système de rebonds avec requestAnimationFrame
5. **Ajouté** : Variables physiques (x2, y2, vx2, vy2)
6. **Ajouté** : Détection de collision sur tous les bords
7. **Ajouté** : Inversion de direction au rebond
8. **Ajouté** : Effets de compression visuelle

---

## 🎯 Résultat

Maintenant vous avez **3 ballons** qui rebondissent sur l'écran :

1. **Ballon fixe dans hero** (`.bouncing-ball` dans HTML)
   - Position aléatoire au départ
   - Rebondit partout
   - Visible dans toutes les sections

2. **Ballon diagonal 1** (créé par JS)
   - Départ haut-gauche
   - Vitesse : 4, 3
   - Rebonds sur tous les bords

3. **Ballon diagonal 2** (créé par JS - modifié)
   - Départ haut-droit
   - Vitesse : -3.5, 3.5
   - **Rebonds au lieu de disparaître** ✅

---

## 🔍 Différences avec le Ballon Fixe

### Ballon Fixe (HTML)
- Friction de l'air (damping 0.98)
- Réduction de vitesse au rebond (0.85)
- Relance automatique si trop lent
- Position de départ aléatoire

### Ballons Diagonaux (JS)
- Pas de friction (vitesse constante)
- Pas de réduction au rebond
- Continuent éternellement
- Position de départ fixe

---

## 💨 Vitesses Comparées

| Ballon | Vitesse X | Vitesse Y | Direction Initiale |
|--------|-----------|-----------|-------------------|
| Fixe | -3 à +3 | -3 à +3 | Aléatoire |
| Diagonal 1 | 4 | 3 | Bas-droite |
| Diagonal 2 | -3.5 | 3.5 | Bas-gauche |

---

## 🎬 Animation Continue

Les deux ballons diagonaux utilisent `requestAnimationFrame` :
```javascript
function animateBall2() {
    // Calculs physiques
    x2 += vx2;
    y2 += vy2;
    
    // Rebonds
    if (collision) {
        inverse vitesse
    }
    
    // Affichage
    ball2.style.left = x2 + 'px';
    ball2.style.top = y2 + 'px';
    
    // Boucle infinie
    requestAnimationFrame(animateBall2);
}
```

**Résultat :** Animation fluide à 60 FPS sans interruption !

---

## 🔄 Pour Voir le Changement

1. **Rafraîchissez** la page (Cmd + R)
2. **Regardez** les ballons qui rebondissent
3. **Observez** : Aucun ballon ne disparaît maintenant !
4. **Les 2 ballons diagonaux** rebondissent continuellement

---

## ✨ Avantages

1. **Plus de disparition** : Les ballons restent toujours visibles
2. **Action continue** : Mouvement perpétuel
3. **Effets visuels** : Compression au rebond
4. **Physique cohérente** : Même système pour les deux ballons
5. **Performance** : requestAnimationFrame optimisé

---

## 🎯 Trajectoires

### Ballon 1
```
Haut-gauche → Bas-droite → Haut-droite → Bas-gauche → Haut-gauche...
```

### Ballon 2
```
Haut-droite → Bas-gauche → Haut-gauche → Bas-droite → Haut-droite...
```

Les deux ballons créent un **effet de ping-pong** dynamique !

---

**⚽ Le ballon diagonal 2 rebondit maintenant au lieu de disparaître ! Les deux ballons restent à l'écran en permanence ! 🎾✨**
