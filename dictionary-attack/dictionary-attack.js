var wordsList = [];
//holds words
function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  
  //$.get gets data/response from (wordsFile) URL and passes it to the callback
  //function in the form of the "data" parameter. And eventually invokes 
  //Call back: getting words from wordsFile and setting parameter from the data gotten from URL
  //callbackFuntion
  $.get(wordsFile, function(data) {

   	//disable the submit button so no more passwords are to be submitted until the next step
   	//until you habe the word list ready to check against
    document.getElementById("btnSubmit").disabled = true; 
   
 	
 	//spits response from wordsFileurl by \n
 	//newline character(\n) starts a new line
    //stores result in the wordList array
    wordsList = data.split('\n');

   	//enables the submit button since the data is ready to be used
    document.getElementById("btnSubmit").disabled = false; 
    
    
  });
}

//as browser is loading it will prepare the function init()
window.onload = init;
function checkPassword() {
	//get password from user 

	var indicator = false;
	var pw = document.getElementById("pw").value
	//check if password match words from dictionary
	for (i = 0; i<wordsList.length; i++){
		if ( wordsList[i] == pw) {
			indicator = true;
			break;
		}
	}

//false= strong, true=weak
if (indicator == true){
	window.alert("Your password is weak. Try again")}
else {
	window.alert("Your password is strong. Good job")
	}
}
