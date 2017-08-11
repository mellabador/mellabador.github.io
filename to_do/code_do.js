function getList(){
//put to do in list 
	var toDo = document.getElementById("do").value;
	var node = document.createElement("div");
	node.className = "tasks"; 
	node.innerText = toDo;
	plans.appendChild(node);
	checkbox();

}

function checkbox(){
	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.className = "checks";
	plans.appendChild(checkbox);
}

function Delete(){
	var checks = document.getElementsByClassName('checks');
	var tasks = document.getElementsByClassName('tasks');
	for (var i = 0; checks.length; i++){
		var check = checks[i];
		var task = tasks[i];
		if (check.checked){
			check.parentNode.removeChild(check);
			task.parentNode.removeChild(task);
		}
	}
}
//create a div to make a list of "to do"
// function createListEntryElement(to_do){
// 	var addList = document.getElementById("newList");
// 	var addDiv = document.createElement("div");
// 	addDiv.innerHTML = to_do;
// 	addList.appendChild(addDiv);
// }

// function createCheckBoxElement(to_do){
// //create check box for every input 
// 	var newCheckbox = document.createElement("input");
// 	newCheckbox.type = "checkbox";
// 	document.getElementById("newList").appendChild(newCheckbox)
// }







//to check the checkbox 
//disappear input 

// function createListEntryElement(to_do) {
// 	var addList = document.getElementById("newList");
// 	var newDiv = document.createElement("div");
// 	newDiv.id = id
// 	var checkbox = createNewCheckbox(to_do, id);
// 	newDiv.appendChild(checkbox);
// 	var text = document.createTextNode(to_do);
// 	newDiv.appendChild(text)

// 	id++;

// 	addList.appendChild(text);
// }

// function createNewCheckbox(name){
// 	var checkbox = document.createElement('input');
// 	checkbox.type = "checkbox";
// 	checkbox.value = name;
// 	return checkbox;
// }






