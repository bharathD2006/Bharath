document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent real form submission
    
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
    const formMessage = document.getElementById('formMessage');
    
    // Simple form validation
    if (name === '' || email === '' || message === '') {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please fill out all fields!';
        return;
    }
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please enter a valid email address!';
        return;
    }
    
    // If all good, show success
    formMessage.style.color = 'green';
    formMessage.textContent = `Thank you for your message, ${name}! I'll get back to you soon.`;
    
    // Optionally reset form
    this.reset();
});
