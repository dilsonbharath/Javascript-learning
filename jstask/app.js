var myname=document.getElementById("name")
var age=document.getElementById("age")
var course=document.getElementById("course")
var email=document.getElementById("email")
var k = "Delete"
var data = document.getElementById("data")
function add(){
    var gender = document.querySelector('input[name="gender"]:checked').value
    var newrow = document.createElement("tr")
    newrow.innerHTML= "<td>" + myname.value + "</td><td>" + age.value + "</td><td>" + gender + "</td><td>" + course.value + "</td><td>" + email.value + "</td><td><button onclick='deleting(event)' style='background-color: red;'>" + k + "</button></td>"
    data.append(newrow)
    document.querySelector('form').reset()
}

function deleting(event){
    event.target.parentNode.parentNode.remove()
}