# 📧 Configuration EmailJS - Guide Complet

## ✅ Ce Qui a Été Configuré

Le formulaire d'inscription démos envoie maintenant automatiquement :
- 📱 **WhatsApp** : +594 694 985 035 (activé)
- 📧 **Email** : Verda-Joseph@hotmail.fr (nécessite configuration EmailJS)

---

## 🎯 Étape 1 : Créer un Compte EmailJS (Gratuit)

### 1. Aller sur EmailJS
👉 https://www.emailjs.com/

### 2. Créer un Compte
- Cliquer sur **"Sign Up"**
- Utiliser votre email : **Verda-Joseph@hotmail.fr**
- Ou créer avec Google/GitHub

### 3. Plan Gratuit
- ✅ **200 emails/mois gratuits**
- ✅ Largement suffisant pour vos inscriptions
- ✅ Pas de carte bancaire requise

---

## 🔧 Étape 2 : Configurer le Service Email

### 1. Ajouter un Service Email

Une fois connecté sur EmailJS :

1. Aller dans **"Email Services"** (menu gauche)
2. Cliquer sur **"Add New Service"**
3. Choisir **"Outlook / Hotmail"** (car vous utilisez @hotmail.fr)
4. Remplir :
   - **Service Name** : `soholang_cup_service`
   - **Email** : `Verda-Joseph@hotmail.fr`
   - **Password** : Votre mot de passe Hotmail
5. Cliquer sur **"Create Service"**
6. **Noter le Service ID** (ex: `service_abc123`) ✍️

---

## 📝 Étape 3 : Créer un Template d'Email

### 1. Aller dans Email Templates

1. Cliquer sur **"Email Templates"** (menu gauche)
2. Cliquer sur **"Create New Template"**

### 2. Configurer le Template

**Template Name** : `demo_inscription`

**Subject** (Sujet) :
```
🔥 Nouvelle inscription Démos Street Workout - {{from_name}}
```

