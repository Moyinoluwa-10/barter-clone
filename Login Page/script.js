// Focus on email field on page load
const email = document.getElementById('email') 

window.onload = function() {
  email.focus();
}

// Form Validation

function validate(){

    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const atCharacter = email.indexOf("@"); 
    const dotCharacterAfterAt = email.indexOf('.', atCharacter + 1); 
    const dotLastCharacter = email.indexOf('.', atCharacter - 1);
    const dotPosition = email.lastIndexOf(".");
    const error_email = document.getElementById('error_email');
    
    if (email==null || email=="") { 
      error_email.innerHTML = "Field cannot be empty";
      error_email.style.color = 'red';
      error_email.style.fontSize = '12px';
    return false;   
    } 

    if (password == ""){
        location.href = "#"
    return false;
    }
    
}
