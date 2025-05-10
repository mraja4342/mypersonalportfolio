/**
 * Main JavaScript for AI-Themed Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  initNavigation();
  initScrollAnimations();
  initParticles();
  initTypingEffect();
  initSkillBars();
});

/**
 * Mobile Navigation Toggle
 */
function initNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navLinksItems = document.querySelectorAll('.nav-links a');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }
  
  // Close menu when clicking on a link
  navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });
  });
  
  // Change header background on scroll
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/**
 * Scroll Animations
 */
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  const staggerElements = document.querySelectorAll('.stagger-fade-in');
  const scaleElements = document.querySelectorAll('.scale-in');
  
  // Activate elements that are already in view on page load
  activateElementsInView();
  
  // Set up intersection observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });
  
  // Observe all animation elements
  fadeElements.forEach(el => observer.observe(el));
  staggerElements.forEach(el => observer.observe(el));
  scaleElements.forEach(el => observer.observe(el));
  
  // Activate elements in view on page load
  function activateElementsInView() {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight) {
        el.classList.add('active');
      }
    });
    
    staggerElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight) {
        el.classList.add('active');
      }
    });
    
    scaleElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight) {
        el.classList.add('active');
      }
    });
  }
}

/**
 * Particle Background
 */
function initParticles() {
  const particlesContainer = document.querySelector('.particles');
  if (!particlesContainer) return;
  
  const particleCount = window.innerWidth < 768 ? 30 : 50;
  
  // Create particles
  for (let i = 0; i < particleCount; i++) {
    createParticle(particlesContainer);
  }
}

function createParticle(container) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  
  // Random size between 2-6px
  const size = Math.random() * 4 + 2;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  
  // Random position
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  particle.style.left = `${posX}%`;
  particle.style.top = `${posY}%`;
  
  // Random opacity
  particle.style.opacity = Math.random() * 0.5 + 0.1;
  
  // Random animation duration
  const duration = Math.random() * 20 + 10;
  particle.style.animation = `float ${duration}s ease-in-out infinite`;
  particle.style.animationDelay = `${Math.random() * 5}s`;
  
  container.appendChild(particle);
}

/**
 * Typing Effect
 */
function initTypingEffect() {
  const element = document.querySelector('.typing-text');
  if (!element) return;
  
  const text = element.getAttribute('data-text');
  if (!text) return;
  
  const textArray = text.split('|');
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
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && currentText === fullText) {
      typeSpeed = 1500; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && currentText === '') {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % textArray.length;
      typeSpeed = 500; // Pause before typing next word
    }
    
    setTimeout(type, typeSpeed);
  }
  
  type();
}

/**
 * Skill Bars Animation
 */
function initSkillBars() {
  const skillBars = document.querySelectorAll('.progress-bar');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressFill = entry.target.querySelector('.progress-fill');
        const percentage = progressFill.getAttribute('data-percentage');
        progressFill.style.width = `${percentage}%`;
      }
    });
  }, { threshold: 0.1 });
  
  skillBars.forEach(bar => observer.observe(bar));
}

/**
 * Circuit Lines Animation
 */
function initCircuitLines() {
  const circuitContainers = document.querySelectorAll('.circuit-lines');
  
  circuitContainers.forEach(container => {
    // Create 5 circuit lines per container
    for (let i = 0; i < 5; i++) {
      const line = document.createElement('div');
      line.classList.add('circuit-line');
      
      // Position lines at different heights
      line.style.top = `${(i + 1) * 20 - 10}%`;
      
      // Add different animation delays
      line.style.animationDelay = `${i * 2}s`;
      
      container.appendChild(line);
    }
  });
}

// Initialize circuit lines when DOM is loaded
document.addEventListener('DOMContentLoaded', initCircuitLines);
