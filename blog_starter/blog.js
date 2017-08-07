class BlogEntry {
//name, blogText
	constructor (name,blogText){
		this.name = name;
		this.blogText = blogText;
	}
	getBlogText() {
		return this.text;
	getBlogName() {
		return this.name;
	}
	get BlogFooter() {
		return
	}
}

	
  //Create new blog entry
  var blogEntry = new BlogEntry(authorName, blogText/*pass in name and blog text as parameters*/);
  var authorName = document.getElementById("blogEntryName").value;
  var blogText = document.getElementById("blogEntryText").value;

  //Add the new entry, name and date to the blog
  createBlogEntryElement(blogEntry);
  createFooterElement(blogEntry);

	//Clear the inputs 
	document.getElementById("blogEntryName").value = "";
	document.getElementById("blogEntryText").value = "";

  function createBlogEntryElement(blogEntry){
  	//create a new element and add the blog text to it 
  	//assign class within the div 
  	var blogEntryDiv = document.createElement("div");
  	blogEntryDiv.className = "blogEntry";
  	//.className to change all classes for an element 
  	blogEntryDiv.innerText = blogEntry.blogText; 
  

  	//append that element to blogDetails 
  	//add div within the div in blogDetails 
  	var blogDetails = document.getElementById("blogDetails");
  	blogDetails.appendChild(blogEntryDiv);
}
  
function createFooterElement (blogEntry) {
	//document.create Element
	//create div with the class blogDate and add your name and date to it 
	//appendChild
	var blogFooter = doucment.createElement("div");
	blogFooter.className = "blogDate";
	//print date through function date()
	blogFooter.innerText = "by " + blogEntry.authorName + " on " + Date();

	var blogDetails = document.getElementById("blogDetails");
	blogDetails.appendChild(blogFooter);
}