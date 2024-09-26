var user = document.getElementById("user");
var pwd = document.getElementById("pwd");
var btn = document.getElementById("btn");

function validate(){
    if(user.value.trim()==""||pwd.value.trim()==""){
        alert("Field cannot be empty.")
        user.style.border='1px solid red'
        pwd.style.border='1px solid red'
        return false
    }
    else if(pwd.value.length<8){
        alert("Password must be more than 8 characters");
        pwd.style.border='1px solid red'
        return false;
    }
    else{
        return true
    }
}

