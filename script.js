document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Mock username and password
    const validUsername = 'admin';
    const validPassword = 'password';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        // Redirect or do something after successful login
    } else {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.display = 'block';
    }
});
