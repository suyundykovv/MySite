const steps = document.querySelectorAll('.step');
let currentStep = 0;

function showStep(stepIndex) {
  steps.forEach(step => step.classList.remove('active')); // Hide all steps
  steps[stepIndex].classList.add('active'); // Show the selected step
}

function handleNextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep); // Show the next step
  }
}

function handleBackStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep); // Show the previous step
  }
}

document.getElementById('next1').addEventListener('click', () => {
  handleNextStep();
});

document.getElementById('back1').addEventListener('click', () => {
  handleBackStep();
});

document.getElementById('next2').addEventListener('click', () => {
  // Update confirmation fields with values from inputs
  document.getElementById('confirmName').innerText = document.getElementById('name').value;
  document.getElementById('confirmEmail').innerText = document.getElementById('email').value;
  document.getElementById('confirmAddress').innerText = document.getElementById('address').value;
  document.getElementById('confirmCity').innerText = document.getElementById('city').value;
  
  handleNextStep(); // Proceed to the confirmation step
});

document.getElementById('back2').addEventListener('click', () => {
  handleBackStep();
});

// Play sound on form submission
document.getElementById('playSoundButton').addEventListener('click', () => {
  document.getElementById('notificationSound').play();
});

// Form submit event to prevent actual submission and display alert
document.getElementById('multiStepForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form submitted successfully!');
});
