
var list = [2,4,5,7,9,14,17,18,19,22,23,27,29,33,35,36,37,39,42,43,48,49,50]

function getIndex() {
  var start = 0;
  var end = list.length - 1;  
  var number = -1;
  var user_input = document.getElementById("numberInput").value; 
  console.log(list)
  
  document.getElementById("list").innerHTML = list;

  while (start <= end){
    var middle = Math.floor((start + end),2) 

  if (list[middle] == user_input){
    number = middle;
    alert ("Number was found")

  }
  else if (list[middle] > user_input){
    end = middle - 1 
    alert ("Number was found")
  }
  else { //(array[middle] < user_input)
    start = middle + 1 
    alert ("Number was found")
  }


  }
  

  alert ("Number was not found")
   document.getElementById("index").innerHTML = number

} 