**Content** (Corps de l'email) :
```
Bonjour,

Une nouvelle inscription pour les démos Street Workout vient d'arriver !

👤 PARTICIPANT
━━━━━━━━━━━━━━━━
Nom : {{from_name}}
Email : {{from_email}}
Téléphone : {{phone}}

🏋️ DÉTAILS
━━━━━━━━━━━━━━━━
Activité : {{activity}}
Niveau : {{level}}

💬 COMMENTAIRES
━━━━━━━━━━━━━━━━
{{comments}}

━━━━━━━━━━━━━━━━
📅 Soholang CUP 2025
26-28 Décembre 2025
```

**Settings** :
- **From Email** : `Verda-Joseph@hotmail.fr`
- **From Name** : `Soholang CUP`
- **To Email** : Laisser vide (sera rempli automatiquement)
- **Reply To** : `{{from_email}}`

### 3. Sauvegarder

- Cliquer sur **"Save"**
- **Noter le Template ID** (ex: `template_xyz789`) ✍️

---

## 🔑 Étape 4 : Récupérer la Clé Publique

1. Aller dans **"Account"** (en haut à droite)
2. Cliquer sur **"General"**
3. Trouver **"Public Key"** (ex: `AbCdEfGh123456`)
4. **Copier cette clé** 📋

---

## 💻 Étape 5 : Mettre à Jour le Code

### Fichier 1 : index.html (ligne 692)

Remplacer :
```javascript
emailjs.init("YOUR_PUBLIC_KEY");
```

Par :
```javascript
emailjs.init("AbCdEfGh123456"); // Votre clé publique
```

### Fichier 2 : script.js (ligne 592)

Remplacer :
```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
```

Par :
```javascript
emailjs.send('service_abc123', 'template_xyz789', {
```

**Utilisez vos vrais IDs notés aux étapes précédentes !**

---

## 🧪 Étape 6 : Tester

### 1. Sauvegarder et Pousser sur GitHub

```bash
cd /Users/studiojls/Downloads/GEST-SIMPLE-main/soholang-cup
git add .
git commit -m "✉️ Configuration EmailJS pour inscriptions démos"
git push
```

### 2. Attendre le Déploiement Vercel

Vercel va automatiquement redéployer (~30 secondes)

### 3. Tester le Formulaire

1. Aller sur votre site
2. Cliquer sur **"Rejoindre les démos"**
3. Remplir le formulaire
4. Cliquer sur **"M'inscrire"**

**Résultat attendu :**
- ✅ Un nouvel onglet WhatsApp s'ouvre
- ✅ Un email arrive dans Verda-Joseph@hotmail.fr
- ✅ Message de succès s'affiche

---

## 📧 Format de l'Email Reçu

Vous recevrez un email comme ceci :

**De :** Soholang CUP (Verda-Joseph@hotmail.fr)
**À :** Verda-Joseph@hotmail.fr
**Sujet :** 🔥 Nouvelle inscription Démos Street Workout - John Doe

```
Bonjour,

Une nouvelle inscription pour les démos Street Workout vient d'arriver !

👤 PARTICIPANT
━━━━━━━━━━━━━━━━
Nom : John Doe
Email : john.doe@example.com
Téléphone : +594 694 XX XX XX

🏋️ DÉTAILS
━━━━━━━━━━━━━━━━
Activité : 🔥 Tout ! (Initiation + Concours)
Niveau : Débutant

💬 COMMENTAIRES
━━━━━━━━━━━━━━━━
J'ai hâte de participer !

━━━━━━━━━━━━━━━━
📅 Soholang CUP 2025
26-28 Décembre 2025
```

---

## 🔄 Workflow Complet

```
Utilisateur remplit formulaire
         ↓
Clic "M'inscrire"
         ↓
    ┌────────────────┐
    ↓                ↓
WhatsApp          Email
s'ouvre         envoyé
    ↓                ↓
Message       Verda-Joseph
formaté       @hotmail.fr
         ↓
Message de succès
affiché
```

---

## 🛠️ Dépannage

### Problème 1 : Email Non Reçu

**Vérifier :**
- [ ] Service ID correct dans script.js
- [ ] Template ID correct dans script.js
- [ ] Public Key correcte dans index.html
- [ ] Service Email bien connecté dans EmailJS
- [ ] Vérifier les **spams** dans Hotmail

**Solution :**
Aller sur EmailJS Dashboard → "History" pour voir si l'email a été envoyé

### Problème 2 : Erreur Console

Ouvrir la console (F12) et chercher :
- ✅ `✅ Email envoyé avec succès!` → Tout fonctionne
- ❌ `❌ Erreur envoi email:` → Problème de configuration

**Solutions communes :**
- Vérifier que les 3 clés sont correctes
- Vider le cache (Cmd+Shift+R)
- Vérifier qu'EmailJS est bien initialisé

### Problème 3 : WhatsApp Ne S'Ouvre Pas

**Cause :** Bloqueur de popups du navigateur

**Solution :**
- Autoriser les popups pour le site
- Ou clic droit sur le bouton → "Ouvrir dans un nouvel onglet"

---

## 📊 Suivi des Inscriptions

### Sur EmailJS Dashboard

1. Aller sur https://dashboard.emailjs.com/
2. Cliquer sur **"History"**
3. Voir tous les emails envoyés avec :
   - Date et heure
   - Statut (Success/Failed)
   - Destinataire
   - Contenu

### Dans Votre Boîte Email

Tous les emails arrivent dans **Verda-Joseph@hotmail.fr**

**Astuce :** Créer un dossier "Inscriptions Démos" dans Hotmail et une règle automatique pour les ranger.

---

## 💡 Conseils

### 1. Créer un Libellé Gmail

Si vous transférez vers Gmail :
1. Créer un libellé "Soholang CUP - Démos"
2. Créer un filtre : emails de `Verda-Joseph@hotmail.fr` avec sujet contenant "Démos"
3. Auto-label + marquer comme important

### 2. Notification Instantanée

Sur votre téléphone :
- Installer l'app **Outlook** ou **Hotmail**
- Activer les notifications push
- Vous serez alerté immédiatement des nouvelles inscriptions

### 3. Répondre aux Participants

Utiliser le **Reply To** configuré dans le template :
- Cliquer sur "Répondre"
- L'email du participant sera automatiquement rempli
- Envoyer confirmation ou infos complémentaires

---

## 🎯 Résumé - Checklist

Avant de déployer, vérifier :

- [ ] Compte EmailJS créé
- [ ] Service Outlook/Hotmail ajouté
- [ ] Template "demo_inscription" créé
- [ ] Public Key copiée
- [ ] Service ID noté
- [ ] Template ID noté
- [ ] index.html mis à jour avec Public Key
- [ ] script.js mis à jour avec Service ID + Template ID
- [ ] Code poussé sur GitHub
- [ ] Vercel redéployé
- [ ] Test formulaire effectué
- [ ] Email de test reçu dans Verda-Joseph@hotmail.fr
- [ ] WhatsApp fonctionne (+594 694 985 035)

---

## 📞 Support

### EmailJS Support
- **Documentation** : https://www.emailjs.com/docs/
- **FAQ** : https://www.emailjs.com/docs/faq/
- **Contact** : support@emailjs.com

### Problèmes Hotmail
Si emails n'arrivent pas :
1. Vérifier **Courrier indésirable**
2. Ajouter noreply@emailjs.com aux contacts
3. Vérifier filtres Hotmail

---

## 🚀 Prochaines Étapes

1. **Maintenant** : Configurer EmailJS (15 minutes)
2. **Ensuite** : Mettre à jour le code avec vos clés
3. **Puis** : Pousser sur GitHub
4. **Enfin** : Tester sur le site en production

---

## 📧 Récapitulatif des Emails

**Email de destination :** Verda-Joseph@hotmail.fr
**Fréquence :** À chaque inscription démos
**Format :** Email formaté avec toutes les infos
**Limite gratuite :** 200 emails/mois

---

## 💰 Tarification EmailJS

### Plan Gratuit (Actuel)
- ✅ 200 emails/mois
- ✅ Support email
- ✅ Templates illimités
- ✅ Parfait pour vos besoins !

### Si Vous Dépassez 200/mois
- **Plan Personal** : 7€/mois (1000 emails)
- **Plan Professional** : 15€/mois (5000 emails)

**Note :** 200 emails gratuits = ~6-7 inscriptions par jour pendant 1 mois. Largement suffisant !

---

**✉️ Configuration EmailJS prête ! Suivez le guide ci-dessus pour activer l'envoi automatique vers Verda-Joseph@hotmail.fr ! 🚀**
