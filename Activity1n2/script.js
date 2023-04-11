const isContainsUppercase = /^(?=.*[A-Z]).*$/;
const isContainsLowercase = /^(?=.*[a-z]).*$/;
const isContainsNumber = /^(?=.*[0-9]).*$/;
const isContainsSymbol =/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
function formValidation(){
    // argument variable (av)
    let avpass = document.getElementById("password").value;
    let avcpass = document.getElementById("confirmPassword").value;
    let fname = document.forms['form']['nfname'];
    let lname = document.forms['form']['nlname'];
    let uname = document.forms['form']['nuname'];
    let pass = document.forms['form']['npassword'];
    let cpass = document.forms['form']['nconfirm_password'];
    let idArray = ["first_name", "last_name","username","password","confirmPassword"];
    let errArray = ["errFn","errLn","errUn","errP","errCp"];
    let nameArray = [fname,lname,uname,pass,cpass];
    let x = 0;
    idArray.forEach((id,idIndex) => {
        let y =x++;
        let foundArr = errArray.find((fA,fAI)=>{
            return fAI === y;
        });
        let foundNameArr = nameArray.find((fNA,fNI)=>{
            return fNI === y;
        });
        let input = document.getElementById(id).value;
        if(input == "") {
            document.getElementById(foundArr).innerHTML = 'Input is Reqiured.';
            foundNameArr.style.border = "1px solid red";
            foundNameArr.focus();
            return false;
        }
        if(input.length > 0) {
            document.getElementById(foundArr).innerHTML = 'Approved.';
            foundNameArr.style.border = "1px solid green";
            foundArr.style.color = "green";
            foundNameArr.focus();
            console.log("gumanas");
            return false;
            
        }
   console.log(foundArr);
   console.log(foundNameArr);
   return false;
});
validatePassword(avpass, avcpass);
}
function validatePassword(vpass, vcpass)
{
    if (vpass.length < 14) {
        document.getElementById('errP').innerHTML = 'Error: The Password should be at least 14 characters.';
        return false;
    }
    if (!isContainsLowercase.test(vpass)) {
        document.getElementById('errP').innerHTML = 'Error: The Password should contain Lowercase characters.';
        return false;
    }
    if (!isContainsUppercase.test(vpass)) {
        document.getElementById('errP').innerHTML = 'Error: The Password should contain Uppercase characters.';
        return false;
    }
    if (!isContainsNumber.test(vpass)) {
        document.getElementById('errP').innerHTML = 'Error: The password should contain a Number.';
        return false;
    }
    if (!isContainsSymbol.test(vpass)) {
        document.getElementById('errP').innerHTML = 'Error: The password should contain Symbol characters.';
        return false;
    }
    if (vpass != vcpass) {
        document.getElementById('errCp').innerHTML = 'Error: The Password should be the same.';
        return false;
    }
}