# 🚫 Inscriptions Masculines Closes

## ✅ Fonctionnalité Implémentée

Les inscriptions pour le tournoi masculin sont maintenant **BLOQUÉES**. Quand quelqu'un tente de sélectionner "Équipe Masculine", un pop-up s'affiche avec :

1. **Message** que les inscriptions sont closes
2. **Liste complète** des 16 équipes qualifiées
3. **Message** "À l'année prochaine pour l'Édition N°2"
4. **Rappel** que les inscriptions féminines restent ouvertes

---

## 🏆 16 Équipes Qualifiées (Tournoi Masculin)

1. ⚽ FC Balaté
2. ⚽ Team PF
3. ⚽ FC Trafic
4. ⚽ FC St Jean
5. ⚽ FC PAMAKA
6. ⚽ FC CHARBO
7. ⚽ FC LAWA
8. ⚽ GuinGvmp
9. ⚽ ReziGvmp
10. ⚽ FC Sabaya
11. ⚽ FC Cadence
12. ⚽ FC Amapa
13. ⚽ FC Vampire
14. ⚽ FC Anakonde
15. ⚽ AS Yuong Paddock
16. ⚽ FC Bakalycé

---

## 🎯 Fonctionnement

### Déclenchement du Pop-up

Le pop-up s'affiche automatiquement quand :
- L'utilisateur sélectionne **"Équipe Masculine (450€)"** dans le formulaire d'inscription
- Le système détecte la valeur `masculine` et bloque l'action
- Le select est réinitialisé (impossible de soumettre)

### Comportement du Pop-up

**Affichage :**
- Animation fade-in + slide-up
- Overlay noir semi-transparent (80%)
- Contenu centré avec scroll si nécessaire
- Z-index élevé (10000) au-dessus de tout

**Fermeture :**
- Bouton [×] en haut à droite
- Clic à l'extérieur du modal
- Touche **Échap** du clavier

**Design :**
- Header bleu dégradé avec icône 🏆
- Liste des 16 équipes sur 2 colonnes
- Effet hover sur chaque équipe
- Message final avec animation pulse
- Rappel inscriptions féminines en vert

---

## 📦 Fichiers Modifiés

### ✅ contact.html (lignes 438-475)
**Ajouté :** Structure HTML complète du modal
- Header avec titre
- Body avec message et liste des 16 équipes
- Footer avec message édition N°2
- Bouton de fermeture

### ✅ contact-styles.css (lignes 418-643)
**Ajouté :** Styles CSS complets
- `.modal-overlay` : Fond noir transparent
- `.modal-content` : Carte blanche avec animations
- `.modal-close` : Bouton [×] animé
- `.modal-header` : Header bleu dégradé
- `.teams-grid` : Grille 2 colonnes (1 sur mobile)
- `.team-item` : Carte par équipe avec hover
- Animations : fadeIn, slideUp, pulse
- Responsive mobile

### ✅ script.js (lignes 102-158)
**Modifié :** Logique de détection et affichage
- Détection sélection "masculine"
- Affichage modal automatique
- Réinitialisation du select
- Fonction `showRegistrationClosedModal()`
- Fonction `closeRegistrationModal()`
- Event listeners pour fermeture (clic extérieur + Échap)

---

## 🔄 Workflow Utilisateur

```
1. Utilisateur ouvre le formulaire d'inscription
                    ↓
2. Sélectionne "Type d'équipe"
                    ↓
3a. Choisit "Équipe Féminine"     3b. Choisit "Équipe Masculine"
         ↓                                     ↓
    Formulaire OK                    ⚠️ MODAL S'AFFICHE
    Inscription possible                      ↓
                                    - Message inscriptions closes
                                    - Liste 16 équipes
                                    - "À l'année prochaine"
                                              ↓
                                    Select réinitialisé
                                    Inscription bloquée
```

---

## 💻 Code Clé

### Détection et Blocage (JavaScript)
```javascript
if (this.value === 'masculine') {
    // Afficher le modal
    showRegistrationClosedModal();
    
    // Réinitialiser le select (blocage)
    this.value = '';
    priceAmount.textContent = '--';
}
```

### Affichage Modal
```javascript
function showRegistrationClosedModal() {
    const modal = document.getElementById('closedModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
```

### Fermeture Multi-méthode
```javascript
// 1. Bouton [×]
onclick="closeRegistrationModal()"

// 2. Clic extérieur
if (e.target === modal) closeRegistrationModal();

// 3. Touche Échap
if (e.key === 'Escape') closeRegistrationModal();
```

---

## 🎨 Design du Modal

### Header (Bleu)
```
🏆 Inscriptions Closes - Tournoi Masculin
```

### Body (Blanc)
```
Les inscriptions pour le tournoi masculin sont closes.
Les 16 places sont complètes !

✅ Équipes Qualifiées (16/16)

[Grid 2 colonnes de 16 équipes]

🎊 À l'année prochaine pour l'Édition N°2 ! 🎊
Les inscriptions féminines restent ouvertes
```

---

## 📱 Responsive

**Desktop (>768px) :**
- Grid 2 colonnes pour les équipes
- Modal max-width 700px
- Padding généreux

**Mobile (<768px) :**
- Grid 1 colonne pour les équipes
- Modal adapté à l'écran
- Padding réduit
- Textes redimensionnés

---

## ✨ Animations

**Apparition :**
- `fadeIn` : Overlay de 0 à 100% opacité (0.3s)
- `slideUp` : Modal de bas vers haut (0.4s)

**Interactions :**
- Hover équipes : Déplacement à droite + ombre
- Bouton [×] hover : Background gris + rotation 90°
- Message édition N°2 : Pulse continu (2s)

---

## 🚀 Tester

1. **Ouvrez** la page contact : `http://localhost:8000/contact.html`
2. **Scrollez** jusqu'au formulaire "Inscription"
3. **Cliquez** sur "Type d'équipe"
4. **Sélectionnez** "Équipe Masculine (450€)"
5. **Le modal apparaît** avec la liste des 16 équipes
6. **Fermez** avec [×], clic extérieur ou Échap
7. **Constatez** que le select est réinitialisé

---

## ✅ Avantages

- ✅ **Blocage complet** : Impossible d'inscrire une équipe masculine
- ✅ **Information claire** : Liste complète des équipes qualifiées
- ✅ **UX professionnelle** : Modal moderne avec animations
- ✅ **Transparence** : Les 16 équipes sont affichées publiquement
- ✅ **Message futur** : "À l'année prochaine" prépare l'édition N°2
- ✅ **Rappel féminin** : Inscriptions féminines toujours ouvertes
- ✅ **Fermeture intuitive** : 3 méthodes de fermeture

---

## 👥 Inscriptions Féminines

**Toujours ouvertes** ✅

Les équipes féminines peuvent toujours s'inscrire :
- Prix : **250€** par équipe
- Formulaire accessible normalement
- Aucun blocage

---

## 🎊 Message Final

```
À l'année prochaine pour l'Édition N°2 !
Les inscriptions féminines restent ouvertes
```

---

**🚫 Inscriptions masculines closes, mais rendez-vous l'année prochaine ! 🎉⚽**
