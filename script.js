// ====================================
// NAVIGATION
// ====================================
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle) {
        navToggle.addEventListener('click', function () {
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

    // ====================================
    // DROPDOWN TOUCH/CLICK HANDLER
    // ====================================
    const dropdowns = document.querySelectorAll('.dropdown > a, .dropdown-submenu > a');

    dropdowns.forEach(dropdownToggle => {
        dropdownToggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Toggle current dropdown
            const parent = this.parentElement;
            const wasActive = parent.classList.contains('active');

            // Close siblings
            const siblings = parent.parentElement.children;
            for (let sibling of siblings) {
                if (sibling !== parent) {
                    sibling.classList.remove('active');
                    // Also close children of siblings
                    const children = sibling.querySelectorAll('.active');
                    children.forEach(child => child.classList.remove('active'));
                }
            }

            // Toggle state
            if (!wasActive) {
                parent.classList.add('active');
            } else {
                parent.classList.remove('active');
                // Also close children
                const children = parent.querySelectorAll('.active');
                children.forEach(child => child.classList.remove('active'));
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown.active, .dropdown-submenu.active').forEach(el => {
                el.classList.remove('active');
            });
        }
    });

    // Active link on scroll
    window.addEventListener('scroll', function () {
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
                // Let CSS scroll-padding-top handle the offset, or fallback to JS
                // window.scrollTo({
                //     top: target.offsetTop - 80,
                //     behavior: 'smooth'
                // });
                // Better approach: use scrollIntoView which respects scroll-padding
                target.scrollIntoView({
                    behavior: 'smooth'
                });

                // Update URL hash without jumping
                history.pushState(null, null, href);
            }
        }
    });
});

