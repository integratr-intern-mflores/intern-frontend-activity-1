function formValidation(){
var password = document.getElementById("password").value;
var confirmPassword = document.getElementById("confirmPassword").value;
var firstname = document.getElementById("first_name").value;
var lastname = document.getElementById("last_name").value;
var username = document.getElementById("username").value;



const errfname = document.getElementById("err0").value;
const errlname = document.getElementById("err1").value;
const erruname = document.getElementById("err2").value;
const errpass = document.getElementById("err3").value;
const errcpass = document.getElementById("err4").value;
const arrID = [errfname,errlname,erruname,errpass,errcpass];
const isContainsUppercase = /^(?=.*[A-Z]).*$/;
const isContainsLowercase = /^(?=.*[a-z]).*$/;
const isContainsNumber = /^(?=.*[0-9]).*$/;
const isContainsSymbol =/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;

var arr = [firstname,lastname,username,password,confirmPassword];
    for(i = 0; i<arr.length; i++){
        if(arr[i] == ""){   
            (arrID[i]).innerHTML = 'Input is Reqiured.';
            console.log("test")
        }
    }
}

let array = ["first_name", "last_name","username","password","confirmPassword"];
array.forEach(element => {
    let input = document.getElementById(element).value;
    if(input == "") {
        alert("Error: The field is Empty."); 
    }
});