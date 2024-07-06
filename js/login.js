document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignupLink = document.getElementById('show-signup');
    const showLoginLink = document.getElementById('show-login');
    const formTitle = document.getElementById('form-title');

    // Show signup form
    showSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        formTitle.innerText = 'Sign up';
    });

    // Show login form
    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
        formTitle.innerText = 'Login';
    });

    // Handle form submission
    const authForm = document.getElementById('auth-form');
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (signupForm.style.display === 'none') {
            // Login logic
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const storedEmail = localStorage.getItem('email');
            const storedPassword = localStorage.getItem('password');

            if (email === storedEmail && password === storedPassword) {
                alert('Login successful!');
                // Redirect to protected page
                window.location.href = 'index.html';
            } else {
                alert('Invalid email or password.');
            }
        } else {
            // Signup logic
            const username = document.getElementById('signup-username').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;

            // Check if all fields are filled
            if (!username || !email || !password) {
                alert('Please fill in all fields.');
                return;
            }

            // Save credentials to localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            alert('Signup successful! Please log in.');
            // Switch to login form after signup
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
            formTitle.innerText = 'Login';
        }
    });
});
