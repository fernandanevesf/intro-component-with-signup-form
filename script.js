const errorMessage = document.getElementsByClassName(".error-message");
const formInput = document.getElementsByClassName(".input");
const submitBtn = document.getElementById(".submit");

function checkForm(){
    if(formInput.checkValidity()){
        errorMessage = style.display = "none";
    }else{
        errorMessage = style.display = "block";
        formInput.style.backgroundPosition = "95% 50%";
    }
};

submitBtn.addEventListener('click', checkForm);
