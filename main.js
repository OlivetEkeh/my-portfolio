// JavaScript Captivating Feature (Example: Change background color on click)
document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');
  const colors = ['#FF5733', '#33FF57', '#337AFF', '#D433FF', '#FFD433'];

  function changeColor() {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      body.style.backgroundColor = randomColor;
  }

  body.addEventListener('click', changeColor);
});
