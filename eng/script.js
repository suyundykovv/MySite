document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  const toggleBall = document.getElementById('toggleBall');
  const body = document.body;
  const cards = document.querySelectorAll('.card'); // Select all cards

  let isNight = false; // Track the theme state

  themeToggle.addEventListener('click', function() {
    isNight = !isNight;

    // Toggle ball position
    if (isNight) {
      toggleBall.style.left = '32px'; // Move ball to the right
      themeToggle.classList.remove('btn-light');
      themeToggle.classList.add('btn-dark');
      body.classList.add('night-theme'); // Add night theme class to body
      
      // Make cards dark
      cards.forEach(card => {
        card.classList.add('bg-dark', 'text-white');
      });
    } else {
      toggleBall.style.left = '2px'; // Move ball to the left
      themeToggle.classList.remove('btn-dark');
      themeToggle.classList.add('btn-light');
      body.classList.remove('night-theme');
      
      // Revert cards to their original state
      cards.forEach(card => {
        card.classList.remove('bg-dark', 'text-white');
      });
    }
  });
});
