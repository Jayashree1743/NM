/**
 * ========================================
 * ROBOT NAVIGATION SYSTEM
 * ========================================
 * Modern hamburger menu with robot-style animations
 */

// ========================================
// NAVIGATION CONTROLS
// ========================================

/**
 * Initialize navigation system when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('🤖 NAVIGATION SYSTEM ONLINE');
    initializeHamburgerMenu();
    initializeRobotEffects();
});

/**
 * Hamburger menu functionality with robot-style transitions
 */
function initializeHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');
    
    if (!hamburger || !menu) {
        console.log('🤖 Navigation elements not found - skipping menu initialization');
        return;
    }

    hamburger.addEventListener('click', function() {
        const hamIcon = this.querySelector('.hamburger-icon');
        const crossIcon = this.querySelector('.cross-icon');
        
        // Toggle menu visibility with robot-style animation
        if (menu.style.display === "block") {
            // Close menu
            menu.style.display = "none";
            
            if (hamIcon && crossIcon) {
                hamIcon.style.display = "inline-block";
                crossIcon.style.display = "none";
            }
            
            // Robot closing sound effect (visual feedback)
            hamburger.classList.add('robot-pulse');
            setTimeout(() => hamburger.classList.remove('robot-pulse'), 300);
            
            console.log('🤖 MENU SYSTEM: Navigation closed');
        } else {
            // Open menu
            menu.style.display = "block";
            
            if (hamIcon && crossIcon) {
                hamIcon.style.display = "none";
                crossIcon.style.display = "inline-block";
            }
            
            // Robot opening sound effect (visual feedback)
            hamburger.classList.add('robot-glitch');
            setTimeout(() => hamburger.classList.remove('robot-glitch'), 300);
            
            console.log('🤖 MENU SYSTEM: Navigation opened');
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
            if (menu.style.display === "block") {
                menu.style.display = "none";
                
                const hamIcon = hamburger.querySelector('.hamburger-icon');
                const crossIcon = hamburger.querySelector('.cross-icon');
                
                if (hamIcon && crossIcon) {
                    hamIcon.style.display = "inline-block";
                    crossIcon.style.display = "none";
                }
                
                console.log('🤖 MENU SYSTEM: Navigation auto-closed');
            }
        }
    });

    // Add keyboard support (ESC to close menu)
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && menu.style.display === "block") {
            menu.style.display = "none";
            
            const hamIcon = hamburger.querySelector('.hamburger-icon');
            const crossIcon = hamburger.querySelector('.cross-icon');
            
            if (hamIcon && crossIcon) {
                hamIcon.style.display = "inline-block";
                crossIcon.style.display = "none";
            }
            
            console.log('🤖 MENU SYSTEM: Navigation closed via ESC key');
        }
    });
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
    
    // Add hologram sweep animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes hologramSweep {
            0% { left: -100%; }
            100% { left: 100%; }
        }
        @keyframes robotBlink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
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
