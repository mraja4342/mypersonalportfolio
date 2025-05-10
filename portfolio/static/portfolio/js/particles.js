/**
 * Particles animation for the background
 */

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
});

/**
 * Initialize particles in the background
 */
function initParticles() {
  const particlesContainer = document.querySelector('.particles');
  if (!particlesContainer) return;
  
  // Create particles
  const particleCount = 30;
  
  for (let i = 0; i < particleCount; i++) {
    createParticle(particlesContainer);
  }
}

/**
 * Create a single particle
 * @param {HTMLElement} container - The container to add the particle to
 */
function createParticle(container) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  
  // Random size between 2px and 6px
  const size = Math.random() * 4 + 2;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  
  // Random position
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  particle.style.left = `${posX}%`;
  particle.style.top = `${posY}%`;
  
  // Random color from our accent colors
  const colors = [
    'rgba(56, 189, 248, 0.5)',  // accent-primary
    'rgba(129, 140, 248, 0.5)', // accent-secondary
    'rgba(244, 114, 182, 0.5)'  // accent-tertiary
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  particle.style.backgroundColor = color;
  
  // Random animation duration and delay
  const duration = Math.random() * 10 + 10; // 10-20s
  const delay = Math.random() * 5; // 0-5s
  particle.style.animation = `float ${duration}s infinite alternate ease-in-out ${delay}s`;
  
  // Add to container
  container.appendChild(particle);
  
  // Set random movement
  setParticleMovement(particle);
}

/**
 * Set random movement for a particle
 * @param {HTMLElement} particle - The particle element
 */
function setParticleMovement(particle) {
  // Create keyframes for random movement
  const keyframes = [];
  const steps = 5; // Number of random positions
  
  for (let i = 0; i < steps; i++) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    keyframes.push({ transform: `translate(${x - 50}px, ${y - 50}px)` });
  }
  
  // Animation options
  const options = {
    duration: 30000 + Math.random() * 20000, // 30-50s
    iterations: Infinity,
    direction: 'alternate',
    easing: 'ease-in-out'
  };
  
  // Apply animation
  particle.animate(keyframes, options);
}
