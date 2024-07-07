// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formStatus = document.getElementById('formStatus');

    if (name === '' || email === '' || message === '') {
        formStatus.innerHTML = '<p style="color: red;">Please fill in all fields.</p>';
    } else {
        formStatus.innerHTML = '<p style="color: green;">Message sent successfully!</p>';
        document.getElementById('contactForm').reset();
    }
}
