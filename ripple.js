const container = document.getElementById('ripple-container');

document.addEventListener('mousemove', (e) => {
  const ripple = document.createElement('div');
  ripple.className = 'ripple';
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;

  container.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 1000); // Matches animation duration
});
