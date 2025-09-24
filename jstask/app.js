


var myname=document.getElementById("name")

var age=document.getElementById("age")


var course=document.getElementById("course")
var email=document.getElementById("email")
var k = "Delete"

function add(){
    var a = myname.value
    var b = age.value
    var c = email.value
    var gender = document.querySelector('input[name="gender"]:checked').value
    var newrow = "<tr><td>" + a + "</td><td>" + b + "</td><td>" + gender + "</td><td>" + course.value + "</td><td>" + c + "</td><td><button onclick='deleting(event)' style='background-color: red;'>" + k + "</button></td></tr>"
    var data = document.getElementById("data")
    data.innerHTML = data.innerHTML + newrow
    document.querySelector('form').reset()
}

function deleting(event){
    event.target.parentNode.parentNode.remove()
}