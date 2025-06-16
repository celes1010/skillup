const loginTab = document.getElementById('loginTab');
const signUpTab = document.getElementById('signUpTab');
const loginPanel = document.getElementById('loginPanel');
const signUpPanel = document.getElementById('signUpPanel');

function activateTab(tab) {
  if(tab === 'login'){
    loginTab.classList.add('active');
    loginTab.setAttribute('aria-selected', 'true');
    loginTab.tabIndex = 0;
    signUpTab.classList.remove('active');
    signUpTab.setAttribute('aria-selected', 'false');
    signUpTab.tabIndex = -1;

    loginPanel.hidden = false;
    signUpPanel.hidden = true;
  } else {
    signUpTab.classList.add('active');
    signUpTab.setAttribute('aria-selected', 'true');
    signUpTab.tabIndex = 0;
    loginTab.classList.remove('active');
    loginTab.setAttribute('aria-selected', 'false');
    loginTab.tabIndex = -1;

    signUpPanel.hidden = false;
    loginPanel.hidden = true;
  }
}

loginTab.addEventListener('click', () => activateTab('login'));
signUpTab.addEventListener('click', () => activateTab('signUp'));

loginTab.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault();
    activateTab('signUp');
    signUpTab.focus();
  }
});
signUpTab.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault();
    activateTab('login');
    loginTab.focus();
  }
});

document.getElementById('switchToSignUp').addEventListener('click', () => activateTab('signUp'));
document.getElementById('switchToSignUp').addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    activateTab('signUp');
  }
});

document.getElementById('switchToLogin').addEventListener('click', () => activateTab('login'));
document.getElementById('switchToLogin').addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    activateTab('login');
  }
});

// Simple form validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

function showError(inputId, message) {
  const errorP = document.getElementById(inputId + 'Error');
  errorP.textContent = message;
  errorP.classList.remove('hidden');
}
function hideError(inputId) {
  const errorP = document.getElementById(inputId + 'Error');
  errorP.classList.add('hidden');
}

document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;

  const emailInput = document.getElementById('loginEmail');
  const passwordInput = document.getElementById('loginPassword');

  if(!validateEmail(emailInput.value)) {
    showError('loginEmail', 'Please enter a valid email.');
    valid = false;
  } else {
    hideError('loginEmail');
  }

  if(passwordInput.value.length < 6) {
    showError('loginPassword', 'Password must be at least 6 characters.');
    valid = false;
  } else {
    hideError('loginPassword');
  }

  if(valid) {
    alert('Login successful (demo)');
    e.target.reset();
  }
});

document.getElementById('signUpForm').addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;

  const nameInput = document.getElementById('signUpName');
  const emailInput = document.getElementById('signUpEmail');
  const passwordInput = document.getElementById('signUpPassword');

  if(nameInput.value.trim() === '') {
    showError('signUpName', 'Please enter your full name.');
    valid = false;
  } else {
    hideError('signUpName');
  }

  if(!validateEmail(emailInput.value)) {
    showError('signUpEmail', 'Please enter a valid email.');
    valid = false;
  } else {
    hideError('signUpEmail');
  }

  if(passwordInput.value.length < 6) {
    showError('signUpPassword', 'Password must be at least 6 characters.');
    valid = false;
  } else {
    hideError('signUpPassword');
  }

  if(valid) {
    alert('Sign Up successful (demo)');
    e.target.reset();
  }
});
