window.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const fullName = form.querySelector('input[placeholder="Enter your full name"]').value.trim();
        const email = form.querySelector('input[placeholder="Enter your email"]').value.trim();
        const password = form.querySelectorAll('input[type="password"]')[0].value;
        const confirmPassword = form.querySelectorAll('input[type="password"]')[1].value;
        const dob = form.querySelector('input[type="date"]').value;
        
        const selects = form.querySelectorAll('select');
        const country = selects[0]?.value || '';
        const gender = selects[1]?.value || '';

        const termsChecked = form.querySelector('#terms').checked;

        let isValid = true;

        if (fullName === '') {
            console.log('Invalid: Full Name is required.');
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            console.log('Invalid: Email is not valid.');
            isValid = false;
        }

        if (password.length < 6) {
            console.log('Invalid: Password must be at least 6 characters.');
            isValid = false;
        }

        if (password !== confirmPassword) {
            console.log('Invalid: Passwords do not match.');
            isValid = false;
        }

        if (dob === '') {
            console.log('Invalid: Date of Birth is required.');
            isValid = false;
        }

        if (country === '') {
            console.log('Invalid: Country must be selected.');
            isValid = false;
        }

        if (gender === '') {
            console.log('Invalid: Gender must be selected.');
            isValid = false;
        }

        if (!termsChecked) {
            console.log('Invalid: You must agree to the Terms and Conditions.');
            isValid = false;
        }

        if (isValid) {
            console.log('Valid: Form submitted successfully!');
        } else {
            console.log('Invalid: Please fix the errors and try again.');
        }
    });
});
