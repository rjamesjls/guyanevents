// ====================================
// NAVIGATION
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (navToggle) {
                navToggle.classList.remove('active');
            }
        });
    });
    
    // Active link on scroll
    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;
        
        document.querySelectorAll('section[id]').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
        
        // Navbar background on scroll
        const navbar = document.querySelector('.navbar');
        if (scrollPosition > 50) {
            navbar.style.background = 'rgba(0, 51, 102, 1)';
            navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.background = 'rgba(0, 51, 102, 0.95)';
            navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
        }
    });
});

// ====================================
// SMOOTH SCROLLING
// ====================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ====================================
// FORM TABS (Contact Page)
// ====================================
const formTabs = document.querySelectorAll('.form-tab');
const formContents = document.querySelectorAll('.form-content');

formTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-tab');
        
        // Remove active class from all tabs and contents
        formTabs.forEach(t => t.classList.remove('active'));
        formContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding form
        const targetForm = document.getElementById(targetTab + 'Form');
        if (targetForm) {
            targetForm.classList.add('active');
        }
    });
    
    // ====================================
    // TEAM TYPE PRICE UPDATE & REGISTRATION CHECK
    // ====================================
    const teamTypeSelect = document.getElementById('teamType');
    const priceDisplay = document.getElementById('priceDisplay');

    if (teamTypeSelect && priceDisplay) {
        teamTypeSelect.addEventListener('change', function() {
            const priceAmount = priceDisplay.querySelector('.price-amount');
            const priceDetails = priceDisplay.querySelector('.price-details');
            
            if (this.value === 'masculine') {
                // Afficher le modal des inscriptions closes
                showRegistrationClosedModal();
                // Réinitialiser le select
                this.value = '';
                priceAmount.textContent = '--';
                priceDetails.textContent = 'Sélectionnez un type d\'équipe';
            } else if (this.value === 'feminine') {
                priceAmount.textContent = '250€';
                priceDetails.textContent = 'Par équipe';
            }
        });
    }

    // Fonction pour afficher le modal
    function showRegistrationClosedModal() {
        const modal = document.getElementById('closedModal');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Bloquer le scroll
        }
    }

    // Fonction pour fermer le modal (globale pour onclick)
    window.closeRegistrationModal = function() {
        const modal = document.getElementById('closedModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Réactiver le scroll
        }
    }

    // Fermer le modal en cliquant à l'extérieur
    document.addEventListener('click', function(e) {
        const modal = document.getElementById('closedModal');
        if (e.target === modal) {
            closeRegistrationModal();
        }
    });

    // Fermer le modal avec la touche Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeRegistrationModal();
        }
    });
    
    // ====================================
    // COUNTDOWN TIMER - DÉSACTIVÉ (voir fin du fichier pour la version active)
    // ====================================
    // Le compte à rebours est maintenant géré à la fin du fichier
    // hors du DOMContentLoaded pour une exécution immédiate garantie
});

// ====================================
// FORM SUBMISSIONS
// ====================================

// Registration Form
const registrationForm = document.getElementById('registrationForm');
if (registrationForm) {
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        console.log('Inscription data:', data);
        
        // Here you would normally send data to a server
        // For now, we'll just show a success message
        
        // Hide any existing messages
        document.getElementById('errorMessage').classList.remove('show');
        
        // Show success message
        const successMsg = document.getElementById('successMessage');
        successMsg.classList.add('show');
        
        // Reset form
        this.reset();
        
        // Reset price display
        if (priceDisplay) {
            const priceAmount = priceDisplay.querySelector('.price-amount');
            const priceDetails = priceDisplay.querySelector('.price-details');
            priceAmount.textContent = '450€';
            priceDetails.textContent = 'Par équipe (16 joueurs maximum)';
        }
        
        // Hide message after 5 seconds
        setTimeout(() => {
            successMsg.classList.remove('show');
        }, 5000);
        
        // Send to WhatsApp (optional)
        const phone = '+594694985035';
        const teamType = data.teamType === 'masculine' ? 'Masculine' : 'Féminine';
        const message = `🏆 NOUVELLE INSCRIPTION SOHOLANG CUP\n\nÉquipe: ${teamType}\nNom: ${data.teamName}\nQuartier: ${data.district}\nResponsable: ${data.managerFirstName} ${data.managerName}\nTél: ${data.phone}\nEmail: ${data.email}\nJoueurs: ${data.playerCount}\n${data.comments ? '\nCommentaires: ' + data.comments : ''}`;
        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        
        // Uncomment to enable WhatsApp redirect
        // window.open(whatsappUrl, '_blank');
    });
}

