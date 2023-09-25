 
// definition
var allProducts = document.querySelectorAll(".parent .list")
var div = document.querySelector("#content")
var btn = document.querySelector("#btn")
var show = document.querySelector("#show")
var totalPrice = 0

// logic
allProducts.forEach(function(item){
    item.onclick=function(){
        div.innerHTML += " ( " +item.getAttribute("kind")+") "
        totalPrice += +(item.getAttribute("price"))
        if( div.innerHTML !=""){
            btn.style.display="block";
        }
        
    }
})

// el event
btn.onclick = function(){
    show.innerHTML = "ToTal Price: " + totalPrice + "$"
}
