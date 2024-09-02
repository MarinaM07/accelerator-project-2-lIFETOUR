const form = document.querySelector('form');
const phoneInput = form.querySelector('input[name="phone"]');
const mailInput = form.querySelector('input[name="email"]');


function validateForm() {
  const isPhoneFilled = phoneInput.value.trim() !== '';
  const isMailFilled = mailInput.value.trim() !== '';

  const isPhoneValid = phoneInput.checkValidity();
  const isMailValid = mailInput.checkValidity();


  if (isPhoneFilled && !isPhoneValid) {
    phoneInput.classList.add('form__error');
  } else {
    phoneInput.classList.remove('form__error');
  }

  if (isMailFilled && !isMailValid) {
    mailInput.classList.add('form__error');
  } else {
    mailInput.classList.remove('form__error');
  }
}

function handleBlur(event) {
  const input = event.target;
  if (input.value.trim() === '') {
    input.classList.add('form__error');
  } else {
    input.classList.remove('form__error');
  }
  validateForm();
}


form.addEventListener('input', validateForm);

phoneInput.addEventListener('blur', handleBlur);
mailInput.addEventListener('blur', handleBlur);

form.addEventListener('submit', (event) => {
  validateForm();
  if (!form.checkValidity()) {
    event.preventDefault();
    form.querySelectorAll('input').forEach((input) => {
      if (!input.checkValidity()) {
        input.classList.add('form__error');
      }
    });
  }
});
