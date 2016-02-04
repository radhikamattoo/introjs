function arrayToList(array){
	//takes an array and builds nested list from it (value, rest pairs), with last rest : null
	var returnList = null; 
	for(var i = array.length-1; i >= 0; i--){
		returnList = {value: array[i], rest: returnList};
	}
	return returnList; 
}

function listToArray(list){
	//takes a nested list and creates an array from it 
	var returnArray = [];
	for(var node = list; node; node = node.rest){
		returnArray.push(node.value);
	}
	return returnArray;

}

function prepend(element, list){
	//prepend element
	var newList = {value: element, rest:list};
	return newList;
}

function nth(list, number){
	//returns element at given position 
	var counter = 0; 
	for(var node = list; node; node = node.rest){
		if(counter === number){
			return node.value;
		}
		counter++;
	}
	//not a valid index for this list
	return undefined;
}

function nthRecursive(list, number){
	//base case
	if(number === 0){
		return list.value; 
	}
	
	//recursive case 
	return nthRecursive(list.rest, --number);
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nthRecursive(arrayToList([10, 20, 30]), 1)); 
