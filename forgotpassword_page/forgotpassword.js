// Focus on email field on page load
const email = document.getElementById("email");
const form = document.getElementById("form");

window.onload = function () {
  email.focus();
};

// Form Validation

function validate() {
  const emailValue = document.getElementById("email").value;
  const error_email = document.getElementById("error_email");

  if (emailValue == null || emailValue == "") {
    error_email.innerHTML = "Field cannot be empty";
    error_email.style.color = "red";
    error_email.style.fontSize = "12px";
    return false;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validate();

  if (validate() == false) {
    return;
  } else {
    alert("Password reset link has been sent to your mail");

    document.getElementById("email").value = "";
    document.getElementById("error_email").innerHTML = "";
  }
});
