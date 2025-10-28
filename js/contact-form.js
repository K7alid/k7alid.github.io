// Contact Form Handler - EmailJS Integration
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = form.querySelector('.submit-btn');
            const originalBtnText = submitBtn.textContent;
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validate
            if (!name || !email || !message) {
                formStatus.className = 'form-status error';
                formStatus.textContent = '✗ Please fill in all fields.';
                formStatus.style.display = 'block';
                return;
            }
            
            // Show loading
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            formStatus.style.display = 'none';
            
            // Send email using EmailJS
            const templateParams = {
                from_name: name,
                from_email: email,
                message: message,
                to_name: 'Khalid Ahmed'
            };
            
            // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your EmailJS IDs
            emailjs.send('service_ygigezp', 'template_rpo9yp9', templateParams)
                .then(function(response) {
                    // Success
                    formStatus.className = 'form-status success';
                    formStatus.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
                    formStatus.style.display = 'block';
                    
                    // Reset form
                    form.reset();
                    
                    // Re-enable button
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                }, function(error) {
                    // Error
                    formStatus.className = 'form-status error';
                    formStatus.textContent = '✗ Failed to send message. Please try again or email me directly at khaledahmedebrzhim@gmail.com';
                    formStatus.style.display = 'block';
                    
                    // Re-enable button
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                    
                    console.error('EmailJS Error:', error);
                });
        });
    }
});
