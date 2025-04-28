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
           // console.log('Invalid: Full Name is required.');
           alert('Invalid: Full Name is required.');
            isValid = false;
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
           // console.log
           alert('Invalid: Email is not valid.');
            isValid = false;
            return;
        }

        if (password.length < 6) {
           // console.log
           alert('Invalid: Password must be at least 6 characters.');
            isValid = false;
            return;
        }

        if (password !== confirmPassword) {
            //console.log
            alert('Invalid: Passwords do not match.');
            isValid = false;
            return;
        }

        if (dob === '') {
            //console.log
            alert('Invalid: Date of Birth is required.');
            isValid = false;
            return;
        }

        if (country === '') {
           // console.log
            alert('Invalid: Country must be selected.');
            isValid = false;
            return;

        }

        if (gender === '') {
            //console.log
            alert('Invalid: Gender must be selected.');
            isValid = false;
            return;
        }

        if (!termsChecked) {
            console.log
            //alert('Invalid: You must agree to the Terms and Conditions.');
            isValid = false;
            return;
        }

        if (isValid) {
            //console.log
            alert('Valid: Form submitted successfully!');
            return;
        } else {
            //console.log
            alert('Invalid: Please fix the errors and try again.');
            return;
        }
    });
});
