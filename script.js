$(document).ready(function(){

	//JavaScript Reminders // (From JavaScript Foundations)

	/*Vars/Prots/Arrays/Objects/Functions*/
	var example = "One";
	var example2 = 2;
	var myArray = ["Example", function something(arg1,arg2){}, true, false, 1,2];
	var myObject = {
		name: "Rares",
		age: 23,
		dead: false,
		skills: "JavaScript, jQuery, CSS3, HTML5, C#"
	}
	console.log(example);
	console.log(example2);
	console.log(myArray);
	console.log(myObject);

	function Person(name){
		name = name;
		return name;
	}

	Person.prototype = myObject;

	rares = new Person("Rares");
	nick = new Person("Nick");
	console.log("Hello, my name is " + myObject.name + ", thanks for coming, " + Person("nicolae"));


	/*=================================================
	Simple lightbox
	==================================================*/

	//Variables // (Storing the elements so they can be added to the DOM)
	var $overlay = $('<div class="overlay"></div>');
	var $image = $('<img>');
	var $caption = $("<p></p>");

	//Appends // (Adding elements to the DOM)
	$overlay.append($image);
	$overlay.append($caption);
	$("body").append($overlay);
	
	//Event 	// (The action performed when clicked)
	$(".gallery a").click(function(event){
		event.preventDefault();
		var href = $(this).attr("href");
		var captionText = $(this).children("img").attr("alt");

		$image.attr("src", href);
		$caption.text(captionText);

		console.log("img: " + href + " " + "caption: " + captionText);
		$overlay.fadeIn("slow");
	});

	//Hiding // (Hiding the entire overlay if the user clicks anywhere)
	$(".overlay").click(function() {
		$(this).fadeOut("slow");
	});

});