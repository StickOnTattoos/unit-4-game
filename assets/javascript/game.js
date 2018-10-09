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
$("#scoreTotalVar").text(playerTotal_2)

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
        var playerTotal_1 = gems.blue.value;
        console.log(playerTotal_1);
        playerTotal_2 += playerTotal_1;
        $("#scoreTotalVar").text(playerTotal_2)
        console.log("total: " + playerTotal_2)
    });

    $("#gem2").click(function () {
        var playerTotal_1 = gems.orange.value;
        console.log(playerTotal_1);
        playerTotal_2 += playerTotal_1;
        $("#scoreTotalVar").text(playerTotal_2)
        console.log("total: " + playerTotal_2)
    });

    $("#gem3").click(function () {
        var playerTotal_1 = gems.red.value;
        console.log(playerTotal_1);
        playerTotal_2 += playerTotal_1;
        $("#scoreTotalVar").text(playerTotal_2)
        console.log("total: " + playerTotal_2)
    });

    $("#gem4").click(function () {
        var playerTotal_1 = gems.green.value;
        console.log(playerTotal_1);
        playerTotal_2 += playerTotal_1;
        $("#scoreTotalVar").text(playerTotal_2)
        console.log("total: " + playerTotal_2)
    })
});

// score keeper
function scorekeeper() {
    if (startingNumber === playerTotal_2) {
        console.log("win");
        wins++;
        $("#Choosey").text("WINNER!!");
        reset = true;
        // reset function
    } else {
        (startingNumber < playerTotal)
        console.log("loser");
        losses++;
        $("#Choosey").text("LOSER!");
        reset = true;
        // reset function
    }
}

// reset function that resets 1 seconds after game is won or lost
function resetGame() {
    if (reset = true) {
        setTimeOut(resetGame1, 1 * 1000);
    }
};

function resetGamer1() {
    // reset crystal values
}

$("#winnerBoard").html("Wins: " + wins);
$("#loserBoard").html("Losses: " + losses);
$("#screenGuess").html("#" + startingNumber);


// monday notes  this is the javascript way to get value off a button
// $(".btn").on("click", function(e){ 
    // var vanillaVal= this.value; 
    // });