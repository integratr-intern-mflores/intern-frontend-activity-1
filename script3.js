var fname = document.forms['form']['nfname'];
var lname = document.forms['form']['nlname'];
var uname = document.forms['form']['nuname'];
var pass = document.forms['form']['npassword'];
var cpass = document.forms['form']['nconfirm_password'];

var errfname = document.getElementById('errfname');
var errlname = document.getElementById('errlname');
var erruname = document.getElementById('erruname');
var errpass = document.getElementById('errpass');
var errcpass = document.getElementById('errcpass');

fname.addEventListener('textInput', 'verify');

function validated(){

    if(fname.value.length == 0){
        fname.style.border = "1px solid red";
        errfname.style.display ="block";
        fname.focus();
        return false;
    }
    if(lname.value.length == 0){
        fname.style.border = "1px solid red";
        errlname.style.display ="block";
        lname.focus();
        return false;
    }
    if(uname.value.length == 0){
        uname.style.border = "1px solid red";
        erruname.style.display ="block";
        uname.focus();
        return false;
    }
    if(pass.value.length == 0){
        pass.style.border = "1px solid red";
        errpass.style.display ="block";
        pass.focus();
        return false;
    }
    if(cpass.value.length == 0){
        cpass.style.border = "1px solid red";
        errcpass.style.display ="block";
        cpass.focus();
        return false;
    }
}

function verify(){
    if(fname.value.length != 0){
        nfname.style.border = "none";
        errfname.style.display ="none";
        return true;
    }

}