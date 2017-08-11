
var array = [5,4,3,2,1]

// i = index of sorted 
// j = index of unsorted 

function insertionSort (){ 
	console.log("Before " + array)
	// the first element at [0] is sorted so you can move on to [1]
	//when the sorted index is less than the array length add 1 to sorted 
	//adding to the sorted section would allow space to store a number 
	for (var i = 1; i < array.length; i++) {
		//in the array, it stores the value in the index
		var value = array[i]; 
		//the unsorted would be decreasing each time 
		var j = i; 
	//for the index of an unsorted (which has to be greater than 0)
	//if the value of the index[j] is greater than index[i]
	while (j > 0 && array[j-1] > value)  {
		//the index of the number in j would move 1 index up 
		//would move the value right
			array[j] = array[j-1] 
			array[j-1] = value
			 j--;
	}
	
}
console.log("After " + array);
}
//print the sorted array in the console 
