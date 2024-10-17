document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    
    // Load saved language or default to English
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
  
    languageSelect.value = savedLanguage;
  
    languageSelect.addEventListener('change', (event) => {
      const selectedLanguage = event.target.value;
      setLanguage(selectedLanguage);
      localStorage.setItem('language', selectedLanguage);
    });
  });
  
  function setLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      element.textContent = translations[language][key];
    });
  }
  