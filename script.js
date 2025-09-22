
/**
 * ========================================
 * 🤖 ROBOT NAVIGATION SYSTEM v2.0
 * ========================================
 * Modern hamburger menu with enhanced robot-style animations
 */

// ========================================
// MAIN INITIALIZATION
// ========================================

/**
 * Initialize the complete robot navigation system when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('🤖 ROBOT NAVIGATION SYSTEM v2.0 INITIALIZING...');
    
    // Initialize all components
    initializeHamburgerMenu();
    initializeRobotEffects();
    addRobotAnimationStyles();
    
    console.log('✅ ROBOT NAVIGATION SYSTEM FULLY OPERATIONAL');
});

/**
 * Enhanced hamburger menu functionality with robot-style transitions
 */
function initializeHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');
    
    if (!hamburger || !menu) {
        console.log('🤖 Navigation ele');
        return;
    }

    // Get or create icon elements
    let hamIcon = hamburger.querySelector('.hamburger-icon');
    let crossIcon = hamburger.querySelector('.cross-icon');
    
    // Create icons if they don't exist
    if (!hamIcon) {
        hamIcon = document.createElement('span');
        hamIcon.className = 'hamburger-icon';
        hamIcon.innerHTML = '☰';
        hamburger.appendChild(hamIcon);
    }
    
    if (!crossIcon) {
        crossIcon = document.createElement('span');
        crossIcon.className = 'cross-icon';
        crossIcon.innerHTML = '✕';
        crossIcon.style.display = 'none';
        hamburger.appendChild(crossIcon);
    }

    // Set initial state
    menu.style.display = 'none';
    hamIcon.style.display = 'inline-block';
    crossIcon.style.display = 'none';

    // Enhanced click handler
    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isMenuVisible = menu.style.display === 'block';
        
        if (isMenuVisible) {
            // Close menu with robot animation
            closeRobotMenu(menu, hamIcon, crossIcon, hamburger);
        } else {
            // Open menu with robot animation
            openRobotMenu(menu, hamIcon, crossIcon, hamburger);
        }
    });

    // Enhanced outside click handler
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
            if (menu.style.display === 'block') {
                closeRobotMenu(menu, hamIcon, crossIcon, hamburger);
                console.log('🤖 MENU SYSTEM: Navigation auto-closed');
            }
        }
    });

    // Enhanced keyboard support
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && menu.style.display === 'block') {
            closeRobotMenu(menu, hamIcon, crossIcon, hamburger);
            console.log('🤖 MENU SYSTEM: Navigation closed via ESC key');
        }
    });
    
    console.log('🤖 HAMBURGER MENU: Initialization complete');
}

/**
 * Open menu with robot-style animation
 */
function openRobotMenu(menu, hamIcon, crossIcon, hamburger) {
    menu.style.display = 'block';
    menu.style.opacity = '0';
    menu.style.transform = 'translateY(-20px)';
    
    // Animate menu appearance
    setTimeout(() => {
        menu.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        menu.style.opacity = '1';
        menu.style.transform = 'translateY(0)';
    }, 10);
    
    // Switch icons
    if (hamIcon && crossIcon) {
        hamIcon.style.display = 'none';
        crossIcon.style.display = 'inline-block';
    }
    
    // Robot opening effect
    hamburger.classList.add('robot-glitch');
    setTimeout(() => hamburger.classList.remove('robot-glitch'), 300);
    
    console.log('🤖 MENU SYSTEM: Navigation opened');
}

/**
 * Close menu with robot-style animation
 */
function closeRobotMenu(menu, hamIcon, crossIcon, hamburger) {
    menu.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    menu.style.opacity = '0';
    menu.style.transform = 'translateY(-20px)';
    
    // Hide menu after animation
    setTimeout(() => {
        menu.style.display = 'none';
        menu.style.transform = 'translateY(0)';
    }, 300);
    
    // Switch icons
    if (hamIcon && crossIcon) {
        hamIcon.style.display = 'inline-block';
        crossIcon.style.display = 'none';
    }
    
    // Robot closing effect
    hamburger.classList.add('robot-pulse');
    setTimeout(() => hamburger.classList.remove('robot-pulse'), 300);
    
    console.log('🤖 MENU SYSTEM: Navigation closed');
}

/**
 * Initialize robot-style visual effects
 */
function initializeRobotEffects() {
    // Add robot scan effect to interactive elements
    const interactiveElements = document.querySelectorAll('.robot-interactive');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.classList.add('robot-scan');
        });
        
        element.addEventListener('mouseleave', function() {
            this.classList.remove('robot-scan');
        });
    });

    // Add robot pulse effect to buttons
    const buttons = document.querySelectorAll('button, .btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.add('robot-pulse');
            setTimeout(() => this.classList.remove('robot-pulse'), 600);
        });
    });

    console.log('🤖 VISUAL EFFECTS: Robot animations initialized');
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Smooth scroll to section with robot-style easing
 */
