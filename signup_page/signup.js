// Form Validation
const form = document.getElementById("form");

function validate() {
  const pwd1 = document.getElementById("password").value;
  const pwd2 = document.getElementById("password2").value;
  const select = document.getElementById("country").value;
  const email = document.getElementById("email").value;
  const atCharacter = email.indexOf("@");
  //   const dotCharacterAfterAt = email.indexOf(".", atCharacter + 1);
  //   const dotLastCharacter = email.indexOf(".", atCharacter - 1);
  //   const dotPosition = email.lastIndexOf(".");

  const error_pwd = document.getElementById("error_pwd");
  const error_select = document.getElementById("error_select");

  if (pwd1 != pwd2) {
    error_pwd.innerHTML =
      "Password and Confirm Password fields are not the same.";
    return false;
  } else {
    error_pwd.innerHTML = "";
  }

  if (select == "") {
    error_select.innerHTML = "Field cannot be empty";
    return false;
  } else {
    error_select.innerHTML = "";
  }

  if (email == null || email == "") {
    alert("Email must be filled out !");
    return false;

    // if (
    //   atCharacter < 1 ||
    //   dotPosition < atCharacter + 2 ||
    //   dotPosition + 2 >= email.length
    // ) {
    //   alert("Incorrect E-Mail address");
    //   return false;
    // }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
  if (validate() === false) {
    return;
  } else {
    alert("Signup Successful");
    document.getElementById("password").value = "";
    document.getElementById("password2").value = "";
    document.getElementById("country").value = "";
    document.getElementById("email").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("referral").value = "";
    document.getElementById("error_pwd").innerHTML = "";
  }
});
