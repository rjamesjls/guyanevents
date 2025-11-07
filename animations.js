// ====================================
// ANIMATIONS DYNAMIQUES - SOHOLANG CUP
// Particules, effets, mouvements
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎬 Animations chargées !');
    
    // ====================================
    // PARTICULES DE SUEUR
    // ====================================
    function createSweatParticles() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'sweat-particles';
        hero.appendChild(particlesContainer);
        
        // Créer 40 gouttes de sueur qui glissent
        for (let i = 0; i < 40; i++) {
            const drop = document.createElement('div');
            drop.className = 'sweat-drop';
            drop.style.left = Math.random() * 100 + '%';
            // Durée variable pour effet réaliste (gouttes glissent à différentes vitesses)
            drop.style.setProperty('--duration', (Math.random() * 4 + 3) + 's');
            drop.style.animationDelay = Math.random() * 6 + 's';
            particlesContainer.appendChild(drop);
        }
    }
    
    // ====================================
    // GOUTTES D'EAU SUR LES CARTES
    // ====================================
    function createWaterDrops() {
        const cards = document.querySelectorAll('.highlight-card, .info-card, .reward-card');
        
        cards.forEach(card => {
            // Ajouter 3 gouttes par carte
            for (let i = 0; i < 3; i++) {
                const drop = document.createElement('div');
                drop.className = 'water-drop';
                drop.style.left = Math.random() * 100 + '%';
                drop.style.top = Math.random() * 50 + '%';
                drop.style.animationDelay = Math.random() * 2 + 's';
                card.style.position = 'relative';
                card.appendChild(drop);
            }
        });
    }
    
    // ====================================
    // EFFET VERRE SUR LES CARTES
    // ====================================
    function applyGlassEffect() {
        const cards = document.querySelectorAll('.highlight-card, .info-card');
        cards.forEach(card => {
            card.classList.add('glass-effect', 'glass-shine');
        });
    }
    
    // ====================================
    // MOUVEMENTS FLOTTANTS
    // ====================================
    function applyFloatingEffect() {
        const highlightCards = document.querySelectorAll('.highlight-card');
        highlightCards.forEach((card, index) => {
            if (index % 2 === 0) {
                card.classList.add('float');
            } else {
                card.classList.add('float-delayed');
            }
        });
        
        // Ajouter float aux icônes
        const icons = document.querySelectorAll('.highlight-icon');
        icons.forEach(icon => {
            icon.classList.add('bounce-dynamic');
        });
    }
    
    // ====================================
    // PULSATIONS SUR LES BOUTONS
    // ====================================
    function applyPulseEffect() {
        const ctaButtons = document.querySelectorAll('.btn-primary');
        ctaButtons.forEach(btn => {
            btn.classList.add('pulse-energy');
        });
    }
    
    // ====================================
    // EFFET ZOOM AU HOVER
    // ====================================
    function applyZoomHover() {
        const cards = document.querySelectorAll('.reward-card, .partner-card, .mission-card, .value-card');
        cards.forEach(card => {
            card.classList.add('zoom-hover');
        });
    }
    
    // ====================================
    // EFFET TERRAIN AVEC LIGNES
    // ====================================
    function createFieldEffect() {
        const sections = document.querySelectorAll('.highlights, .tournament-info');
        sections.forEach(section => {
            section.classList.add('field-lines');
        });
    }
    
    // ====================================
    // SPOTLIGHT SUR LE HERO
    // ====================================
    function createSpotlight() {
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.classList.add('spotlight');
        }
    }
    
    // ====================================
    // EFFET ÉNERGIE SUR LES CHIFFRES
    // ====================================
    function applyEnergyWaves() {
        const numbers = document.querySelectorAll('.highlight-number');
        numbers.forEach(number => {
            number.classList.add('energy-wave');
        });
    }
    
    // ====================================
    // EFFET FEU SUR LE TITRE
    // ====================================
    function applyFireEffect() {
        const heroTitle = document.querySelector('.hero-title-main');
        if (heroTitle) {
            heroTitle.classList.add('fire-effect');
        }
    }
    
    // ====================================
    // PARALLAX AU SCROLL
    // ====================================
    function setupParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            // Parallax lent pour les cartes
            document.querySelectorAll('.highlight-card').forEach((card, index) => {
                const speed = 0.05 * (index + 1);
                card.style.transform = `translateY(${scrolled * speed}px)`;
            });
            
            // Parallax rapide pour les icônes
            document.querySelectorAll('.highlight-icon').forEach((icon, index) => {
                const speed = 0.1 * (index + 1);
                icon.style.transform = `translateY(${-scrolled * speed}px) scale(${1 + scrolled * 0.0001})`;
            });
        });
    }
    
    // ====================================
    // CONFETTI SUR HOVER DES RÉCOMPENSES
    // ====================================
    function createConfettiOnHover() {
        const rewardCards = document.querySelectorAll('.reward-card');
        
        rewardCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                // Créer 10 confettis
                for (let i = 0; i < 10; i++) {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    confetti.style.position = 'absolute';
                    confetti.style.width = '8px';
                    confetti.style.height = '8px';
                    confetti.style.left = Math.random() * 100 + '%';
                    confetti.style.top = '0';
                    confetti.style.background = ['#FFD700', '#FFC107', '#FF6B35', '#0077CC'][Math.floor(Math.random() * 4)];
                    confetti.style.animationDelay = Math.random() * 1 + 's';
                    confetti.style.pointerEvents = 'none';
                    
                    card.style.position = 'relative';
                    card.style.overflow = 'visible';
                    card.appendChild(confetti);
                    
                    // Supprimer après l'animation
                    setTimeout(() => confetti.remove(), 3000);
                }
            });
        });
    }
    
    // ====================================
    // SECOUSSE SUR LE SCROLL RAPIDE
    // ====================================
    let lastScrollTop = 0;
    function detectFastScroll() {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollSpeed = Math.abs(scrollTop - lastScrollTop);
            
            if (scrollSpeed > 50) {
                document.querySelector('.hero-title')?.classList.add('shake-intense');
                setTimeout(() => {
                    document.querySelector('.hero-title')?.classList.remove('shake-intense');
                }, 500);
            }
            
            lastScrollTop = scrollTop;
        });
    }
    
    // ====================================
    // LIGNES DE VITESSE SUR LES BOUTONS AU HOVER
    // ====================================
    function applySpeedLines() {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.classList.add('speed-lines');
            });
            btn.addEventListener('mouseleave', () => {
                btn.classList.remove('speed-lines');
            });
        });
    }
    
    // ====================================
    // EFFET GLITCH ALÉATOIRE
    // ====================================
    function randomGlitch() {
        setInterval(() => {
            const elements = document.querySelectorAll('.section-title');
            const randomElement = elements[Math.floor(Math.random() * elements.length)];
            
            if (randomElement) {
                randomElement.classList.add('glitch');
                setTimeout(() => {
                    randomElement.classList.remove('glitch');
                }, 200);
            }
        }, 10000); // Toutes les 10 secondes
    }
    
    // ====================================
    // EFFET FOULE QUI BOUGE
    // ====================================
    function applyCrowdWave() {
        const partnerCards = document.querySelectorAll('.partner-card');
        partnerCards.forEach((card, index) => {
            card.style.animationDelay = (index * 0.2) + 's';
            card.classList.add('crowd-wave');
        });
    }
    
    // ====================================
    // BALLON QUI ROULE
    // ====================================
    function createRollingBall() {
        const ball = document.createElement('div');
        ball.innerHTML = '⚽';
        ball.style.position = 'fixed';
        ball.style.bottom = '20px';
        ball.style.fontSize = '40px';
        ball.style.zIndex = '9999';
        ball.style.pointerEvents = 'none';
        ball.className = 'ball-roll';
        document.body.appendChild(ball);
        
        // Recommencer après l'animation
        setInterval(() => {
            ball.style.animation = 'none';
            setTimeout(() => {
                ball.style.animation = 'ballRoll 15s linear infinite';
            }, 10);
        }, 15000);
    }
    
    // ====================================
    // BALLONS DIAGONAUX DEPUIS LES COINS
    // ====================================
    function createDiagonalBalls() {
        // Ballon 1 : Avec rebonds sur les bords
        const ball1 = document.createElement('div');
        ball1.innerHTML = '⚽';
        ball1.style.position = 'fixed';
        ball1.style.fontSize = '50px';
        ball1.style.zIndex = '9998';
        ball1.style.pointerEvents = 'none';
        ball1.style.filter = 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))';
        document.body.appendChild(ball1);
        
        // Paramètres physiques ballon 1
        let x1 = 100;
        let y1 = 100;
        let vx1 = 4; // Vitesse horizontale
        let vy1 = 3; // Vitesse verticale
        let rotation1 = 0;
        const ballSize1 = 50;
        
        function animateBall1() {
            // Mise à jour position
            x1 += vx1;
            y1 += vy1;
            rotation1 += (vx1 + vy1) * 0.5;
            
            // Rebond bord gauche ou droit
            if (x1 <= 0) {
                x1 = 0;
                vx1 = Math.abs(vx1); // Force vers la droite
                // Effet rebond
                ball1.style.transform = `rotate(${rotation1}deg) scaleX(0.85)`;
                setTimeout(() => {
                    ball1.style.transform = `rotate(${rotation1}deg) scaleX(1)`;
                }, 100);
            } else if (x1 >= window.innerWidth - ballSize1) {
                x1 = window.innerWidth - ballSize1;
                vx1 = -Math.abs(vx1); // Force vers la gauche
                // Effet rebond
                ball1.style.transform = `rotate(${rotation1}deg) scaleX(0.85)`;
                setTimeout(() => {
                    ball1.style.transform = `rotate(${rotation1}deg) scaleX(1)`;
                }, 100);
            }
            
            // Rebond bord haut ou bas
            if (y1 <= 0) {
                y1 = 0;
                vy1 = Math.abs(vy1); // Force vers le bas
                // Effet rebond
                ball1.style.transform = `rotate(${rotation1}deg) scaleY(0.85)`;
                setTimeout(() => {
                    ball1.style.transform = `rotate(${rotation1}deg) scaleY(1)`;
                }, 100);
            } else if (y1 >= window.innerHeight - ballSize1) {
                y1 = window.innerHeight - ballSize1;
                vy1 = -Math.abs(vy1); // Force vers le haut
                // Effet rebond
                ball1.style.transform = `rotate(${rotation1}deg) scaleY(0.85)`;
                setTimeout(() => {
                    ball1.style.transform = `rotate(${rotation1}deg) scaleY(1)`;
                }, 100);
            }
            
            // Appliquer position et rotation
            ball1.style.left = x1 + 'px';
            ball1.style.top = y1 + 'px';
            ball1.style.transform = `rotate(${rotation1}deg)`;
            
            requestAnimationFrame(animateBall1);
        }
        
        animateBall1();
        
        // Ballon 2 : Avec rebonds (inverse du ballon 1)
        const ball2 = document.createElement('div');
        ball2.innerHTML = '⚽';
        ball2.style.position = 'fixed';
        ball2.style.fontSize = '50px';
        ball2.style.zIndex = '9998';
        ball2.style.pointerEvents = 'none';
        ball2.style.filter = 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))';
        document.body.appendChild(ball2);
        
        // Paramètres physiques ballon 2 (départ opposé au ballon 1)
        let x2 = window.innerWidth - 150;
        let y2 = 150;
        let vx2 = -3.5; // Vitesse horizontale (vers la gauche)
        let vy2 = 3.5; // Vitesse verticale (vers le bas)
        let rotation2 = 0;
        const ballSize2 = 50;
        
        function animateBall2() {
            // Mise à jour position
            x2 += vx2;
            y2 += vy2;
            rotation2 += (vx2 + vy2) * 0.5;
            
            // Rebond bord gauche ou droit
            if (x2 <= 0) {
                x2 = 0;
                vx2 = Math.abs(vx2); // Force vers la droite
                // Effet rebond
                ball2.style.transform = `rotate(${rotation2}deg) scaleX(0.85)`;
                setTimeout(() => {
                    ball2.style.transform = `rotate(${rotation2}deg) scaleX(1)`;
                }, 100);
            } else if (x2 >= window.innerWidth - ballSize2) {
                x2 = window.innerWidth - ballSize2;
                vx2 = -Math.abs(vx2); // Force vers la gauche
                // Effet rebond
                ball2.style.transform = `rotate(${rotation2}deg) scaleX(0.85)`;
                setTimeout(() => {
                    ball2.style.transform = `rotate(${rotation2}deg) scaleX(1)`;
                }, 100);
            }
            
            // Rebond bord haut ou bas
            if (y2 <= 0) {
                y2 = 0;
                vy2 = Math.abs(vy2); // Force vers le bas
                // Effet rebond
                ball2.style.transform = `rotate(${rotation2}deg) scaleY(0.85)`;
                setTimeout(() => {
                    ball2.style.transform = `rotate(${rotation2}deg) scaleY(1)`;
                }, 100);
            } else if (y2 >= window.innerHeight - ballSize2) {
                y2 = window.innerHeight - ballSize2;
                vy2 = -Math.abs(vy2); // Force vers le haut
                // Effet rebond
                ball2.style.transform = `rotate(${rotation2}deg) scaleY(0.85)`;
                setTimeout(() => {
                    ball2.style.transform = `rotate(${rotation2}deg) scaleY(1)`;
                }, 100);
            }
            
            // Appliquer position et rotation
            ball2.style.left = x2 + 'px';
            ball2.style.top = y2 + 'px';
            ball2.style.transform = `rotate(${rotation2}deg)`;
            
            requestAnimationFrame(animateBall2);
        }
        
        animateBall2();
    }
    
    // ====================================
    // BALLON REBONDISSANT AVEC PHYSIQUE
    // ====================================
    function createBouncingBall() {
        const ball = document.querySelector('.bouncing-ball');
        if (!ball) return;
        
        // Paramètres physiques
        let x = Math.random() * (window.innerWidth - 48); // Position X initiale aléatoire
        let y = Math.random() * (window.innerHeight - 48); // Position Y initiale aléatoire
        let velocityX = (Math.random() - 0.5) * 6; // Vitesse horizontale aléatoire
        let velocityY = (Math.random() - 0.5) * 6; // Vitesse verticale aléatoire
        let rotation = 0; // Rotation du ballon
        
        const ballSize = 48; // Taille du ballon en pixels
        const damping = 0.98; // Coefficient de friction (perte d'énergie)
        const bounceReduction = 0.85; // Réduction de la vitesse au rebond
        
        function animate() {
            // Mise à jour de la position
            x += velocityX;
            y += velocityY;
            
            // Rotation proportionnelle à la vitesse
            rotation += (velocityX + velocityY) * 0.5;
            
            // Rebond sur les bords gauche et droit
            if (x <= 0 || x >= window.innerWidth - ballSize) {
                velocityX = -velocityX * bounceReduction;
                x = Math.max(0, Math.min(x, window.innerWidth - ballSize));
                // Effet de rebond visuel
                ball.style.transform = `rotate(${rotation}deg) scaleX(0.9)`;
                setTimeout(() => {
                    ball.style.transform = `rotate(${rotation}deg) scaleX(1)`;
                }, 100);
            }
            
            // Rebond sur les bords haut et bas
            if (y <= 0 || y >= window.innerHeight - ballSize) {
                velocityY = -velocityY * bounceReduction;
                y = Math.max(0, Math.min(y, window.innerHeight - ballSize));
                // Effet de rebond visuel
                ball.style.transform = `rotate(${rotation}deg) scaleY(0.9)`;
                setTimeout(() => {
                    ball.style.transform = `rotate(${rotation}deg) scaleY(1)`;
                }, 100);
            }
            
            // Appliquer le damping (friction de l'air)
            velocityX *= damping;
            velocityY *= damping;
            
            // Empêcher le ballon de s'arrêter complètement
            if (Math.abs(velocityX) < 0.5 && Math.abs(velocityY) < 0.5) {
                velocityX = (Math.random() - 0.5) * 4;
                velocityY = (Math.random() - 0.5) * 4;
            }
            
            // Appliquer la position et la rotation
            ball.style.left = x + 'px';
            ball.style.top = y + 'px';
            ball.style.transform = `rotate(${rotation}deg)`;
            
            // Continuer l'animation
            requestAnimationFrame(animate);
        }
        
        // Adapter au redimensionnement de la fenêtre
        window.addEventListener('resize', () => {
            x = Math.min(x, window.innerWidth - ballSize);
            y = Math.min(y, window.innerHeight - ballSize);
        });
        
        // Démarrer l'animation
        animate();
    }
    
    // ====================================
    // INITIALISATION DE TOUS LES EFFETS
    // ====================================
    function initAllAnimations() {
        console.log('⚡ Initialisation des animations...');
        
        createSweatParticles();
        createWaterDrops();
        applyGlassEffect();
        applyFloatingEffect();
        applyPulseEffect();
        applyZoomHover();
        createFieldEffect();
        createSpotlight();
        applyEnergyWaves();
        applyFireEffect();
        setupParallax();
        createConfettiOnHover();
        detectFastScroll();
        applySpeedLines();
        randomGlitch();
        applyCrowdWave();
        createRollingBall();
        createDiagonalBalls();
        createBouncingBall(); // Nouveau ballon rebondissant
        
        console.log('✅ Toutes les animations sont actives !');
    }
    
    // Lancer après un petit délai pour que le DOM soit prêt
    setTimeout(initAllAnimations, 500);
});

// ====================================
// EFFET DE SURVOL INTENSIFIÉ
// ====================================
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.highlight-card, .reward-card');
    
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        if (e.clientX >= rect.left && e.clientX <= rect.right &&
            e.clientY >= rect.top && e.clientY <= rect.bottom) {
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        } else {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        }
    });
});

console.log('🎮 Module d\'animations chargé !');
