# 📸 Images à Ajouter - Soholang CUP

## ✅ Modifications Effectuées

J'ai restructuré le site pour utiliser les 2 images que vous m'avez montrées :

1. **Flyer du tournoi** → Section "Le Tournoi Soholang CUP"
2. **Photo des demoiselles** → Nouvelle section "Tournoi Féminin"

---

## 📥 Images à Placer

### 1️⃣ FLYER DU TOURNOI (Image 2 fournie) ⭐ PRIORITAIRE

**Nom du fichier :** `flyer-tournament.jpg`

**Où le placer :**
```
/Users/studiojls/Downloads/GEST-SIMPLE-main/soholang-cup/assets/flyer-tournament.jpg
```

**Image à enregistrer :**
Le flyer bleu avec :
- Logo Guyane Event's
- "SOHOLANG CUP" en gros
- "26, 27 & 28 DÉCEMBRE 2025"
- "DATE LIMITE D'INSCRIPTION 16 NOV."
- Toutes les récompenses listées
- Sponsors en bas

**Utilisé dans :**
- Section "Le Tournoi Soholang CUP" (page d'accueil)
- Affichée à droite du texte de présentation

---

### 2️⃣ PHOTO DES DEMOISELLES (Image 1 fournie) ⭐ PRIORITAIRE

**Nom du fichier :** `women-football.jpg`

**Où le placer :**
```
/Users/studiojls/Downloads/GEST-SIMPLE-main/soholang-cup/assets/women-football.jpg
```

**Image à enregistrer :**
La photo avec les 2 joueuses de football :
- Une en maillot vert
- Une en maillot bleu/blanc
- Terrain de Charbonnière visible
- Cage de but en arrière-plan

**Utilisé dans :**
- Nouvelle section "Tournoi Féminin"
- Placée entre les récompenses et les partenaires

---

## 🎯 Comment Ajouter les Images

### Méthode 1 : Via le Finder (Recommandé)

1. **Enregistrez les 2 images** sur votre ordinateur depuis ce chat
2. **Renommez-les exactement comme indiqué** :
   - Flyer → `flyer-tournament.jpg`
   - Demoiselles → `women-football.jpg`
3. **Ouvrez le Finder** et allez à :
   ```
   /Users/studiojls/Downloads/GEST-SIMPLE-main/soholang-cup/assets/
   ```
4. **Glissez-déposez** les 2 images dans ce dossier
5. **Rafraîchissez** votre navigateur (Cmd + R)

### Méthode 2 : Via le Terminal

```bash
# Aller dans le dossier assets
cd /Users/studiojls/Downloads/GEST-SIMPLE-main/soholang-cup/assets/

# Vérifier que vous êtes au bon endroit
pwd

# Glisser-déposer vos images ici ou les copier avec :
# cp /chemin/vers/votre/flyer.jpg ./flyer-tournament.jpg
# cp /chemin/vers/votre/photo.jpg ./women-football.jpg
```

---

## 📍 Où Voir les Images sur le Site

### Image 1 : Flyer du Tournoi

**Page :** `index.html` (Accueil)
**Section :** "Le Tournoi Soholang CUP"
**Position :** À droite du texte de présentation
**URL :** `http://localhost:8000/#tournoi`

### Image 2 : Photo des Demoiselles

**Page :** `index.html` (Accueil)
**Section :** "Tournoi Féminin" (NOUVELLE SECTION)
**Position :** Après les récompenses, avant les partenaires
**URL :** `http://localhost:8000/` (scrollez après récompenses)

---

## ✨ Nouvelle Section Créée : "Tournoi Féminin"

J'ai créé une section complète dédiée au tournoi féminin avec :

**Contenu :**
- ✅ Photo des demoiselles (grande image à gauche)
- ✅ Titre : "Place aux Femmes sur le Terrain !"
- ✅ Texte de présentation
- ✅ 4 points forts avec icônes :
  - 💪 Compétition Égalitaire
  - 🏆 Récompenses Généreuses
  - 👥 Ambiance Festive
  - 💰 Inscription Accessible (250€)
- ✅ Bouton d'inscription "Inscrire mon équipe féminine"
- ✅ Date limite : 15 novembre 2025

**Design :**
- Fond dégradé rose/violet pastel
- Image avec badge doré "⚽ Tournoi Féminin"
- Cartes hover avec animation
- Bouton CTA en bas
- 100% responsive mobile

---

## 🎨 Résultat Visuel

### Structure Actuelle du Site (Accueil)

1. Hero / Accueil
2. Highlights (statistiques)
3. **Le Tournoi Soholang CUP** ← FLYER ICI 🆕
4. Informations Pratiques
5. Récompenses (Masculin + Féminin)
6. **Tournoi Féminin** ← PHOTO DEMOISELLES ICI 🆕
7. Partenaires
8. Call to Action
9. Footer

---

## 🔧 Fichiers Modifiés

### ✅ index.html
- **Ligne 158** : Image du flyer ajoutée
- **Lignes 324-384** : Nouvelle section Tournoi Féminin créée

### ✅ styles.css
- **Lignes 829-981** : Styles complets pour la section Tournoi Féminin
- Responsive mobile inclus

### ✅ assets/PLACER-LES-IMAGES-ICI.txt
- Guide rapide pour placer les images

---

## 🚀 Images de Secours

Si vous n'ajoutez pas les images immédiatement, des photos de secours (Unsplash) s'afficheront automatiquement grâce à `onerror=`.

**Mais vos vraies images sont BEAUCOUP mieux !** 📸

---

## ✅ Checklist

- [ ] Télécharger l'image du **flyer** (Image 2 que vous m'avez montrée)
- [ ] Renommer en `flyer-tournament.jpg`
- [ ] Placer dans le dossier `assets/`
- [ ] Télécharger l'image des **demoiselles** (Image 1)
- [ ] Renommer en `women-football.jpg`
- [ ] Placer dans le dossier `assets/`
- [ ] Rafraîchir le navigateur (Cmd + R)
- [ ] Vérifier que les 2 images s'affichent correctement

---

## 📱 Format Recommandé

**Flyer :**
- Format : JPG
- Largeur recommandée : 800-1200px
- Ratio : L'original du flyer

**Photo Demoiselles :**
- Format : JPG
- Largeur recommandée : 1000-1500px
- Ratio : Paysage (comme l'original)

---

## 💡 Astuce

Si les images sont trop grandes :
```bash
# Redimensionner avec Preview (Mac)
1. Ouvrir l'image avec Preview
2. Tools → Adjust Size
3. Largeur : 1200px
4. Conserver proportions : Coché
5. Enregistrer
```

---

**📸 Une fois les 2 images placées, votre site sera complet avec le flyer et la section féminine illustrée ! 🎉⚽**