// Handle hash on page load (if necessary, though CSS scroll-padding usually handles it)
window.addEventListener('load', () => {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
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
        teamTypeSelect.addEventListener('change', function () {
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
    window.closeRegistrationModal = function () {
        const modal = document.getElementById('closedModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Réactiver le scroll
        }
    }

    // Fermer le modal en cliquant à l'extérieur
    document.addEventListener('click', function (e) {
        const modal = document.getElementById('closedModal');
        if (e.target === modal) {
            closeRegistrationModal();
        }
    });

    // Fermer le modal avec la touche Échap
    document.addEventListener('keydown', function (e) {
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
// EMAIL HELPER
// ====================================
// ====================================
// EMAIL HELPER
// ====================================
// ====================================
// EMAIL HELPER (Désactivé pour usage Mailto)
// ====================================
// async function sendEmail(data) {
//     // ... code désactivé ...
// }

function sendMailto(to, subject, body) {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
}

// function sendMailto(to, subject, body) {
//     const encodedSubject = encodeURIComponent(subject);
//     const encodedBody = encodeURIComponent(body);
//     window.location.href = `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
// }

// ====================================
// FORM SUBMISSIONS
// ====================================

// Registration Form
const registrationForm = document.getElementById('registrationForm');
if (registrationForm) {
    registrationForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Collect form data
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log('Inscription data:', data);

        // UI Updates
        document.getElementById('errorMessage').classList.remove('show');
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;

        try {
            // Construction du corps du mail
            const mailBody = `
NOUVELLE INSCRIPTION SOHOLANG CUP

TYPE D'ÉQUIPE: ${data.teamType === 'masculine' ? 'Masculine' : 'Féminine'}
NOM DE L'ÉQUIPE: ${data.teamName}
QUARTIER: ${data.district}

RESPONSABLE:
Nom: ${data.managerName}
Prénom: ${data.managerFirstName}
Email: ${data.email}
Téléphone: ${data.phone}

DÉTAILS:
Nombre de joueurs: ${data.playerCount}
Commentaires: ${data.comments || 'Aucun'}
            `;

            sendMailto('contact@guyanevents.fr', `🏆 Inscription Soholang Cup - ${data.teamName}`, mailBody);

            // Success handling (Simulé)
            const successMsg = document.getElementById('successMessage');
            successMsg.classList.add('show');
            this.reset();

            // Re-enable button quickly
            setTimeout(() => {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            }, 1000);

            if (typeof priceDisplay !== 'undefined' && priceDisplay) {
                const priceAmount = priceDisplay.querySelector('.price-amount');
                const priceDetails = priceDisplay.querySelector('.price-details');
                if (priceAmount) priceAmount.textContent = '450€';
                if (priceDetails) priceDetails.textContent = 'Par équipe (16 joueurs maximum)';
            }

            setTimeout(() => {
                successMsg.classList.remove('show');
            }, 5000);

        } catch (error) {
            console.error(error);
            const errorMsg = document.getElementById('errorMessage');
            errorMsg.textContent = '❌ Une erreur est survenue.';
            errorMsg.classList.add('show');
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}

// General Contact Form
const generalForm = document.getElementById('generalForm');
if (generalForm) {
    generalForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // UI Updates
        document.getElementById('genErrorMessage').classList.remove('show');
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;

        try {
            const mailBody = `
CONTACT GÉNÉRAL

NOM: ${data.genName}
PRÉNOM: ${data.genFirstName}
EMAIL: ${data.genEmail}
TÉLÉPHONE: ${data.genPhone || 'Non renseigné'}

SUJET: ${data.subject}

MESSAGE:
${data.genMessage}
            `;

            sendMailto('contact@guyanevents.fr', `📧 Contact Général - ${data.subject}`, mailBody);

            const successMsg = document.getElementById('genSuccessMessage');
            successMsg.classList.add('show');
            this.reset();

            setTimeout(() => {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            }, 1000);

            setTimeout(() => {
                successMsg.classList.remove('show');
            }, 5000);
        } catch (error) {
            const errorMsg = document.getElementById('genErrorMessage');
            errorMsg.classList.add('show');
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}

// Partnership Form
const partnershipForm = document.getElementById('partnershipForm');
if (partnershipForm) {
    partnershipForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // UI Updates
        document.getElementById('partErrorMessage').classList.remove('show');
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;

        try {
            const partnershipTypes = {
                'sponsor': 'Sponsor officiel',
                'supplier': 'Fournisseur',
                'media': 'Partenaire média',
                'other': 'Autre'
            };

            const mailBody = `
DEMANDE DE PARTENARIAT

ENTREPRISE: ${data.companyName}
CONTACT: ${data.contactFirstName} ${data.contactName}
EMAIL: ${data.partEmail}
TÉLÉPHONE: ${data.partPhone}

TYPE DE PARTENARIAT: ${partnershipTypes[data.partnershipType]}

MESSAGE:
${data.partMessage}
            `;

            sendMailto('contact@guyanevents.fr', `🤝 Proposition de Partenariat - ${data.companyName}`, mailBody);

            const successMsg = document.getElementById('partSuccessMessage');
            successMsg.classList.add('show');
            this.reset();

            setTimeout(() => {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            }, 1000);

            setTimeout(() => {
                successMsg.classList.remove('show');
            }, 5000);
        } catch (error) {
            const errorMsg = document.getElementById('partErrorMessage');
            errorMsg.classList.add('show');
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}

// ====================================
// FAQ ACCORDION & OTHER SCRIPTS
// ====================================
// (Keep existing code for FAQ, Scroll Animations, Countdown, etc.)
// ... (Lines 358-704 largely untouched, checking what needs to be preserved)

// Wait, I am replacing from line 234 to 704?? No, I should verify where methods end.
// Lines 234-355 contain the form logic.
// Lines 587-701 contain the Demo form logic. I must update that too.
// I will target two blocks or handle it carefully.

// Let's look at the tool usage. It's `replace_file_content`. I must act on a contiguous block.
// The provided `ReplacementContent` covers lines 234 to 355 (Registration, General, Partnership).
// I also need to update the Demo form later.

// Wait, the ReplacementContent I prepared above only covers the first 3 forms. 
// I will apply this change first (replacing lines 233 to 355).
// Then I will do a second replace for the Demo form (lines 635-700).

// Let's split this into two calls or use `multi_replace_file_content` if possible.
// `default_api:multi_replace_file_content` supports multiple chunks. This is perfect.



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

const bracketObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Special case for bracket to trigger specific flow
            if (entry.target.classList.contains('tournament-bracket')) {
                // Ensure text stays visible if animation fails or js disabled handling
                entry.target.style.opacity = 1;
            }
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.animate-on-scroll, .tournament-bracket').forEach((el) => {
    bracketObserver.observe(el);
});

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
    input.addEventListener('blur', function () {
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
    input.addEventListener('input', function (e) {
        // Allow only numbers, spaces, and + sign
        this.value = this.value.replace(/[^\d\s+]/g, '');
    });
});

console.log('✅ Soholang CUP Website - Scripts loaded successfully!');

// ====================================
// FORCER L'AFFICHAGE DES SECTIONS
// ====================================
// S'assurer que toutes les sections sont visibles dès le chargement
(function () {
    // Attendre que le DOM soit chargé
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ensureVisibility);
    } else {
        ensureVisibility();
    }

    function ensureVisibility() {
        // Sélectionner toutes les sections importantes
        const sections = document.querySelectorAll('.highlights, .about-tournament, .tournament-info, .highlight-card, .info-card');

        sections.forEach(function (section) {
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
(function () {
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
document.addEventListener('click', function (e) {
    const modal = document.getElementById('demoModal');
    if (e.target === modal) {
        closeDemoModal();
    }
});

// Fermer le modal avec la touche Échap
document.addEventListener('keydown', function (e) {
    const modal = document.getElementById('demoModal');
    if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
        closeDemoModal();
    }
});

// Gestion de la soumission du formulaire
const demoForm = document.getElementById('demoRegistrationForm');
if (demoForm) {
    demoForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Collecter les données du formulaire
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log('📋 Inscription démos:', data);

        // Masquer le formulaire et afficher le message de succès immédiatement (pour UX)
        // Mais nous allons attendre la réponse de l'API pour confirmer

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

        const submitBtn = this.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Envoi...';
        submitBtn.disabled = true;

        try {
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

            const mailBody = `
INSCRIPTION DÉMOS STREET WORKOUT

NOM/PRÉNOM: ${data.firstName} ${data.lastName}
EMAIL: ${data.email || 'Non renseigné'}
TÉLÉPHONE: ${data.phone}

ACTIVITÉ: ${activityLabels[data.activity]}
NIVEAU: ${levelLabels[data.level]}

COMMENTAIRES:
${data.comments || 'Aucun'}
            `;

            sendMailto('contact@guyanevents.fr', `🔥 Inscription Démos - ${data.firstName} ${data.lastName}`, mailBody);

            this.style.display = 'none';
            const successMessage = document.getElementById('demoSuccessMessage');
            if (successMessage) {
                successMessage.classList.add('show');
            }

            // Fermer automatiquement après 5 secondes
            setTimeout(() => {
                closeDemoModal();
            }, 5000);

        } catch (error) {
            alert(`❌ Erreur: ${error.message || 'Une erreur est survenue. Veuillez réessayer.'}`);
            console.error('Erreur inscription démos:', error);
            this.style.display = 'block';
            if (submitBtn) {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }
        }
    });
}

console.log('✅ Modal démos Street Workout initialisé');
// Force redeploy - 2025-12-13
