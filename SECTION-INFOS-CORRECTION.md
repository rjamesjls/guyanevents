# 🔧 Section Informations Pratiques - Correction

## ❌ Problème

La section "Informations Pratiques" apparaissait vide car les cartes blanches étaient sur un fond blanc = invisibles !

## ✅ Solution

### Changement du fond
```css
/* AVANT */
background: var(--white);

/* MAINTENANT */
background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
```

### Amélioration des cartes
- Ombre plus visible
- Bordure légère ajoutée
- Barre bleue en haut conservée

## 📋 Contenu

4 cartes maintenant visibles :
1. Horaires
2. Inscriptions
3. Services sur place
4. Qui participe

## 🔄 Pour Voir

Rafraîchissez la page (Cmd + Shift + R)

Les 4 cartes d'informations sont maintenant visibles sur fond gris clair !
