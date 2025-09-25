var a = document.querySelector("#popupbox")
var b = document.querySelector("#overlay")
var x = document.getElementById("btn")
x.addEventListener("click", function() {
    a.style.display = "block"
    b.style.display = "block"
} ) 
var y = document.getElementById("close")
y.addEventListener("click", function() {
    a.style.display = "none"
    b.style.display = "none"
} )
