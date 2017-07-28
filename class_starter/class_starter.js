class Person { 
	constructor (first_name,last_name,address){
		this.first_name = first_name 
		this.last_name = last_name
		this.address = address
	}

full_name (){
	document.getElementById("myName").innerHTML = this.first_name + this.last_name
	}


full_address (){
	document.getElementById("myAddress").innerHTML = this.address
	}


}


var Tom_Cruise = new Person ("Tom"," Cruise","Banana Street");
	Tom_Cruise.full_name();
	Tom_Cruise.full_address();