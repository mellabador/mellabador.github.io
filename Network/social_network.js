/*
INSTRUCTIONS:

1. Create a list of 5 names of girls
2. Store 3 friends for each of these 5 girls
3. When the user enters the name of a girl from the list,
   and clicks "Get Friends" display friends of that girl
*/

/*ENTER CODE HERE*/

var names = 
	{"Melinda":["Aina", "Kaitlyn","Lila"],
	"Cori": ["Lillian","Shi Lin","Skylar"],
	"Lila": ["Nancy","Melinda","Ailee"],
	"Kaitlyn": ["Melinda", "Ester", "Mina"],
	"Chloe": ["Ice Bear", "Grizzly Bear", "Panda Bear"]
	}

function getFriends() {	
var user_input = document.getElementById("nameInput").value;
var friends = document.getElementById("friends");
var response = names[user_input];
friends.innerHTML = response;


}



/*EXTENSION*/

function addFriend() {
var user_input = document.getElementById("nameOfGirl").value;
var new_friend = document.getElementById("nameOfFriend").value;
names[user_input].push(new_friend);
console.log(getFriends[user_input]);

  
}
