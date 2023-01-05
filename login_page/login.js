// Focus on email field on page load
const email = document.getElementById("email");
const form = document.getElementById("form");

window.onload = function () {
  email.focus();
};

// Form Validation

function validate() {
  const passwordValue = document.getElementById("password").value;
  const emailValue = document.getElementById("email").value;
  // const atCharacter = email.indexOf("@");
  // const dotCharacterAfterAt = email.indexOf(".", atCharacter + 1);
  // const dotLastCharacter = email.indexOf(".", atCharacter - 1);
  // const dotPosition = email.lastIndexOf(".");
  const error_email = document.getElementById("error_email");

  if (emailValue == null || emailValue == "") {
    error_email.innerHTML = "Field cannot be empty";
    error_email.style.color = "red";
    error_email.style.fontSize = "12px";
    last = "red";
    return false;
  }

  if (passwordValue == "") {
    return false;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validate();

  if (validate() == false) {
    return;
  } else {
    alert("Login Successful");
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("error_email").innerHTML = "";
  }
});
