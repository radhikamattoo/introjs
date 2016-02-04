function range(){
	var output = [];
	var start = 0; 
	var end = 0; 
	var increment = 1;
	//parse arguments
	if(arguments.length == 1){
		end = arguments[0];
		
		if(end <= 0){
			return output;
		}
	}
	else if(arguments.length == 2){
		start = arguments[0];
		end = arguments[1];
		
		if(start > end){
			return output;
		}
	}
	else if(arguments.length == 3){
		start = arguments[0];
		end = arguments[1];
		increment = arguments[2];
		
		if(start < end && increment < 0){	
			return output;
			
		}
		else if(start > end && increment > 0){
			return output; 
		}
	}
	else{
		console.log("Sorry! Too few or too many arguments.");
		return;
	}
	
	
	//now done with parsing, use info to set up array
	if(increment > 0){
		for(i = start; i < end; i+= increment){
			output.push(i);
		}
	}
	else{
		for(i = start; i > end; i+= increment){
			output.push(i);
		}
		
	}
	return output; 
	
	
} 

console.log(range(5));
console.log(range(2, 5));
console.log(range(2, 9, 2));
console.log(range(5, 0, -1));
console.log(range(6, -1, -2));
console.log(range(6, -1, 1));
