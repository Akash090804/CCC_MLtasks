const fullBox = document.querySelector('.fullBox');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.Login_Button');
const iconClose = document.querySelector('.icon-close');
const registrationForm = document.querySelector('.formbox.registration form');
const loginForm = document.querySelector('.formbox_login form');

registerLink.addEventListener('click', () => {
    fullBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    fullBox.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    fullBox.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    fullBox.classList.remove('active-popup');
});

// Validate registration form
registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const username = registrationForm.querySelector('input[type="text"]').value.trim();
    const email = registrationForm.querySelector('input[type="email"]').value.trim();
    const password = registrationForm.querySelector('input[type="password"]').value;
    const confirmPassword = registrationForm.querySelector('input[type="password"]:nth-of-type(2)').value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // If all validations pass, redirect to landing.html
    window.location.href = 'landing.html';
});

// Validate login form
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = loginForm.querySelector('input[type="email"]').value.trim();
    const password = loginForm.querySelector('input[type="password"]').value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email.');
        return;
    }

    if (password.length < 6) {
        alert('Invalid password.');
        return;
    }

    // Assume login is successful if validations pass
    window.location.href = 'landing.html';
});

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
