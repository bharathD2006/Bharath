document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
    const formMessage = document.getElementById('formMessage');
    

    if (name === '' || email === '' || message === '') {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please fill out all fields!';
        return;
    }
    
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please enter a valid email address!';
        return;
    }
    
    
    formMessage.style.color = 'green';
    formMessage.textContent = `Thank you for your message, ${name}! I'll get back to you soon.`;
    

    this.reset();
});
