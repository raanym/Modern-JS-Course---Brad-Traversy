const UILoanInput = document.querySelector('#amount');
const UIInterestInput = document.querySelector('#interest');
const UIyearsToPayInput = document.querySelector('#years');
const form = document.querySelector('#loan-form');

// Event Listener
form.addEventListener('submit', function (e) {
  document.querySelector('#loading').style.display = 'block';
  document.querySelector('#results').style.display = 'none';

  setTimeout(calculateInterest, 2500);

  e.preventDefault();
});

// calculate interest function
function calculateInterest() {
  const monthlyPayment = document.querySelector('#monthly-payment');
  const TotalPayment = document.querySelector('#total-payment');
  const TotalInterest = document.querySelector('#total-interest');
  console.log('hello');

  const principal = parseFloat(UILoanInput.value);
  const calculatedInterest = parseFloat(UIInterestInput.value) / 100 / 12;
  const calculatedPayments = parseFloat(UIyearsToPayInput.value) * 12;

  // monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    TotalPayment.value = (monthly * calculatedPayments).toFixed(2);
    TotalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    document.querySelector('#results').style.display = 'block';
    document.querySelector('#loading').style.display = 'none';
  } else {
    showError(`Please check your number`);
  }
}

function showError(error) {
  const errorDiv = document.createElement('div');
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  document.querySelector('#results').style.display = 'none';
  document.querySelector('#loading').style.display = 'none';
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));
  card.insertBefore(errorDiv, heading);

  setTimeout(clsError, 2000);

  function clsError() {
    document.querySelector('.alert').remove();
  }

}