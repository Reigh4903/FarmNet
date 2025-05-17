// Check if this is login or signup page
const params = new URLSearchParams(window.location.search);
const authType = params.get('type') || 'login';

// DOM elements
const authTitle = document.getElementById('auth-title');
const authSubtitle = document.getElementById('auth-subtitle');
const signupFields = document.getElementById('signup-fields');
const loginActions = document.getElementById('login-actions');
const authSwitchText = document.getElementById('auth-switch-text');
const authSwitchLink = document.getElementById('auth-switch-link');
const submitBtn = document.getElementById('submit-btn');
const authForm = document.getElementById('auth-form');

// Set up form based on auth type
function setupAuthForm(type) {
  if (type === 'signup') {
    authTitle.textContent = 'Create Account';
    authSubtitle.textContent = 'Join the FarmNet community';
    signupFields.style.display = 'block';
    loginActions.style.display = 'none';
    authSwitchText.innerHTML = 'Already have an account? <a href="#" id="auth-switch-link">Login</a>';
    submitBtn.textContent = 'Sign Up';
  } else {
    authTitle.textContent = 'Login';
    authSubtitle.textContent = 'Access your FarmNet account';
    signupFields.style.display = 'none';
    loginActions.style.display = 'flex';
    authSwitchText.innerHTML = 'Don\'t have an account? <a href="#" id="auth-switch-link">Sign up</a>';
    submitBtn.textContent = 'Login';
  }
}

// Toggle between login/signup
authSwitchLink.addEventListener('click', (e) => {
  e.preventDefault();
  const newType = authType === 'login' ? 'signup' : 'login';
  window.location.href = `auth.html?type=${newType}`;
});

// Form submission
authForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (authType === 'login') {
    // Login logic
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Validate and login (in real app, this would call an API)
    console.log('Login attempt with:', email, password);
    alert('Login functionality would connect to backend in real app');
    
  } else {
    // Signup logic
    const username = document.getElementById('username').value;
    const farmerType = document.getElementById('farmer-type').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Validate and register (in real app, this would call an API)
    console.log('Signup attempt with:', { username, farmerType, email, password });
    alert('Signup functionality would connect to backend in real app');
  }
});

// Initialize auth page
document.addEventListener('DOMContentLoaded', () => {
  setupAuthForm(authType);
});