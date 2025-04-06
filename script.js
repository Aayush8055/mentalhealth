
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const contactModal = document.getElementById('contact-modal');
const closeModalBtns = document.querySelectorAll('.close-modal');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');
const footerContact = document.getElementById('footer-contact');
const contactLink = document.getElementById('contact-link');

function openModal(modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(loginModal);
});

showSignup.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal(loginModal);
    openModal(signupModal);
});

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal(signupModal);
    openModal(loginModal);
});

footerContact.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(contactModal);
});

contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(contactModal);
});

closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        closeModal(modal);
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target);
    }
});

// Form Submissions
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login functionality would be implemented here');
    closeModal(loginModal);
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Signup functionality would be implemented here');
    closeModal(signupModal);
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    closeModal(contactModal);
});


addMessage("Hello! I'm here to help you with your mental wellness. What's on your mind today?", false);

document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'index.html';
    });
});