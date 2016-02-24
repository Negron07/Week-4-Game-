// Score needed
 
var yourGoal = 0

// what will have intergers attached to
var wins = 0
var losses = 0
var yourScore = 0
var blueCrystal
var yellowCrystal
var redCrystal
var greenCrystal 

// giving the crystals clickability and a numerical value
$(document).ready(function(){


	$("#blue").on('click', function(){
		if (blueCrystal){
			yourScore = yourScore + blueCrystal
			document.getElementById("yourScore").innerHTML = yourScore;
			number()
		}
		else {
			blueCrystal = Math.floor((Math.random() * 11) + 1);
		}
	});
	$("#yellow").on('click', function(){
		if (yellowCrystal){
			yourScore = yourScore + yellowCrystal
			document.getElementById("yourScore").innerHTML = yourScore;
			number()
		}
		else {
			yellowCrystal = Math.floor((Math.random() * 11) + 1);
		}
	});

	$("#red").on('click', function(){
		if (redCrystal){
			yourScore = yourScore + redCrystal
			document.getElementById("yourScore").innerHTML = yourScore;
			number()
		}
		else {
			greenCrystal = Math.floor((Math.random() * 11) + 1);
		}
	});
$("#green").on('click', function(){
		if (greenCrystal){
			yourScore = yourScore + greenCrystal
			document.getElementById("yourScore").innerHTML = yourScore;
			number()
		}
		else {
			greenCrystal = Math.floor((Math.random() * 11) + 1);
		}
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
		if(yourScore > yourGoal){
			losses++
			$('#losses').html('Losses:' + losses);
			reset();
		}
		if(yourScore == yourGoal){
			wins++
			$('#wins').html('Wins:' + wins);
		};
	}
})
	//what the goal points is

	function gameOver(){
		yourGoal = Math.floor((Math.random() * 101) + 19);
		document.getElementById("goal").innerHTML = yourGoal;
			alert(yourGoal);
	}
