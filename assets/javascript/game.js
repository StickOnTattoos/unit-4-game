var startingNumber = Math.floor(Math.random() * 108) + 12;
var wins = 0;
var losses = 0;
var playerTotal = 0;
var winner = false;
var loser = false;

console.log(startingNumber);
console.log(wins);


// $("#screenGuess").html("hello");
// $(".screenGuess").html("#" + startingNumber);
// document.getElementById('screenGuess').innerHTML += "#" + startingNumber;


// random 1-12 generator
function crystalGame () {

}

// create 4 random numbers between 1-12 and apply to crystals

for (var i = 0; i < 4; i++) {
    var crystalNumber = Math.floor(Math.random() * 11) + 1;
    console.log(crystalNumber);
    // apply to crystals
}

// score keeper
function scorekeeper() {
    if (startingNumber = playerTotal) {
        wins++;
        winner = true;
    } else {
        (startingNumber < playerTotal)
        losses++;
        loser = true;
        // reset function
    }
}

// reset function
function resetGame() {
    if (winner = true);
    // display winner and reset crystal 1-12 numbers
    else (loser = true);
    // display loser and reset crystal 1-12 numbers
    
}




// click functions
$(".crystal").on("click", function () {
    var num = parseINT($(this).attr('data'));
    console.log(crystalNumber);
    
    
});
console.log($("this"));

// $(document).ready(function () {
//     $(".crystal").on("click", function  () {
//         $(".crystal").attr(randomNumber)
//     console.log($("this"));
//     });
//   });




// $(".crystal").on(click, function () {
//     console.log($(this));
// });

