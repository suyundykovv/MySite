function updateDateTime() {
    const timeButton = document.getElementById('timeButton');
    const dateTimeElement = document.getElementById('date-time');
    timeButton.addEventListener('click', () => {
      const now = new Date();
      const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        hour12: true 
      };
      const formattedDateTime = now.toLocaleString('rus', options);
      
      dateTimeElement.textContent = `Current Date and Time: ${formattedDateTime}`;
    });

  }
  updateDateTime();
  setInterval(updateDateTime, 10000);
  