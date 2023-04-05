var password = document.getElementById("password").value;
var confirmPassword = document.getElementById("confirmPassword").value;
var firstname = document.getElementById("first_name").value;
var lastname = document.getElementById("last_name").value;
var username = document.getElementById("username").value;

form.addEventListerner('submit', e =>{
    e.preventDefault();

    validateInputs();
})

const setError = (element, message) =>{
    const inputControl = elemet.parentElement;
    const errorDisplay = inputControl.querySelector;
}

const validateInputs =() =>{
    const fnameValue = firstname.value.trim();
    const lnameValue = lastname.value.trim();
    const unameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const cPasswordValue = confirmPassword.value.trim();

}

if(fnameValue === ''){

}