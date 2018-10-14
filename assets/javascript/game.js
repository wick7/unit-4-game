var targetNum;
var totalScore = 0;
var winCount = 0;
var lossCount = 0;
// random crystal value
var blueVal;
var pinkDrink;
var yellowVal;
var purpVal;

function resetMe() {
    targetNum = Math.floor(Math.random() * 101) + 19;
    blueVal = Math.floor(Math.random() * 12) + 1;
    pinkDrink = Math.floor(Math.random() * 12) + 1;
    yellowVal = Math.floor(Math.random() * 12) + 1;
    purpVal = Math.floor(Math.random() * 12) + 1;
    totalScore = 0
    $("#wins").text(winCount)
    $("#loss").text(lossCount)
    $(".total").text(totalScore)
    $(".random-number").text(targetNum);
    console.log(targetNum)
}

function setScore(val) {
    totalScore += val
    $(".total").text(totalScore)
    if (totalScore === targetNum) {
        winCount++;
        resetMe();
    } else if (totalScore >= targetNum) {
        lossCount++;
        resetMe();
    };
}
resetMe();

$(document).ready(function () {

    $(".pink").on("click", function () {
        setScore(blueVal);
    });

    $(".red").on("click", function () {
        setScore(pinkDrink);
    });

    $(".green").on("click", function () {
        setScore(yellowVal);
    });

    $(".clear").on("click", function () {
        setScore(purpVal);
    });
});