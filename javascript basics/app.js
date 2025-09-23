function add(){
    var a = Number(document.getElementById("num1").value)
    var b = Number(document.getElementById("num2").value)
    var y = a+b
    var x=document.getElementById("result")
    x.innerHTML =  x.innerHTML+" = " + y
}
add()