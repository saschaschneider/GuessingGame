var randomGameNumber;
var randomGameNumberArray = [];
var randomGameNumberIndex;
var randomCardNumbers; // generates random numbers from 1 to 10, which will be used to determine the playing cards
var randomCardArray = [];
var gameNumber;
var winningAray = [];
var cardScore // holds the current summed up value of all hit cards
var win; // 2 winning conditions: 1) The sum of all cards hit equals the gameNumber. 2) The game moves done equal max possible moves.
var gameOver; //  2 loosing conditions: 1) The sum of all cards hit is greater than the gameNumber. 2) The game moves done is less than max possible moves.
var maxMovesArray = []; // we will us this array to capture the index and calculate the max numbers of draws possible before losing.
var maxMoves; // this will hold the max moves possible before losing the game
var clickCounterHit;
var clickCounterHold;
var cardSrcLink; // generates the link to the right card played

//-------------END OF DEFINING VARIABLES ------------------------// 


for (var i = 0; i < 10; i++){ 
randomGameNumber = Math.floor((Math.random() * 20) + 15); // holding random numbers from 15 to 35
	randomGameNumberArray.push(randomGameNumber);
}
console.log(randomGameNumberArray);
randomGameNumberIndex = Math.floor((Math.random() * 9) + 1); 
gameNumber = randomGameNumberArray[randomGameNumberIndex];
console.log("GameNumber " + gameNumber +" " + randomGameNumberIndex);

for (var i = 0; i < 10; i++){ 
randomCardNumbers = Math.floor((Math.random() * 10) + 1); 
	randomCardArray.push(randomCardNumbers);
}

winningAray.push(randomCardArray[0]);
for (var i = 1; i < randomCardArray.length; i++ ){
 	
 	winningAray.push(winningAray[i-1]+randomCardArray[i]);
	}

console.log("randomCardArray = " + randomCardArray);
console.log("winningAray = " + winningAray);

for (var i = 0; i < 10; i++ ){
 	
 	winningAray.push(winningAray[i-1]+randomCardArray[i]);
	}

var z = 0;
while ( z <= gameNumber) {
   var index = winningAray.indexOf(z);
   maxMovesArray.push(index);
   z++;
  }

maxMovesArray.sort(function(a,b){return b-a;})[0] // Sorts the array from largest to smallest, so that position 0 always contains the largest number
maxMoves = maxMovesArray[0]+1;
console.log("maxMoves = " + maxMoves);

clickCounterHit = 0;
console.log(clickCounterHit);

$("#hitNumber").append(" "+ gameNumber); // HTML TEXT: Don't hit more than. | Apend with: gameNumber


$("#buttonHit").on("click", function() {
    clickCounterHit = clickCounterHit + 1;

  	gameOver = clickCounterHit > maxMoves;
  	 
  	 win = gameNumber === winningAray[clickCounterHit-1]; 
  	 // Winning condition 1: The sum of all cards hit equals the gameNumber.
  	 // the sum of all cards is captured in array "winningAray". The first index is 0, whereas the first click is 1. 
  	 // Hence we have to deduct 1 from the click counter

  	 cardSrcLink = "assets/images/heart" + randomCardArray[clickCounterHit-1] + ".png"; // generates the random card link	
  	 // The first index is 0, whereas the first click is 1. Hence we have to deduct 1 from the click counter

  	 cardScore = winningAray[clickCounterHit-1]
  	 // The first index is 0, whereas the first click is 1. Hence we have to deduct 1 from the click counter

  
     switch (clickCounterHit) {
            case 1:
                $("#image1").attr("src", cardSrcLink);
                $(".randomNumber").html(cardScore);
                break;
            case 2:
             	$("#image2").attr("src", cardSrcLink);
                $(".randomNumber").html(cardScore);
                break;
            case 3:
                $("#image3").attr("src", cardSrcLink);
                $(".randomNumber").html(cardScore);
                break;
            case 4:
                $("#image4").attr("src", cardSrcLink);
                $(".randomNumber").html(cardScore);
                break;
            case 5:
                $("#image5").attr("src", cardSrcLink);
                $(".randomNumber").html(cardScore);
                break;
            case 6:
                $("#image6").attr("src", cardSrcLink);
                $(".randomNumber").html(cardScore);
                break;
            case 7:
                $("#image7").attr("src", cardSrcLink);
                $(".randomNumber").html(cardScore);
                break;
            case 8:
                $("#image8").attr("src", cardSrcLink);
                $(".randomNumber").html(cardScore);
                break;
            case 9:
                $("#image9").attr("src", cardSrcLink);
                $(".randomNumber").html(cardScore);
                break;
            case 10:
                $("#image10").attr("src", cardSrcLink);
                $(".randomNumber").html(cardScore);
                break;
            default:
                alert('You used up all cards');
                break;
               }

                    if (gameOver === true) { 
        $(".randomNumber").html(cardScore + " is greater than " + gameNumber + ", You Lost!");
        $("#buttonHit").prop('disabled', true); // non jquery would be document.getElementById("buttonHit").disabled = true;  anyways once the game is won, play buttons should be disabled.
        $("#buttonHold").prop('disabled', true); // once the game is won, play buttons should be disabled.
    } else if (win === true) {
    	$(".randomNumber").append(" Winner, Winner chicken dinner");
    	$("#buttonHit").prop('disabled', true); // once the game is won, play buttons should be disabled.
        $("#buttonHold").prop('disabled', true); // once the game is won, play buttons should be disabled.
  }        
    }) // closing function

clickCounterHold = 0 
$("#buttonHold").on("click", function() {
    clickCounterHold = clickCounterHold + 1;

  	gameOver = clickCounterHold > maxMoves;
  	win = clickCounterHold === maxMoves;
  	gameOver = clickCounterHold < maxMoves;
  	 $(".randomNumber").append(" " + clickCounterHold);
  	 console.log("Hold Clicks " + clickCounterHold);

  	 if (clickCounterHold > 0) { 
  	 	$("#buttonHit").prop('disabled', true);  // once "hold" has been clicked, button "hit" will be disabled as no hits should be possible anymore
        $("#buttonHold").prop('disabled', true);  // once "hold" has been clicked, button "hold" should be disabled as well, just for optics
  	 	 }

   
     if (gameOver === true) { 
        $(".randomNumber").append("You stopped too early, you could have hit more times - You Lost");
    }
    else if (win === true) {
        $(".randomNumber").append("Winner, Winner chicken dinner");
    }
    }) // closing function



$("#buttonRefresh").on("click", function() {  // on click it refreshes the pages, so the user can play again
    location.reload();
})

