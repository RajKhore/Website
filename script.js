document.addEventListener("DOMContentLoaded", function() {
  var aboutLink = document.getElementById('about-link');
  aboutLink.addEventListener('click', function(event) {
      event.preventDefault();
      alert('You clicked on the About link!');
  });
});

document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // Validate email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      document.getElementById("message").innerHTML = "Invalid email format!";
      return;
  }

  // Validate phone number (exactly 10 digits)
  if (!(/^\d{10}$/.test(phoneNumber))) {
      document.getElementById("message").innerHTML = "Phone number must be exactly 10 digits!";
      return;
  }

  // Validate password match
  if (password !== confirmPassword) {
      document.getElementById("message").innerHTML = "Passwords do not match!";
      return;
  }

  // Here you can perform additional password strength validation if needed

  // If all validations pass, you can proceed with registration
  // For now, let's just show a success message
  document.getElementById("message").innerHTML = "Registration successful! Welcome, " + username + "!";

  // After successful registration, greet the user
  alert("Hello " + username + "! Registration is done successfully.");

  // You can also redirect the user to another page after successful registration
  // window.location.href = "welcome.html";
});


function validateForm() {
  var name = document.getElementById('name').value;
  var cardNumber = document.getElementById('cardNumber').value;
  var cvv = document.getElementById('cvv').value;
  var cardType = document.getElementById('cardType').value;
  var cardRegex = /^\d{16}$/;
  var cvvRegex = /^\d{3}$/;

  var isValid = true;
  var errorMessages = [];

  if (!name) {
      errorMessages.push("Name is required");
      isValid = false;
  }

  if (!cardRegex.test(cardNumber)) {
      errorMessages.push("Card Number must be 16 digits");
      isValid = false;
  }

  if (!cvvRegex.test(cvv)) {
      errorMessages.push("CVV must be 3 digits");
      isValid = false;
  }

  if (cardType === '') {
      errorMessages.push("Please select a Card Type");
      isValid = false;
  }

  if (!isValid) {
      alert(errorMessages.join('\n'));
  }

  return isValid;
}

