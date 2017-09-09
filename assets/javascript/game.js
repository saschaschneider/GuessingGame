var randomNumber; // Holds the random number, which the player has to guess later
var cardSelector; // Randomly selects the array index of the game cards
var randomCardNumber; // Holds the randomly selected card number
var clickCounter; // Counts the clicks on the game button
var cardSrcLink; // This variable will generate the src link for card image, but randomizes the card - shuffles them
var cardValue // Will hold the card value
var cardScoreArray = []; // This array will hold the value of each played card, to sum the card values
var cardScore; // We will utilize this variable to calculate the overal value of all played cards, using the array as

//-------------END OF DEFINING VARIABLES ------------------------// 


randomNumber =  Math.floor((Math.random() * 100) + 1);

console.log("randomCardNumber = " +randomCardNumber);
console.log("randomNumber = " +randomNumber);



clickCounter = 0;
        $("#the_button").on("click", function()
        {
            clickCounter = clickCounter +1;
           
         randomCardNumber = Math.floor((Math.random() * 10) + 1); // generates a random number betwenn 1 and 10, this number is then used to generate the random card link
         cardSrcLink = "assets/images/heart" + randomCardNumber + ".png"; // generates the random card link

         cardValue = randomCardNumber; // since each cards file name is associated to the card value, i.e. hearth1 = value 1, the randomnumber is also equal to the card value
		 cardScoreArray.push(cardValue);
		 console.log("cardScoreArray = " + cardScoreArray);


         switch(clickCounter) {
    case 1:
         $("#image1").attr("src", cardSrcLink); 
	     $("#the_button").html("Dare to click once again?"); 
	     cardScore = cardScoreArray[0];
		 $(".cardValue").html(cardScore); 	     
        break;
    case 2:
        $("#image2").attr("src", cardSrcLink); 
	    $("#the_button").html("Daredevil - one more card?"); 
	    cardScore = cardScoreArray[0] + cardScoreArray[1];
	    $(".cardValue").html(cardScore); 	  
        break;
    case 3:
        $("#image3").attr("src", cardSrcLink); 
	    $("#the_button").html("No way, try again?"); 
        break;
    case 4:
       $("#image4").attr("src", cardSrcLink); 
	    $("#the_button").html("No way, try again?"); 
        break;
    case 5:
        $("#image5").attr("src", cardSrcLink); 
	    $("#the_button").html("No way, try again?"); 
        break;
    case 6:
       $("#image6").attr("src", cardSrcLink); 
	    $("#the_button").html("No way, try again?"); 
        break;
    case 7:
        $("#image7").attr("src", cardSrcLink); 
	    $("#the_button").html("No way, try again?"); 
        break;
    case 8:
        $("#image8").attr("src", cardSrcLink); 
	    $("#the_button").html("No way, try again?"); 
	    break;
	case 9:
        $("#image9").attr("src", cardSrcLink); 
	    $("#the_button").html("No way, try again?"); 
        break;
    case 10:
        $("#image10").attr("src", cardSrcLink); 
	    $("#the_button").html("No way, try again?"); 
        break;
    default:
        
}
        });

 









// var first_click = true;
// 	function add_IMG() {
// 	    if (first_click) {
// 	        $("#image1").attr("src", "assets/images/heart1.png"); // appends text "World" to the end of that div.
// 	        $("#the_button").html("Dare to click once again?"); // appends text "World" to the end of that div.
// 	        first_click = false;
// 	        var count = 1;
// 	        console.log("First click #1 " + first_click + "  C = " +count);
// 	    } else if (count = 1){
// 	    	$("#image2").attr("src", "assets/images/heart2.png"); // appends text "World" to the end of that div.
//         	$("#the_button").html("You are a real Daredevil - click again?"); // appends text "World" to the end of that div.  
//         	count = count+1;
//         	console.log("second click #2 " + first_click + "  C = " +count);
//         	} else {
//   			$("#image3").attr("src", "assets/images/heart3.png"); // appends text "World" to the end of that div.
//        		$("#the_button").html("Woooh, one more time little boy?"); // appends text "World" to the end of that div. 
//        		console.log("hird click #3 " + first_click + "  C = " +count ); 

// 	    }}
