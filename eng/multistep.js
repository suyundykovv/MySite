const steps = document.querySelectorAll('.step');
let currentStep = 0;

function showStep(stepIndex) {
  // Hide all steps
  steps.forEach(step => step.classList.remove('active'));
  // Show the current step
  steps[stepIndex].classList.add('active');
}

function handleNextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function handleBackStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

// Event listeners for buttons
document.getElementById('next1').addEventListener('click', () => {
  handleNextStep();
});

document.getElementById('back1').addEventListener('click', () => {
  handleBackStep();
});

document.getElementById('next2').addEventListener('click', () => {
  // Fill in the confirmation data
  document.getElementById('confirmName').innerText = document.getElementById('name').value;
  document.getElementById('confirmEmail').innerText = document.getElementById('email').value;
  document.getElementById('confirmAddress').innerText = document.getElementById('address').value;
  document.getElementById('confirmCity').innerText = document.getElementById('city').value;
  
  handleNextStep();
});

document.getElementById('back2').addEventListener('click', () => {
  handleBackStep();
});

// Form submission handler
document.getElementById('multiStepForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form submitted successfully!');
  // Here you can handle the form submission (e.g., via AJAX or fetch)
});