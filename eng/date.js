function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');

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
    const formattedDateTime = now.toLocaleString('en-US', options);
    
    dateTimeElement.textContent = `Current Date and Time: ${formattedDateTime}`;
  }
  updateDateTime();
  setInterval(updateDateTime, 1000);
  