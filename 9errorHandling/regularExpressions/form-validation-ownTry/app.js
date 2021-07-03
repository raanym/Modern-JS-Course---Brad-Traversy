// Form Blur EventListeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);


function validateName(e) {
  validator(e.target, /^[\w\s]{2,25}$/);
}

function validateZip(e) {
  validator(e.target, /^[\d]{5}(-[\d]{4})?$/)
}

function validateEmail(e) {
  validator(e.target, /^[\w\d-]{5,25}@[a-zA-Z]{2,25}\.[a-zA-Z]{2,5}(\.[a-zA-Z]{2,5})?$/);
}

function validatePhone(e) {
  let regex = /^\(?\+?\d{3}\)?[-. ]?\d{3}$/;
  validator(e.target, regex);
}


function validator(e, regex) {
  if (regex.test(e.value)) {
    console.log('Congrats the regex matches', regex.source);
    e.classList.remove('is-invalid');
  } else {
    console.log('Doesn"t match', regex.source);
    e.classList.add('is-invalid');
  }

  console.log(e.value.match(regex));
}
