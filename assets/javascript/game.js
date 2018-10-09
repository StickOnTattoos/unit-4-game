var startingNumber = Math.floor(Math.random() * 108) + 12;
var wins = 0;
var losses = 0;
var playerTotal_1 = 0;
var playerTotal_2 = 0;
var reset = false;
var crystalZero = 0;
var crystalArray = [];
var gem1 = crystalArray[0];
var gem2 = crystalArray[1];
var gem3 = crystalArray[2];
var gem4 = crystalArray[3];
console.log(crystalArray);
crystalNumber;



// create 4 random numbers between 1-12 and apply to crystals
for (var i = 0; i < 4; i++) {
    var crystalNumber = Math.floor(Math.random() * 11) + 1;
    crystalArray.push(crystalNumber);
}

var gems = {
    blue: {
        value: crystalArray[0],
    },
    orange: {
        value: crystalArray[1],
    },
    red: {
        value: crystalArray[2],
    },
    green: {
        value: crystalArray[3],
    },
}

//gem buttons
$(document).ready(function () {

    $("#gem1").click(function () {
        var playerTotal_1 = this.value = crystalArray[0];
        console.log(playerTotal_1);
        (playerTotal_1 + playerTotal_2);
    });

    $("#gem2").click(function () {
        var playerTotal_1 = this.value = crystalArray[1];
        console.log(playerTotal_1);
        (playerTotal_1 + playerTotal_2);
    });

    $("#gem3").click(function () {
        var playerTotal_1 = this.value = crystalArray[2];
        console.log(playerTotal_1);
        (playerTotal_1 + playerTotal_2);
    });

    $("#gem4").click(function () {
        var playerTotal_1 = this.value = crystalArray[3];
        console.log(playerTotal_1);
        (playerTotal_1 + playerTotal_2);
    })
});

// score keeper
function scorekeeper() {
    if (startingNumber = playerTotal_2) {
        wins++;
        $("#Choosey").text("WINNER!!");
        reset = true;
        // reset function
    } else {
        (startingNumber < playerTotal)
        losses++;
        $("#Choosey").text("LOSER!");
        reset = true;
        // reset function
    }
}

// reset function that resets 10 seconds after game is won or lost
function resetGame() {
    if (reset = true) {
        setTimeOut(resetGame1, 10 * 1000);
    }};
 
function resetGamer1() {
    // reset crystal values
}


$("#winnerBoard").html("Wins: " +wins);
$("#loserBoard").html("Losses: "+losses);
$("#screenGuess").html("#" + startingNumber);
$("#scoreTotalVar").html(playerTotal_2);


// monday notes  this is the javascript way to get value off a button
// $(".btn").on("click", function(e){ 
// var vanillaVal= this.value; 
// });