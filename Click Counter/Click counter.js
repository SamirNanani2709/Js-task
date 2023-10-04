function Clickme() {
    var increment = document.getElementById("heading");//<h1> tag
    var addition = increment.innerHTML;//value of <h1>
    addition++;
    increment = document.getElementById("heading").innerHTML = addition;
}
function Clickme1() {
    var decrement = document.getElementById("heading1");//<h1> tag
    var subtraction = decrement.innerHTML;//value of <h1>
    subtraction--;
    decrement = document.getElementById("heading1").innerHTML = subtraction;
}
