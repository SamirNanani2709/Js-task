function add() {
    var a = document.getElementById("value1").value;
    // var a1 = a.innerText = (a.value);
    var b = document.getElementById("value2").value;
    var result = parseInt(a) + parseInt(b);
    document.getElementById("value3").innerText=result;
}
function sub() {
    var a = document.getElementById("value1").value;
    // var a1 = a.innerText = (a.value);
    var b = document.getElementById("value2").value;
    var result = parseInt(a) - parseInt(b);
    document.getElementById("value3").innerText=result;
}
function mul() {
    var a = document.getElementById("value1").value;
    // var a1 = a.innerText = (a.value);
    var b = document.getElementById("value2").value;
    var result = parseInt(a) * parseInt(b);
    document.getElementById("value3").innerText=result;
}
function div() {
    var a = document.getElementById("value1").value;
    // var a1 = a.innerText = (a.value);
    var b = document.getElementById("value2").value;
    var result = parseInt(a) / parseInt(b);
    document.getElementById("value3").innerText=result;
}