// General Contact Form
const generalForm = document.getElementById('generalForm');
if (generalForm) {
    generalForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        console.log('General contact data:', data);
        
        document.getElementById('genErrorMessage').classList.remove('show');
        const successMsg = document.getElementById('genSuccessMessage');
        successMsg.classList.add('show');
        this.reset();
        
        setTimeout(() => {
            successMsg.classList.remove('show');
        }, 5000);
        
        // WhatsApp option
        const phone = '+594694985035';
        const message = `📧 NOUVEAU MESSAGE\n\nNom: ${data.genFirstName} ${data.genName}\nTél: ${data.genPhone || 'Non renseigné'}\nEmail: ${data.genEmail}\nSujet: ${data.subject}\n\nMessage:\n${data.genMessage}`;
        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        // window.open(whatsappUrl, '_blank');
    });
}

// Partnership Form
const partnershipForm = document.getElementById('partnershipForm');
if (partnershipForm) {
    partnershipForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        console.log('Partnership data:', data);
        
        document.getElementById('partErrorMessage').classList.remove('show');
        const successMsg = document.getElementById('partSuccessMessage');
        successMsg.classList.add('show');
        this.reset();
        
        setTimeout(() => {
            successMsg.classList.remove('show');
        }, 5000);
        
        // WhatsApp option
        const phone = '+594694985035';
        const partnershipTypes = {
            'sponsor': 'Sponsor officiel',
            'supplier': 'Fournisseur',
            'media': 'Partenaire média',
            'other': 'Autre'
        };
        const message = `🤝 DEMANDE DE PARTENARIAT\n\nEntreprise: ${data.companyName}\nContact: ${data.contactFirstName} ${data.contactName}\nTél: ${data.partPhone}\nEmail: ${data.partEmail}\nType: ${partnershipTypes[data.partnershipType]}\n\nProposition:\n${data.partMessage}`;
        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        // window.open(whatsappUrl, '_blank');
    });
}

// ====================================
// FAQ ACCORDION
// ====================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(i => i.classList.remove('active'));
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ====================================
// SCROLL ANIMATIONS
// ====================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.highlight-card, .info-card, .reward-card, .partner-card, .mission-card, .value-card, .impact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ====================================
// COUNTDOWN TIMER (Optional)
// ====================================
function updateCountdown() {
    const eventDate = new Date('December 26, 2025 08:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // You can display this in your HTML if you add a countdown element
        console.log(`Countdown: ${days}j ${hours}h ${minutes}m ${seconds}s`);
    }
}

// Update countdown every second (optional - uncomment to activate)
// setInterval(updateCountdown, 1000);

// ====================================
// LOADING ANIMATIONS
// ====================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});

// ====================================
// EMAIL VALIDATION
// ====================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add email validation to forms
document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            this.style.borderColor = '#DC3545';
            if (!this.nextElementSibling || !this.nextElementSibling.classList.contains('error-text')) {
                const errorText = document.createElement('span');
                errorText.className = 'error-text';
                errorText.style.color = '#DC3545';
                errorText.style.fontSize = '14px';
                errorText.textContent = 'Email invalide';
                this.parentNode.appendChild(errorText);
            }
        } else {
            this.style.borderColor = '';
            const errorText = this.parentNode.querySelector('.error-text');
            if (errorText) {
                errorText.remove();
            }
        }
    });
});

// ====================================
// PHONE VALIDATION (French Guiana format)
// ====================================
document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('input', function(e) {
        // Allow only numbers, spaces, and + sign
        this.value = this.value.replace(/[^\d\s+]/g, '');
    });
});

console.log('✅ Soholang CUP Website - Scripts loaded successfully!');

// ====================================
// FORCER L'AFFICHAGE DES SECTIONS
// ====================================
// S'assurer que toutes les sections sont visibles dès le chargement
(function() {
    // Attendre que le DOM soit chargé
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ensureVisibility);
    } else {
        ensureVisibility();
    }
    
    function ensureVisibility() {
        // Sélectionner toutes les sections importantes
        const sections = document.querySelectorAll('.highlights, .about-tournament, .tournament-info, .highlight-card, .info-card');
        
        sections.forEach(function(section) {
            // S'assurer que l'opacité est à 1 et la transformation est normale
            section.style.opacity = '1';
            section.style.visibility = 'visible';
            section.style.transform = 'translateY(0)';
        });
        
        console.log('✅ Visibilité des sections forcée');
    }
})();

