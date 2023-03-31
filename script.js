function validateForm(){
    var x = document.forms["login-form"]["first_name"].value;
    if(x== ""){
        alert("Name must be filled out");
        return false;
    }
}

function passwordConfirmation(){
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
   
    if (password == "") {
        alert("Error: The password field is Empty.");
    } else if (password == confirmPassword) {
        alert("Logged In");
    } else {
        alert("Please make sure your passwords match.")
    }

}