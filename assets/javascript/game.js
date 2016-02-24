// Score needed
 
var yourGoal = 0;

// what will have intergers attached to
var wins = 0;
var losses = 0;
var yourScore = 0;
var blueCrystal = [];
var yellowCrystal = [];
var redCrystal = [];
var greenCrystal = [];

// giving the crystals clickability and a numerical value
$(document).ready(function(){

// Set initial values of crystals
// Click the crystal
// Get a value and add it to your initial score
var yourGoal = Math.floor(Math.random() * 11)
var blueCrystal = Math.floor(Math.random() * 11)
var yellowCrystal = Math.floor(Math.random() * 11)
var redCrystal =  Math.floor(Math.random() * 11)
var greenCrystal = Math.floor(Math.random() * 11)

	$("#blue").on('click', function() {
		yourScore = yourScore + blueCrystal;
		document.getElementById("yourscore").innerHTML = yourScore;
	});
	$("#yellow").on('click', function() {
		yourScore = yourScore + yellowCrystal;
		document.getElementById("yourscore").innerHTML = yourScore;
	});
	$("#red").on('click', function() {
		yourScore = yourScore + redCrystal;
		document.getElementById("yourscore").innerHTML = yourScore;
	});

	$("#green").on('click', function() {
		yourScore = yourScore + greenCrystal;
		document.getElementById("yourscore").innerHTML = yourScore;
	});

	function reset(){
		yourGoal = 0
		yourScore = 0
		blueCrystal= 0
		yellowCrystal = 0
		redCrystal = 0
		greenCrystal = 0
		gameOver ()


	
}

	function number(){
		if(yourScore > gameOver){
			losses++
			$('#losses').html('losses:' + losses);
			alert("You Win =)")
			reset();
		}
			else if (yourScore == gameOver){
			wins++
			$('#wins').html('wins:' + wins);
			alert("You lost =(")
		}
		number();
		};
	
})
	//what the goal points is

	function gameOver(){
		yourGoal = Math.floor((Math.random() * 101) + 99);
		document.getElementById("goal").innerHTML = yourGoal;
			alert(yourGoal);
	}
	gameOver();
