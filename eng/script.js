document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  const toggleBall = document.getElementById('toggleBall');
  const body = document.body;
  const cards = document.querySelectorAll('.card'); 

  const loadTheme = () => {
    const savedUsername = localStorage.getItem("loggedInUserName");
    const savedTheme = localStorage.getItem(`${savedUsername}_theme`);
    return savedTheme === 'night'; 
  };

  let isNight = loadTheme(); 

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
    isNight = !isNight; 
    if (isNight) {
      toggleBall.style.left = '32px'; 
      themeToggle.classList.remove('btn-light');
      themeToggle.classList.add('btn-dark');
      body.classList.add('night-theme'); 
      cards.forEach(card => {
        card.classList.add('bg-dark', 'text-white');
      });
      const username = localStorage.getItem("loggedInUserName");
      localStorage.setItem(`${username}_theme`, 'night'); 
    } else {
      toggleBall.style.left = '2px'; 
      themeToggle.classList.remove('btn-dark');
      themeToggle.classList.add('btn-light');
      body.classList.remove('night-theme');
      cards.forEach(card => {
        card.classList.remove('bg-dark', 'text-white');
      });
      const username = localStorage.getItem("loggedInUserName");
      localStorage.setItem(`${username}_theme`, 'light'); 
    }
  });
});
