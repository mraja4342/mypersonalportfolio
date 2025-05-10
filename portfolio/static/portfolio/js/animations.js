/**
 * Animations for AI-Themed Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize hover effects
  initHoverEffects();

  // Initialize skill progress bars
  initSkillBars();

  // Initialize typing animation
  initTypingAnimation();

  // Initialize scroll animations
  initScrollAnimations();

  // Initialize header scroll effect
  initHeaderScroll();

  // Initialize circuit lines animation
  initCircuitLines();
});

/**
 * Initialize hover effects for interactive elements
 */
function initHoverEffects() {
  // Project cards hover effect
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const overlay = card.querySelector('.project-overlay');
      if (overlay) {
        overlay.style.opacity = '1';
      }
    });

    card.addEventListener('mouseleave', () => {
      const overlay = card.querySelector('.project-overlay');
      if (overlay) {
        overlay.style.opacity = '0';
      }
    });
  });

  // Button hover glow effect
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.classList.add('hover-glow');
    });

    btn.addEventListener('mouseleave', () => {
      btn.classList.remove('hover-glow');
    });
  });
}

/**
 * Create a 3D tilt effect on elements
 * @param {string} selector - CSS selector for elements to apply effect to
 */
function init3DTilt(selector) {
  const elements = document.querySelectorAll(selector);

  elements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      el.style.transform = `perspective(1000px) rotateX(${deltaY * -5}deg) rotateY(${deltaX * 5}deg)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  });
}

/**
 * Animate counting up to a number
 * @param {string} selector - CSS selector for elements to animate
 */
function animateCounters(selector) {
  const counters = document.querySelectorAll(selector);

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps

    let current = 0;
    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  });
}

/**
 * Create a parallax scrolling effect
 * @param {string} selector - CSS selector for elements to apply effect to
 * @param {number} speed - Parallax speed (0.1 to 1.0)
 */
function initParallax(selector, speed = 0.5) {
  const elements = document.querySelectorAll(selector);

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    elements.forEach(el => {
      const offsetTop = el.offsetTop;
      const elementHeight = el.offsetHeight;

      // Only apply parallax when element is in view
      if (scrollY > offsetTop - window.innerHeight && scrollY < offsetTop + elementHeight) {
        const yPos = (scrollY - offsetTop) * speed;
        el.style.transform = `translateY(${yPos}px)`;
      }
    });
  });
}

/**
 * Create a typing animation for text
 * @param {string} selector - CSS selector for element to animate
 * @param {string[]} textArray - Array of strings to type
 * @param {number} typingSpeed - Speed of typing in milliseconds
 * @param {number} deleteSpeed - Speed of deleting in milliseconds
 * @param {number} delayBetween - Delay between words in milliseconds
 */
function createTypingAnimation(selector, textArray, typingSpeed = 100, deleteSpeed = 50, delayBetween = 1500) {
  const element = document.querySelector(selector);
  if (!element) return;

  let currentIndex = 0;
  let currentText = '';
  let isDeleting = false;

  function type() {
    const fullText = textArray[currentIndex];

    if (isDeleting) {
      currentText = fullText.substring(0, currentText.length - 1);
    } else {
      currentText = fullText.substring(0, currentText.length + 1);
    }

    element.textContent = currentText;

    let speed = isDeleting ? deleteSpeed : typingSpeed;

    if (!isDeleting && currentText === fullText) {
      speed = delayBetween;
      isDeleting = true;
    } else if (isDeleting && currentText === '') {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % textArray.length;
      speed = 500;
    }

    setTimeout(type, speed);
  }

  type();
}

/**
 * Initialize skill progress bars animation
 */
function initSkillBars() {
  const progressBars = document.querySelectorAll('.progress-fill');

  // Function to animate progress bars when they come into view
  const animateProgressBars = () => {
    progressBars.forEach(bar => {
      const percentage = bar.getAttribute('data-percentage');
      const rect = bar.getBoundingClientRect();

      // Check if element is in viewport
      if (rect.top < window.innerHeight && rect.bottom >= 0 && !bar.classList.contains('animated')) {
        bar.style.width = percentage + '%';
        bar.classList.add('animated');
      }
    });
  };

  // Run once on page load
  animateProgressBars();

  // Run on scroll
  window.addEventListener('scroll', animateProgressBars);
}

/**
 * Initialize typing animation for the hero section
 */
function initTypingAnimation() {
  const typingElement = document.querySelector('.typing-text');
  if (!typingElement) return;

  const textArray = typingElement.getAttribute('data-text').split('|');
  createTypingAnimation('.typing-text', textArray, 100, 50, 2000);
}

/**
 * Initialize scroll animations for elements
 */
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  const staggerElements = document.querySelectorAll('.stagger-fade-in > *');

  // Function to check if element is in viewport and add animation class
  const checkScroll = () => {
    // Fade in animations
    fadeElements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      const isInView = (rect.top <= window.innerHeight * 0.85);

      if (isInView && !el.classList.contains('visible')) {
        setTimeout(() => {
          el.classList.add('visible');
        }, 100);
      }
    });

    // Staggered fade in animations
    staggerElements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      const isInView = (rect.top <= window.innerHeight * 0.85);

      if (isInView && !el.classList.contains('visible')) {
        setTimeout(() => {
          el.classList.add('visible');
        }, 100 + (index * 100)); // Stagger effect
      }
    });
  };

  // Run once on page load
  checkScroll();

  // Run on scroll
  window.addEventListener('scroll', checkScroll);
}

/**
 * Initialize header scroll effect
 */
function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/**
 * Initialize circuit lines animation for the about section
 */
function initCircuitLines() {
  const circuitContainer = document.querySelector('.circuit-lines');
  if (!circuitContainer) return;

  // Create SVG element
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.style.position = 'absolute';
  svg.style.top = '0';
  svg.style.left = '0';

  // Add circuit lines
  for (let i = 0; i < 8; i++) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    // Random starting point on the edge of the circle
    const angle = Math.random() * Math.PI * 2;
    const radius = 150;
    const startX = Math.cos(angle) * radius + 150;
    const startY = Math.sin(angle) * radius + 150;

    // Random ending point
    const endX = Math.random() * 300;
    const endY = Math.random() * 300;

    // Control points for curve
    const cpX1 = startX + (Math.random() * 100 - 50);
    const cpY1 = startY + (Math.random() * 100 - 50);
    const cpX2 = endX + (Math.random() * 100 - 50);
    const cpY2 = endY + (Math.random() * 100 - 50);

    // Create path
    const d = `M ${startX} ${startY} C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${endX} ${endY}`;
    line.setAttribute('d', d);
    line.setAttribute('stroke', 'url(#circuit-gradient)');
    line.setAttribute('stroke-width', '1');
    line.setAttribute('fill', 'none');
    line.setAttribute('stroke-dasharray', '5,5');
    line.style.opacity = '0.3';

    // Animation
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'stroke-dashoffset');
    animate.setAttribute('from', '0');
    animate.setAttribute('to', '100');
    animate.setAttribute('dur', (3 + Math.random() * 5) + 's');
    animate.setAttribute('repeatCount', 'indefinite');

    line.appendChild(animate);
    svg.appendChild(line);
  }

  // Add gradient definition
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
  gradient.setAttribute('id', 'circuit-gradient');
  gradient.setAttribute('x1', '0%');
  gradient.setAttribute('y1', '0%');
  gradient.setAttribute('x2', '100%');
  gradient.setAttribute('y2', '100%');

  const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
  stop1.setAttribute('offset', '0%');
  stop1.setAttribute('stop-color', '#38bdf8');

  const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
  stop2.setAttribute('offset', '100%');
  stop2.setAttribute('stop-color', '#818cf8');

  gradient.appendChild(stop1);
  gradient.appendChild(stop2);
  defs.appendChild(gradient);
  svg.appendChild(defs);

  circuitContainer.appendChild(svg);
}

// Expose functions to global scope
window.init3DTilt = init3DTilt;
window.animateCounters = animateCounters;
window.initParallax = initParallax;
window.createTypingAnimation = createTypingAnimation;
window.initSkillBars = initSkillBars;
window.initTypingAnimation = initTypingAnimation;
window.initScrollAnimations = initScrollAnimations;
window.initHeaderScroll = initHeaderScroll;
window.initCircuitLines = initCircuitLines;
