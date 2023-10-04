
function fulfil() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var select = document.getElementById("select").value;
    var select1 = document.getElementById("select1").value;
    var select2 = document.getElementById("select2").value;
    var txt = document.getElementById("txt").value;
    var date = document.getElementById("date").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var r1 = document.getElementById("r1");
    if (fname == "" || lname == "" || select == "" || select1 == "" || select2 == "" || txt == "" || date == "" || email == "" || password == "" || r1.checked==false) {
        alert("Some information is missing....");
        return false;

    }
    else {
        alert("Registration successful");
        return true;
    }

}
var e = document.getElementById('email');
var pass = document.getElementById('password');
function store() {
    localStorage.setItem('email', e.value);
    localStorage.setItem('password', pass.value);
}
var a=0;
function psw(){
    if(a==0){
        document.getElementById("btn").innerHTML='&#128586';
        document.getElementById("password").type='text';
        a=1;
    }
    else{
        document.getElementById("btn").innerHTML='&#128584';
        document.getElementById("password").type='password';
        a=0;
    }
}







