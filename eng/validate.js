document.getElementById('contactForm').addEventListener('submit', function(event) {
    let isValid = true;
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
      isValid = false;
      document.getElementById('nameError').textContent = 'Name is required.';
    }

    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailPattern.test(email)) {
      isValid = false;
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    }

    const message = document.getElementById('message').value;
    if (message.trim() === '') {
      isValid = false;
      document.getElementById('messageError').textContent = 'Message is required.';
    }

    if (!isValid) {
      event.preventDefault();
    }
  });