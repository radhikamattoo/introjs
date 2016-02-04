var readlineSync = require('readline-sync');
var cardUtils = require('./cardUtils');

function start(){
	var cards;
	if(process.argv[2]) {
 		cards = JSON.parse(process.argv[2]) 
	}else {
 	 	cards = cardUtils.shuffle(cardUtils.generateCards());
	}
	game(cards);
}

function game(deck){
	var deckCount = 0; 
	var playerCount = 0; 
	var computerCount = 0; 
	var player = [];
	var computer = [];
	
	while(deckCount <= (deck.length/2)){
		//deal first 2 cards
		for(var i = 0; i < 2; i++){
			player[playerCount++] = deck[deckCount++];
			computer[computerCount++] = deck[deckCount++];
		}
		
		var letter = "";
		
		//keep asking user for input until they enter s or total goes over 21
		while(letter != "s"){
			//prompt user
			var playerHand = ""; 
			if(player != null){
				for(var i = 0; i < player.length; i++){
						playerHand += player[i].face + player[i].suit; 
				}
				console.log("Your hand is " + playerHand + " ...  for a total of " + cardUtils.calculateHand(player) + "\n");
			}
			
			letter = readlineSync.question('type h to (h)it or s to (s)tay: ');
			
			if(letter === "h"){
				player[playerCount++] = deck[deckCount++];
			}
						if(cardUtils.calculateHand(player) > 21){
				break; 
			}
		}
		
		
		//set up computer's cards 
		while(cardUtils.calculateHand(computer) < 17){
			computer[computerCount++] = deck[deckCount++];
		}
				
		//print necessary results
		var computerHand = "";
		for(var i = 0; i < computer.length; i++){
			if(computer[i] != null){
				computerHand += computer[i].face + computer[i].suit;
			} 
		}

		var playerTotal = cardUtils.calculateHand(player);
		var computerTotal = cardUtils.calculateHand(computer); 
		console.log("\nYour hand (" + playerHand + ") " + playerTotal + ", Computer Hand: " + computerHand + " (" + computerTotal + ")"); 
		console.log(cardUtils.determineWinner(playerTotal, computerTotal));
		console.log("There are " + (52 - deckCount) + " cards left in the deck"); 
		console.log("---------------------------------------------------------");
		
		//clear hand 
		player = []; 
		computer = [];
		playerCount = 0; 
		computerCount = 0; 
	
	}
	console.log("\nThanks for playing!");
}
start();