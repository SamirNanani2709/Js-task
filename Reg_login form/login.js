
function fulfil2() {

    var data1 = localStorage.getItem('email');
    var data2 = localStorage.getItem('password');

    var uname = document.getElementById("uname");
    var upass = document.getElementById("upass");

    if (uname.value == data1 && upass.value == data2) {
        alert("Login successful");
    }
    else {
        alert("E-mail or password does not match.");
    }
}
var a=0;
function psw1(){
    if(a==0){
        document.getElementById("btn").innerHTML='&#128586';
        document.getElementById("upass").type='text';
        a=1;
    }
    else{
        document.getElementById("btn").innerHTML='&#128584';
        document.getElementById("upass").type='password';
        a=0;
    }
}


