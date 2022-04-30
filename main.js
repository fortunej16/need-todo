let todos =[]
let input = document.getElementById("input")
let btn = document.getElementById("btn")
let ul = document.getElementById("ul")
let clr = document.getElementById("clear")



input.addEventListener("keypress", function(event){
	if (event.key === "Enter"){
		event.preventDefault()

		btn.click()
	}
})


btn.addEventListener("click", function(){
	todos.push(input.value)
		//TO CLEAR THE SCREEN AFTER BUTTON IS CLICKED
		input.value = " ";

		localStorage.setItem("key", JSON.stringify(todos))
		
		show()

})


clr.addEventListener("click", function(){
	localStorage.clear()
	todos = []
	show()
})



// delO.addEventListener("click", function(){
// 	for(let i = 0; i<delO.length; i++){
// 	}
// 	delO[i].click = ""
// 	show()
// })





function show(){
let listitems = "";

for(let i =0; i<todos.length; i++){
	listitems += `<div id = 'cont'>
						<li>
							<input type = 'checkbox' id = 'todos' value = '${todos[i]}' name = 'checked'/>${todos[i]}
							<button id = 'del'>~</button>
							</li><br>
								</div>`

}

ul.innerHTML = listitems
}

let shown = JSON.parse(localStorage.getItem("key")) 

if (shown){
	todos = shown
	show()
}


function activit(){
let checkbox = document.getElementById("todos")
localStorage.setItem("checkbox1", JSON.stringify(checkbox.checked)) 
}

let chec = JSON.parse(localStorage.getItem("checkbox1"))
document.getElementById("todos").checked = checked

if(chec){
	todos = chec
	show()
}