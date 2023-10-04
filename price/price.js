
function multiplication() {
    var fvalue = document.getElementById('t1').value;
    var svalue = document.getElementById('t2').value;
    var total = parseInt(fvalue) * parseInt(svalue);
    document.getElementById('paragraph').innerHTML = total;
}