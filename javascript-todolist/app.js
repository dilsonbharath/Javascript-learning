var input = document.getElementById("input");
var newtask = document.getElementById("tasks");
function add() {
    var x = document.createElement("li");
    x.innerHTML = input.value + " <button onclick='deleting(event)'>Delete Task</button>"
    newtask.append(x)
}
function deleting(event) {
    event.target.parentNode.remove();
}