function robotScrollTo(targetId) {
    const target = document.getElementById(targetId);
    
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Add robot glow effect to target
        target.classList.add('robot-border-glow');
        setTimeout(() => target.classList.remove('robot-border-glow'), 2000);
        
        console.log(`🤖 NAVIGATION: Scrolled to section ${targetId}`);
    }
}

/**
 * Enhanced robot typing effect with cursor and sound simulation
 */
function robotTypeWriter(elementId, text, speed = 50) {
    const element = document.getElementById(elementId);
    
    if (!element) return;
    
    element.innerHTML = '';
    let i = 0;
    
    // Add typing cursor
    const cursor = '<span class="robot-cursor" style="animation: robotBlink 1s infinite;">|</span>';
    
    function typeChar() {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1) + cursor;
            i++;
            
            // Simulate typing sound with visual feedback
            element.style.textShadow = '0 0 5px var(--robot-glow)';
            setTimeout(() => {
                element.style.textShadow = '0 0 10px var(--robot-glow)';
            }, speed / 2);
            
            setTimeout(typeChar, speed);
        } else {
            // Remove cursor and add final glow effect
            element.innerHTML = text;
            element.classList.add('robot-text-glow');
            
            // Add completion effect
            element.style.animation = 'robotPulse 0.5s ease-out';
            setTimeout(() => {
                element.style.animation = '';
            }, 500);
        }
    }
    
    typeChar();
}

/**
 * Create matrix-style digital rain effect
 */
function createDigitalRain(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.1';
    canvas.style.zIndex = '1';
    
    container.style.position = 'relative';
    container.appendChild(canvas);
    
    function resizeCanvas() {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff00';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 33);
}

/**
 * Add holographic effect to elements
 */
function addHolographicEffect(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    
    const hologram = document.createElement('div');
    hologram.style.cssText = `
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, 
            transparent, 
            rgba(0, 255, 255, 0.1), 
            rgba(0, 255, 255, 0.3), 
            rgba(0, 255, 255, 0.1), 
            transparent
        );
        animation: hologramSweep 3s infinite;
        pointer-events: none;
    `;
    
    element.appendChild(hologram);
}

/**
 * Add all robot animation styles to the document
 */
function addRobotAnimationStyles() {
    // Check if styles already exist
    if (document.getElementById('robot-animations')) return;
    
    const style = document.createElement('style');
    style.id = 'robot-animations';
    style.textContent = `
        /* Robot Animation Keyframes */
        @keyframes hologramSweep {
            0% { left: -100%; }
            100% { left: 100%; }
        }
        
        @keyframes robotBlink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
        
        @keyframes robotPulse {
            0%, 100% { 
                transform: scale(1);
                box-shadow: 0 0 5px var(--robot-primary, #00d4ff); 
            }
            50% { 
                transform: scale(1.05);
                box-shadow: 0 0 20px var(--robot-primary, #00d4ff), 0 0 30px var(--robot-glow, #00ffff); 
            }
        }
        
        @keyframes robotGlitch {
            0%, 100% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
        }
        
        @keyframes robotScan {
            0% { left: -100%; }
            50% { left: 100%; }
            100% { left: 100%; }
        }
        
        @keyframes robotSlideIn {
            from { 
                opacity: 0; 
                transform: translateY(-20px); 
            }
            to { 
                opacity: 1; 
                transform: translateY(0); 
            }
        }
        
        @keyframes robotSlideOut {
            from { 
                opacity: 1; 
                transform: translateY(0); 
            }
            to { 
                opacity: 0; 
                transform: translateY(-20px); 
            }
        }
        
        /* Robot Effect Classes */
        .robot-pulse {
            animation: robotPulse 0.6s ease-out;
        }
        
        .robot-glitch {
            animation: robotGlitch 0.3s ease-out;
        }
        
        .robot-scan::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, var(--robot-glow, #00ffff), transparent);
            animation: robotScan 2s infinite;
            pointer-events: none;
        }
        
        /* Enhanced Menu Animations */
        .menu {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hamburger-icon, .cross-icon {
            transition: all 0.2s ease;
            font-size: 1.2rem;
            display: inline-block;
        }
        
        .hamburger-icon:hover, .cross-icon:hover {
            transform: scale(1.1);
            text-shadow: 0 0 10px var(--robot-glow, #00ffff);
        }
        
        /* Responsive Menu Styles */
        @media (max-width: 820px) {
            .menu {
                backdrop-filter: blur(10px);
                border: 2px solid var(--robot-primary, #00d4ff);
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);
            }
        }
    `;
    
    document.head.appendChild(style);
    console.log('🤖 ANIMATION STYLES: Robot animations loaded');
}

/**
 * Robot system status logger
 */
function logRobotStatus(message, type = 'info') {
    const timestamp = new Date().toLocaleTimeString();
    const prefix = type === 'error' ? '🚫' : type === 'success' ? '✅' : '🤖';
    
    console.log(`${prefix} [${timestamp}] ROBOT SYSTEM: ${message}`);
}

// ========================================
// EXPORT FUNCTIONS (if using modules)
// ========================================

// Uncomment if using ES6 modules
// export { robotScrollTo, robotTypeWriter, logRobotStatus };

