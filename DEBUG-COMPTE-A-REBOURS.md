# 🔍 Débogage du Compte à Rebours

## ⚠️ Problème

Le compte à rebours affiche 00:00:00:00 et ne se met pas à jour.

## 🔧 J'ai Ajouté du Débogage

J'ai ajouté des messages de console détaillés pour identifier le problème.

---

## 📋 Instructions de Débogage

### 1️⃣ Rafraîchir la Page
```
Cmd + Shift + R (Mac)
Ctrl + Shift + R (Windows)
```

### 2️⃣ Ouvrir la Console
```
Cmd + Option + J (Mac)
Ctrl + Shift + J (Windows)
```

### 3️⃣ Chercher les Messages

Vous devriez voir dans la console :

#### ✅ Si Ça Fonctionne
```
🔍 Recherche élément countdown: [object HTMLDivElement]
⏱️ Compte à rebours initialisé - Démarrage immédiat
🔍 Debug Countdown: {
    tournamentDate: "Thu Dec 26 2025 08:00:00 GMT+0100"
    now: "Thu Nov 07 2024 10:47:00 GMT+0100"
    distance: 3386400000
    days: 49
}
✅ Jours mis à jour: 49
⏱️ Interval ID: 123
```

#### ❌ Si Ça Ne Marche Pas
```
❌ ERREUR: Élément #countdown non trouvé dans le DOM
🔍 Tous les IDs dans le document: [...]
```

---

## 🎯 Que Faire Selon le Message

### Cas 1 : "Élément #countdown non trouvé"

**Problème :** Le HTML n'a pas l'ID "countdown"

**Solution :** Vérifiez que le compte à rebours est bien dans le HTML :
```html
<div class="countdown" id="countdown">
```

### Cas 2 : "Élément days non trouvé"

**Problème :** Les sous-éléments (days, hours, etc.) n'existent pas

**Solution :** Vérifiez que les spans ont les bons IDs :
```html
<span id="days">00</span>
<span id="hours">00</span>
<span id="minutes">00</span>
<span id="seconds">00</span>
```

### Cas 3 : Le compte à rebours s'initialise mais reste à 00

**Problème :** Les calculs retournent 0 ou des valeurs négatives

**Solution :** Vérifiez les dates dans la console :
- `tournamentDate` doit être dans le futur
- `distance` doit être positif
- `days` doit être > 0

---

## 🧪 Test Manuel dans la Console

Copiez-collez ça dans la console du navigateur :

```javascript
// Test 1 : Vérifier que l'élément existe
const countdown = document.getElementById('countdown');
console.log('Countdown trouvé:', countdown);

// Test 2 : Vérifier les sous-éléments
console.log('Days:', document.getElementById('days'));
console.log('Hours:', document.getElementById('hours'));
console.log('Minutes:', document.getElementById('minutes'));
console.log('Seconds:', document.getElementById('seconds'));

// Test 3 : Calculer manuellement
const targetDate = new Date('2025-12-26T08:00:00').getTime();
const now = new Date().getTime();
const diff = targetDate - now;
const days = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log('Jours restants:', days);

// Test 4 : Mettre à jour manuellement
document.getElementById('days').textContent = days;
```

---

## 📊 Valeurs Attendues

**Date cible :** 26 décembre 2025 à 8h00

**Aujourd'hui :** 7 novembre 2024

**Jours restants :** Environ **414 jours**

Si vous voyez moins de 400 jours ou 0, il y a un problème de calcul de date.

---

## 🔄 Prochaines Étapes

1. **Rafraîchissez** avec Cmd + Shift + R
2. **Ouvrez la console** (Cmd + Option + J)
3. **Copiez TOUS les messages** de la console
4. **Envoyez-moi** ces messages pour que je puisse identifier le problème exact

---

## 💡 Causes Possibles

1. **Cache du navigateur** : Ancien JavaScript encore chargé
2. **Erreur JavaScript** : Bloque l'exécution du script
3. **IDs manquants** : HTML mal formé
4. **Format de date** : Problème de parsing de la date
5. **Fuseau horaire** : Problème de conversion de date

---

## 🆘 Si Rien ne Marche

Essayez dans un **navigateur privé** (mode incognito) :
- **Chrome/Safari** : Cmd + Shift + N
- **Firefox** : Cmd + Shift + P

Cela élimine tous les problèmes de cache.

---

**🔍 Ouvrez la console et envoyez-moi les messages que vous voyez ! 📊**
