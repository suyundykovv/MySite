document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  const toggleBall = document.getElementById('toggleBall');
  const body = document.body;
  const cards = document.querySelectorAll('.card'); 

  // Function to load the theme for the current user
  const loadTheme = () => {
    const savedUsername = localStorage.getItem("username");
    const savedTheme = localStorage.getItem(`${savedUsername}_theme`); // Use a unique key for each user
    return savedTheme === 'night'; // Return true if the saved theme is 'night'
  };

  let isNight = loadTheme(); // Load the user's theme preference

  // Apply the loaded theme
  if (isNight) {
    toggleBall.style.left = '32px'; 
    themeToggle.classList.remove('btn-light');
    themeToggle.classList.add('btn-dark');
    body.classList.add('night-theme'); 
    cards.forEach(card => {
      card.classList.add('bg-dark', 'text-white');
    });
  } else {
    toggleBall.style.left = '2px'; 
    themeToggle.classList.remove('btn-dark');
    themeToggle.classList.add('btn-light');
    body.classList.remove('night-theme');
    cards.forEach(card => {
      card.classList.remove('bg-dark', 'text-white');
    });
  }

  themeToggle.addEventListener('click', function() {
    isNight = !isNight; // Toggle the theme state
    if (isNight) {
      toggleBall.style.left = '32px'; 
      themeToggle.classList.remove('btn-light');
      themeToggle.classList.add('btn-dark');
      body.classList.add('night-theme'); 
      cards.forEach(card => {
        card.classList.add('bg-dark', 'text-white');
      });
      const username = localStorage.getItem("username");
      localStorage.setItem(`${username}_theme`, 'night'); // Save night theme to local storage for the current user
    } else {
      toggleBall.style.left = '2px'; 
      themeToggle.classList.remove('btn-dark');
      themeToggle.classList.add('btn-light');
      body.classList.remove('night-theme');
      cards.forEach(card => {
        card.classList.remove('bg-dark', 'text-white');
      });
      const username = localStorage.getItem("username");
      localStorage.setItem(`${username}_theme`, 'light'); // Save light theme to local storage for the current user
    }
  });
});
