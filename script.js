document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = ['firstName', 'lastName', 'email', 'password'];
    let isValid = true;
    
    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (!input.value.trim()) {
            input.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });
    
    // Check required checkboxes
    const requiredCheckboxes = ['program', 'yearLevel', 'terms'];
    requiredCheckboxes.forEach(checkbox => {
        const input = document.getElementById(checkbox);
        if (!input.checked) {
            input.style.outline = '2px solid #e74c3c';
            isValid = false;
        } else {
            input.style.outline = '';
        }
    });
    
    if (isValid) {
        alert('Registration submitted successfully!');
        // Here you would typically send the data to a server
        console.log('Form data:', new FormData(this));
    } else {
        alert('Please fill in all required fields and accept the terms.');
    }
});

// Real-time validation feedback
document.querySelectorAll('input[required], select[required]').forEach(input => {
    input.addEventListener('blur', function() {
        if (!this.value.trim()) {
            this.style.borderColor = '#e74c3c';
        } else {
            this.style.borderColor = '';
        }
    });
});qw