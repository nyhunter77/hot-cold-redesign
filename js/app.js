
$(document).ready(function(){
	
	/*--- Get the number at web page load ---*/
	console.log("ready");
	answer=Math.floor((Math.random()*100)+1);
	console.log (answer);
	tries = 0;
	guesses = [];
	howfar = 0;
	prevhowfar = 0;
	guess=0;
	
	
	/*--- Get the hidden number and start the game on new button ---*/
	$(".new").click(function() {
		location.reload();
		/* $("#feedback").text ("Make your Guess!");
		$("#guessList").empty();
		$("#userGuess").val("");
		$("#count").text ("0");
		answer=Math.floor((Math.random()*100)+1);
		console.log (answer);
		tries = 0;
		guesses = [];
		howfar = 0;
		prevhowfar = 0;
		guess=0; */
	});	
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  	$(".overlay").fadeOut(1000);
  	});

	/*--- Take in guess ---*/
	function getGuess() {
		$("#guessButton").click(function(enter) {
				console.log("submit button");
				check();
				$("#userGuess").val("");
				game();
		});
		$("#userGuess").keydown(function(enter) {
			if (enter.keyCode===13) {
	//			enter.preventDefault();
	//			return false;
				console.log("Enter was pressed");
				check()
				$("#userGuess").val("");
				game();
			};
		}); 
	};

	getGuess();  //initiates.
	
	/*--- Check for validity ---*/
	function check() {
		guess = parseInt($("#userGuess").val());
		if (isNaN(guess)) {
			$("#feedback").text("Sorry, this is not a number, try again.")
			alert("Sorry, this is not a number, try again.")
			enter.preventdefault()
		} else if (guess<1 || guess>100) {
			$("#feedback").text("Sorry, you must enter a number between 1 and 100. Try again.")
			alert("Sorry, you must enter a number between 1 and 100. Try again.")
			enter.preventdefault();
		};
	};
	
	
	/*--- Maybe I need a function that tracks previous how far ---*/
	function far() {
		howfar=Math.abs(answer-guess);
		prevhowfar=Math.abs(answer-guesses);
		guesses=[];
		guesses.push(guess);		
	};

	/*--- Play the game ---*/
	
	function game() {
		tries+=1;
		$("#count").text(tries);
		far();
		
		if (guess===answer) {  
			$("#feedback").text("Congratulations! You got it! The secret number was " +answer+ "!")
			document.body.style.background=("red");
			$('.game').animate({backgroundColor:'red'}, 2500);
			//$('body').animate( { backgroundColor: hue }, 1000);
			// $('.game').animate({backgroundColor:"red"},'slow');
			// $('h2').animate({background:'#99cc00'}, 2500);
			
			/* $("input #userGuess").on("mouseover",function(){
				$(this).animate({backgroundColor:"red"},'slow');
				}).on("mouseleave",function(){
				$(this).animate({backgroundColor:"white"},'slow');
			});  */
			
			tries=0;
			
		} else if (tries==1) {
			$("#feedback").text ("Good first guess, try again ... ");
			document.body.style.background=("rgb(198, 238, 155)");
			
		} else if (howfar >= 1 && howfar <= 10) {
			$("#feedback").text ("Yikes! You are on Fire! Guess again!")
			document.body.style.background=("rgb(231, 144, 64)");
			
		} else if (howfar >= 11 && howfar <= 20) {
			$("#feedback").text ("You are really warm, try again!")
			document.body.style.background=("rgb(169, 44, 180)");
			
		} else if (howfar >= 21 && howfar <=30) {
			$("#feedback").text ("Ooooooh, you're kinda cold! Give it another shot.")
			document.body.style.background=("rgb(62, 60, 128)");
			
		} else {$("#feedback").text ("You are ice cold!")
			document.body.style.background=("rgb(188, 186, 246)");
		};
		
// This works but I wanted more levels - thinking of combining both parts later		
/*		} else if (guess > answer) {
			if (howfar > prevhowfar) {
				$("#feedback").text ("Yikes! You're really starting to freeze! Guess lower!")
			} else if (howfar < prevhowfar) {
				$("#feedback").text ("Ok, you're getting warmer ... guess a bit lower.")
			};
		} else if (guess < answer) {
			if (howfar > prevhowfar) {
				$("#feedback").text ("Yikes! You're really starting to freeze! Guess higher!")
			} else if (howfar < prevhowfar) {
				$("#feedback").text ("Ok, you're getting warmer ... guess a bit higher.")
			};
		}; */
		$("#guessList").append ('<li class="guessBox">'+guess+ '</li>');
	};
	
	/*spectrum();
 
	function spectrum(){
		var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		$('#div').animate( { backgroundColor: hue }, 1000);
		spectrum();
	}
		*/

	
});


