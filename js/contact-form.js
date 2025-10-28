// Contact Form Handler - Simple & Direct Solution
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
            
            // Create mailto link
            const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
            const body = encodeURIComponent(
                `Name: ${name}\n` +
                `Email: ${email}\n\n` +
                `Message:\n${message}\n\n` +
                `---\n` +
                `Sent from: k7alid.github.io`
            );
            
            const mailtoLink = `mailto:khaledahmedebrzhim@gmail.com?subject=${subject}&body=${body}`;
            
            // Open email client
            const mailWindow = window.open(mailtoLink);
            
            // Show success message
            setTimeout(() => {
                formStatus.className = 'form-status success';
                formStatus.innerHTML = '✓ Email client opened! Please send the message from your email app.<br><small style="margin-top: 8px; display: block;">Or copy this email: <strong>khaledahmedebrzhim@gmail.com</strong></small>';
                formStatus.style.display = 'block';
                
                // Reset form
                form.reset();
                
                // Re-enable button
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }, 500);
        });
    }
});
