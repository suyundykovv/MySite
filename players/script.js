const changeColorBtn = document.getElementById('changeColorBtn');

const colors = ['black', 'red', 'white'];
let currentColorIndex = 0;

changeColorBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = colors[currentColorIndex];

  if (colors[currentColorIndex] === 'black') {
    document.body.style.color = 'red';
  } else if (colors[currentColorIndex] === 'red') {
    document.body.style.color = 'black';
  } else if (colors[currentColorIndex] === 'white') {
    document.body.style.color = 'black';
  }
  
  currentColorIndex = (currentColorIndex + 1) % colors.length;
});