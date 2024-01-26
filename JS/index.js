document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registrationForm');
  const nameInput = document.getElementById('name');
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const submitBtn = document.getElementById('submitBtn');

  function validatePassword() {
    return passwordInput.value.length >= 8;
  }

  function validateConfirmPassword() {
    return confirmPasswordInput.value === passwordInput.value;
  }

  function updateSubmitButton() {
    submitBtn.disabled = !(validatePassword() && validateConfirmPassword());
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const registrationData = {
      name: nameInput.value,
      username: usernameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(registrationData);
    // Alternatively, you can use alert(JSON.stringify(registrationData));
  });

  nameInput.addEventListener('focus', function () {
    nameInput.classList.remove('invalid');
  });

  usernameInput.addEventListener('focus', function () {
    usernameInput.classList.remove('invalid');
  });

  emailInput.addEventListener('focus', function () {
    emailInput.classList.remove('invalid');
  });

  passwordInput.addEventListener('input', function () {
    passwordInput.classList.remove('invalid');
    updateSubmitButton();
  });

  confirmPasswordInput.addEventListener('input', function () {
    confirmPasswordInput.classList.remove('invalid');
    updateSubmitButton();
  });

  passwordInput.addEventListener('blur', function () {
    if (!validatePassword()) {
      passwordInput.classList.add('invalid');
    }
  });

  confirmPasswordInput.addEventListener('blur', function () {
    if (!validateConfirmPassword()) {
      confirmPasswordInput.classList.add('invalid');
    }
  });
});
