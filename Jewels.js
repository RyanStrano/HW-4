$(document).ready(function() {


// Variables
var points= 0;
var target;
var wins= 0;
var losses= 0;
var crys1;
var crys2;
var crys3;
var crys4;
//Functions
$("img").on("click", adder)
//Function that determines crystal value and target score
function randomizeCrystalAndTarget(){
    target = (Math.floor(Math.random()* 102)+ 19);
    $("#target").text(target);
    crys1 = (Math.floor(Math.random()* 6)+ 12);
    crys2 = (Math.floor(Math.random()* 6)+ 12);
    crys3 = (Math.floor(Math.random()* 6)+ 12);
    crys4 = (Math.floor(Math.random()* 6)+ 12);
}
//Function that adds the point value of the crystal clicked to the points
function adder(){
    var numToAdd = $(this).attr("id")
    if (numToAdd === "crys1"){
        points+= crys1
    }
    if (numToAdd === "crys2"){
        points+= crys2
    }
    if (numToAdd === "crys3"){
        points+= crys3
    }
    if (numToAdd === "crys4"){
        points+= crys4
    }
    $("#points").text(points);
    Checkwinorlose()
    
}
function resetGame() {
    points = 0;
    randomizeCrystalAndTarget();
}
//Function that checks for win or loss, and resets game
function Checkwinorlose() 
if (points === target){
wins++;
resetgame();
}
else if (points > target)
losses++
resetgame();


//Logic

//Clicking the jewels to add to points











});