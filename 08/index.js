const emailInput = document.getElementById('email');
const edadInput = document.getElementById('edad');
const emailError = document.getElementById('email-error');
const edadError = document.getElementById('edad-error');

emailInput.addEventListener('input', function() {
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailPattern.test(this.value)) {
    emailInput.classList.add('error');
    emailError.style.display = 'block';
  } else {
    emailInput.classList.remove('error');
    emailError.style.display = 'none';
  }
});

edadInput.addEventListener('input', function() {
  const edad = parseInt(this.value);
  if (isNaN(edad) || edad <= 0) {
    edadInput.classList.add('error');
    edadError.style.display = 'block';
  } else {
    edadInput.classList.remove('error');
    edadError.style.display = 'none';
  }
});