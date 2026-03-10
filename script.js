const form = document.getElementById('email-form');
const emailInput = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');
const errorIcon = document.querySelector('.error-icon');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const emailValue = emailInput.value;

    if (!validateEmail(emailValue)) {
        
        errorMessage.style.display = 'block';
        errorIcon.style.display = 'block';
        emailInput.style.border = '2px solid hsl(0, 93%, 68%)';
    } else {
      
        errorMessage.style.display = 'none';
        errorIcon.style.display = 'none';
        emailInput.style.border = '1px solid hsl(0, 36%, 70%)';
        alert('Thank you for subscribing!');
        emailInput.value = ''; 
    }
});


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}