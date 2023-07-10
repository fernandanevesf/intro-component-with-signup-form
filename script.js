const fNameInput = document.getElementById("fname");
const lNameInput = document.getElementById("lname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submit");

function checkForm(){
if (!fNameInput.checkValidity()){
    document.querySelector("#fname-error").textContent = "First Name cannot be empty";
    fNameInput.style.backgroundPosition = "95% 50%";
    fNameInput.style.outline = "2px solid var(--red)";
}else{
    document.querySelector("#fname-error").textContent = " ";
    fNameInput.style.backgroundPosition = "200%";
    fNameInput.style.outline = "none";
}

if (!lNameInput.checkValidity()){
    document.querySelector("#lname-error").textContent = "Last Name cannot be empty";
    lNameInput.style.backgroundPosition = "95% 50%";
    lNameInput.style.outline = "2px solid var(--red)";
}else{
    document.querySelector("#lname-error").textContent = " ";
    lNameInput.style.backgroundPosition = "200%";
    lNameInput.style.outline = "none";
}

if (!emailInput.checkValidity()){
    document.querySelector("#email-error").textContent = "Looks like this is not an email";
    emailInput.style.backgroundPosition = "95% 50%";
    emailInput.style.outline = "2px solid var(--red)";
}else{
    document.querySelector("#email-error").textContent = " ";
    emailInput.style.backgroundPosition = "200%";
    emailInput.style.outline = "none";
}

if (!passwordInput.checkValidity()){
    document.querySelector("#password-error").textContent = "Password cannot be empty";
    passwordInput.style.backgroundPosition = "95% 50%";
    passwordInput.style.outline = "2px solid var(--red)";
}else{
    document.querySelector("#password-error").textContent = " ";
    passwordInput.style.backgroundPosition = "200%";
    passwordInput.style.outline = "none";
}
}

submitBtn.addEventListener('click', checkForm);



/*Failed attempt with forEach

const errorMessage = document.getElementsByClassName("error-message");
const formInput = document.getElementsByClassName("input");
const submitBtn = document.getElementById("submit");

function checkForm(){
    formInput.forEach((elem) => {
    if(formInput.checkvalidity(elem,index){
        errorMessage.style.display = "block"; ///I was originally going to have the error messages' text in the HTML
        formInput.style.backgroundposition = "95% 50%";
    }else{
        errorMessage.style.display = "none";
        formInput.style.backgroundposition = "200%";
    }
})
}

submitBtn.addEventListener('click', checkForm);
*/
