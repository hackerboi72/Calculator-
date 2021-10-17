var no1 = document.getElementById("no1").value 
var no2 = document.getElementById("no2").value
var sum = no1 + no2 
function add() {
    console.log(sum)
    document.getElementById("output").innerHTML = sum
}