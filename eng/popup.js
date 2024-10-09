function showPopup() {
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = '#fff';
    popup.style.padding = '40px';
    popup.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
    popup.innerHTML = `
       <h3>Contact Form</h3>
      <form id="contactForm" class="contact-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" class="form-control" required>
          <small class="error-message text-danger" id="nameError"></small>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" class="form-control" required>
          <small class="error-message text-danger" id="emailError"></small>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="5" class="form-control" required></textarea>
          <small class="error-message text-danger" id="messageError"></small>
        </div>
        <button type="submit" class="btn btn-secondary">Send</button>
      </form>
        <button class="btn btn-danger btn-sm" onclick="this.parentElement.remove()">Close</button>
    `;
    document.body.appendChild(popup);
}

function closePopup() {
    document.getElementById("popupForm").style.display = "none";
}

// Close the popup when clicking outside of the popup content
window.onclick = function(event) {
    const popup = document.getElementById("popupForm");
    if (event.target === popup) {
        closePopup();
    }
}
