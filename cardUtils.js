function generateCards(){

	//create arrays to hold card info
	var returnArray = [];
	var suits = ['♠', '♥', '♦', '♣'];
	var faces = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
	
	//create new object for every combo of suit/face and add to list
	for(i = 0; i < suits.length; i++){
		for(j = 0; j < faces.length; j++){
			var card = {
				suit: suits[i],
				face: faces[j]
			};
			returnArray.push(card);
		}
	}	
	
	return returnArray;
} 

function shuffle(cardArray){
	//using shuffle algorithm 2
	var swapCard = cardArray.length - 1; 
	while(swapCard != 0){
		var chosenCard = Math.floor(Math.random() * cardArray.length); 
		
		//swap!
		var temp = cardArray[swapCard];
		cardArray[swapCard] = cardArray[chosenCard];
		cardArray[chosenCard] = temp; 
		
		swapCard--;
		
	}
	return cardArray;

}

function calculateHand(cardArray){
	var sum = 0;
	var numAces = 0; 
	for(i = 0; i < cardArray.length; i++){
		var card = cardArray[i];
		if(card && card.face){
			var value = card["face"]; 
		}
		
		if(isNaN(value)){//it's a face card
			if(value === 'J' || value === 'Q' || value === 'K'){
				sum += 10; 
			}
			else{ //ace
				sum += 11;
			}
		}
		else{ //it's a number card
			value = parseInt(value, 10); 
			sum += value; 
		}
	}
	//deal with >21 via aces
	while(sum > 21 && numAces > 0){
		sum -= 10; 
		numAces--;
	}
	return sum; 

}

function determineWinner(playerTotal, computerTotal){
	if(playerTotal === computerTotal){
		return "\nTie\n";
		
	}
		
	var playerDifference = 21 - playerTotal;
	var computerDifference = 21 - computerTotal; 
	
	//if one of the numbers is negative 
	if(computerDifference < 0 && playerDifference >= 0){
		return "\nPlayer\n";
	}
	if(playerDifference < 0 && computerDifference >= 0){
		return "\nComputer\n"; 
	}
	
	//absolute value if they're both negative so next if statements can apply
	if(playerDifference < 0 && computerDifference < 0){
		playerDifference = Math.abs(playerDifference);
		computerDifference = Math.abs(computerDifference); 
	}
	
	if(playerDifference < computerDifference){
		return "\nPlayer\n";
	}
	else if(computerDifference < playerDifference){
		return "\nComputer\n";
	}
	

}

exports.generateCards = generateCards;
exports.shuffle = shuffle;
exports.calculateHand = calculateHand;
exports.determineWinner = determineWinner; 
