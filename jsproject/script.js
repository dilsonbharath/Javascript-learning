var a = document.querySelector(".one")
var b = document.querySelector(".newbook")
var x = document.getElementById("butn")
x.addEventListener("click", function() {
    a.style.display = "block"
    b.style.display = "block"
} ) 

var y = document.getElementById("cancel")
y.addEventListener("click",function(){
    a.style.display = "none"
    b.style.display = "none"
})

var z= document.getElementById("addBtn")
var i = document.getElementById("name")
var j = document.getElementById("author")
var k = document.getElementById("description")
var l = document.querySelector(".books")
z.addEventListener("click",function(){
    var newdiv = document.createElement("div")
    newdiv.setAttribute("class","book")
    newdiv.innerHTML = `<h2>${i.value}</h2>
            <h4>${j.value}</h4>
            <p>${k.value}</p>
            <button onclick="btn(event)">Delete</button>`
    l.append(newdiv)
    a.style.display = "none"
    b.style.display = "none"
})

function btn(event){
    event.target.parentNode.remove()
}