const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const signupBtn = document.getElementById('signup-btn');
const errorMessage = document.getElementById("error-message");

function validateEmail(){
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regexEmail.test(emailInput.value)){
        errorMessage.classList.remove("hidden");
        console.log("not valid");
        return false;
        
    }else{
        errorMessage.classList.add("hidden");
        return true;
    }
}

form.addEventListener("submit", function(e) {
  e.preventDefault(); // prevent form submit
  if (validateEmail()) {
    console.log("Form submitted with:", emailInput.value);
    // You can handle actual submission here
  }
});








//let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//let mail = "text@example.com";

//if(regex.test(mail)){
    //console.log("Valid email");
//}else{
    //console.log("Invalid email");
//}