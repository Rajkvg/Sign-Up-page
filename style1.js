        
var globalvar=0;
var globalvar1=0;
function validate() {
    var password=document.forms['myform']["pass"].value;
    var passworderror=document.getElementById("passerror");
    if(password.length<5){
        passworderror.innerHTML="Password must be at least 5 characters";
        globalvar=0;
        return false;
    }
    else if(password.length<8){
        passworderror.innerHTML="Weak Password";
        passworderror.style.color = 'orange';
        globalvar=1;
    }
    else if(password.length<12){
        passworderror.innerHTML="Moderate Password";
        passworderror.style.color = 'yellow';
        globalvar=1;
    }
    else{
        passworderror.innerHTML="Strong Password";
        passworderror.style.color = 'green';
        globalvar=1;
    }
   
    return true;
}

function check(){
    var password=document.forms['myform']["pass"].value;
    var password1=document.forms['myform']["pass1"].value;
    var confirmpassword=document.getElementById("pass1error");
    if(password!==password1){
    confirmpassword.innerHTML="Password do not match";
    return false;
    }
    else{
        confirmpassword.innerHTML="Password matched";
        confirmpassword.style.color = "green";
        globalvar1=1;
    }
    
    return true;
}

function submit1(){
    if(globalvar===1&&globalvar1===1)
    {
        window.alert('User Created');
        window.location.href="signup.html";
    }
    else{
        window.alert('User Not Created');
        window.location.href="signup.html";
    }
    globalvar=0;
    globalvar1=0;
    return false;
}
