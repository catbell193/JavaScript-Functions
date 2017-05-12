/* 	1. Write a function that prints out the current date and time in 
	the following format: "Today is: DayOfTheWeek, HH:MM DD/MM/YYYY".
	Ex. "Today is: Monday, 7:00 13/3/2017"
 and daysia is day*/

function now() {
	Showtime= new Date()
	var weekdaysfunction= function() {
		if( Showtime.getDay() === 0) {
			return "Sunday";
		} else if ( Showtime.getDay() === 1) {
			return "Monday";

		} else if ( Showtime.getDay() === 2) {
			return "Tuesday";
		
		} else if( Showtime.getday() === 3) {
			return "Wednesday";
		
		} else if( Showtime.getDay() === 4) {
			return "Thursday";
		
		} else if( Showtime.getDay() === 5) {
			return "Friday";
		
		} else if( Showtime.getDay() === 6) {
			return " Saturday";
		}
	};

	var weekdays= weekdaysfunction();
	var day =  Showtime.getDay();
	var hours= Showtime.getHours();
	var minutes = Showtime.getMinutes();
	var daysia= Showtime.getDate();
	var month= Showtime.getMonth();
	var year=Showtime.getFullYear();
 	return "Today is: " + weekdays + ", " + hours +":" +minutes + "  " + daysia+ "/"+ month +"/"+ year;

}

/*  2. Write a function to see if a given year is a leap year.
	A year is a leap year if it is divisible by 4, except for 
	years that are divisible by 100. The years that are divisible
	by 400 however are leap years.
*/
function leapyear(year) {
	if(year%400 === 0) {
		return true;
	} else if (year%100 === 0) {
		return  false;
	} else if (year%4 === 0) {
		return true;
	} else {
		return false
	}
};

/*  3. Write a function that plays a guessing game.
	-pick a random number between 1-20
	-use prompt() to get user input
	-check if guess matches or not
		-if match -> give congratulations message with # of tries
		-if fail -> reprompt for next guess 
*/
function Guess( ) {
	var tries=0;
	var box= Number(prompt("Guess a number between 1-20 or die!!"));
	tries++;
	var answer= Math.ceil(20*Math.random());
	if (box===answer) {
		alert("Congratulations you won't die the answer was " + (answer) + " you only tried " + (tries) + " time");

	}
	while (box!==answer) {
		box= Number(prompt("Your going to die!! Try again to live" ));
		tries++;
		if (box===answer) {
			
			alert("Congratulations you won't die the answer was " + (answer) + " you only tried " + (tries) + " times ");
		}



	}

}
/* 	4. Write a function which takes a string and a letter. It returns 
	the number of times the letter appears in the string
*/
function StringEater(string,letter) {
	var times=0;
	for(var r=0; r < string.length ; r++) {
		if (string[r]===letter) {
	 	times++;
	 	}
	}
	return (times);

}
/* 	5. Write a function that takes an array of numbers and prints the 
	smallest and largest numbers from the array.
*/

function BigSmall(array) {
	var small= array[0]
	for (var i = 0; i < array.length; i++) {
	 	if(array[i]<small) {
	 	small=array[i];
	 	}
	} 
	var big = array[0];
	for (var i = 0; i < array.length; i++) {
		if (array[i]>big) {
		big=array[i];
	  }
	} 
	return [small,big]; 
}
/*	6. Write a function which takes an object as a parameter and prints
	all the property names and their values. Also give the total number of
	properties in the object.
*/

function ObjectEater(object) {
	var properties=0
	for (var key in object) {
		console.log(key+ " : " +object[key]);
	properties++;
  	}
	console.log(properties);

}
/*	7. Use the following array for this problem.*/
	
	var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

   /*Write a function which takes as its parameter the above array. Then 
   for each of the elements write a log to the console. Here are example
   logs: "I am reading 'The Road Ahead' by Bill Gates",
   		 "I will read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins"
   If the readingStatus is true, then it should say "am reading", and
   if the readingStatus is false, then it should say "will read".
 */

	function read(library) {
		for (var i = 0; i < library.length; i++) {
		  var book = library[i];
			var title = book.title;
			var author = book.author;
			var readingStatus = book.readingStatus;
			if(readingStatus) {
				console.log("I am reading '" + (title) + "' by " + (author));
				}
			else{
				console.log("I will read '" + (title) + "' by " + (author));
				}
			
    	}
		

   }







