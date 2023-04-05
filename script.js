function formValidation(){
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var first_name = document.getElementById("first_name").value;
    var lastname = document.getElementById("last_name").value;
    var username = document.getElementById("username").value;
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    const isContainsSymbol =/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;

    if (first_name == ""){
        alert("Error: The First name field is Empty."); 
    }else if(lastname == ""){
        alert("Error: The Last name field is Empty.");
    }else if(username == ""){
        alert("Error: The Username field is Empty.");
    }else if(password == ""){
        alert("Error: The Password field is Empty.");
    }else if(!isContainsUppercase.test(password)){
        alert("Error: The password should contain Uppercase characters.");
    }else if(!isContainsLowercase.test(password)){
        alert("Error: The password should contain Lowercase characters.");
    }else if(!isContainsNumber.test(password)){
        alert("Error: The password should contain a Number.");
    }else if(!isContainsSymbol.test(password)){
        alert("Error: The password should contain Symbol characters.");
    }else if(password.length < 14){
        alert("Error: The Password should be at least 14 characters.");
    }else if(confirmPassword == ""){
        alert("Error: The Confirm Password field is Empty.");
    }else if (password != confirmPassword) {
        alert("Error: The Password should be the same");
    }else{
        alert("Logged in");
    }
}