// ====================================
// COMPTE À REBOURS - EXÉCUTION IMMÉDIATE
// ====================================
(function() {
    console.log('🚀 LANCEMENT IMMÉDIAT DU COMPTE À REBOURS');
    
    // Date cible : 26 décembre 2025 à 8h00
    const targetDate = new Date(2025, 11, 26, 8, 0, 0);
    console.log('📅 Date cible:', targetDate.toString());
    
    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;
        
        if (diff <= 0) {
            console.log('⏰ Le tournoi est commencé ou passé');
            return;
        }
        
        // Calculs
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        // Récupération des éléments
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        // Vérification
        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
            console.error('❌ ERREUR: Éléments du compte à rebours non trouvés!');
            console.log('Days:', daysEl, 'Hours:', hoursEl, 'Minutes:', minutesEl, 'Seconds:', secondsEl);
            return;
        }
        
        // Mise à jour
        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }
    
    // Première mise à jour immédiate
    updateCountdown();
    console.log('✅ Première mise à jour effectuée');
    
    // Mise à jour toutes les secondes
    const intervalId = setInterval(updateCountdown, 1000);
    console.log('⏱️ Interval démarré, ID:', intervalId);
})();

// ====================================
// MODAL INSCRIPTION DÉMOS STREET WORKOUT
// ====================================

// Ouvrir le modal
function openDemoModal() {
    const modal = document.getElementById('demoModal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Bloquer le scroll
        console.log('✅ Modal démos ouvert');
    }
}

// Fermer le modal
function closeDemoModal() {
    const modal = document.getElementById('demoModal');
    const form = document.getElementById('demoRegistrationForm');
    const successMessage = document.getElementById('demoSuccessMessage');
    
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Réactiver le scroll
        
        // Réinitialiser le formulaire et masquer le message de succès
        if (form) form.reset();
        if (successMessage) successMessage.classList.remove('show');
        
        console.log('✅ Modal démos fermé');
    }
}

// Fermer le modal en cliquant à l'extérieur
document.addEventListener('click', function(e) {
    const modal = document.getElementById('demoModal');
    if (e.target === modal) {
        closeDemoModal();
    }
});

// Fermer le modal avec la touche Échap
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('demoModal');
    if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
        closeDemoModal();
    }
});

// Gestion de la soumission du formulaire
const demoForm = document.getElementById('demoRegistrationForm');
if (demoForm) {
    demoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collecter les données du formulaire
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        console.log('📋 Inscription démos:', data);
        
        // Masquer le formulaire et afficher le message de succès
        this.style.display = 'none';
        const successMessage = document.getElementById('demoSuccessMessage');
        if (successMessage) {
            successMessage.classList.add('show');
        }
        
        // Message WhatsApp (optionnel)
        const phone = '+594694985035';
        const activityLabels = {
            'demos': '💪 Démonstrations (Spectateur)',
            'initiation': '🏅 Initiation (Essayer les barres)',
            'concours': '🏆 Concours de Pompes',
            'all': '🔥 Tout ! (Initiation + Concours)'
        };
        const levelLabels = {
            'beginner': 'Débutant',
            'intermediate': 'Intermédiaire',
            'advanced': 'Confirmé'
        };
        
        const message = `🔥 INSCRIPTION DÉMOS STREET WORKOUT\n\nNom: ${data.firstName} ${data.lastName}\nTél: ${data.phone}\nEmail: ${data.email || 'Non renseigné'}\nActivité: ${activityLabels[data.activity]}\nNiveau: ${levelLabels[data.level]}\n${data.comments ? '\nCommentaires: ' + data.comments : ''}`;
        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        
        // 📱 Envoyer vers WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // 📧 Envoyer par Email avec EmailJS
        if (typeof emailjs !== 'undefined') {
            emailjs.send('service_1qxo366', 'template_yrcw8lu', {
                to_email: 'Verda-Joseph@hotmail.fr',
                from_name: data.firstName + ' ' + data.lastName,
                from_email: data.email || 'Non renseigné',
                phone: data.phone,
                activity: activityLabels[data.activity],
                level: levelLabels[data.level],
                comments: data.comments || 'Aucun commentaire',
                message: message
            })
            .then(function(response) {
                console.log('✅ Email envoyé avec succès à Verda-Joseph@hotmail.fr!', response.status, response.text);
            }, function(error) {
                console.error('❌ Erreur envoi email:', error);
            });
        }
        
        // Fermer automatiquement après 5 secondes
        setTimeout(() => {
            closeDemoModal();
            this.style.display = 'block'; // Réafficher le formulaire pour la prochaine fois
        }, 5000);
    });
}

console.log('✅ Modal démos Street Workout initialisé');
