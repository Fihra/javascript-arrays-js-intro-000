var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
addElementToBeginningOfArray(chocolateBars, "dove");
destructivelyAddElementToBeginningOfArray(chocolateBars, "hersheys");

function addElementToBeginningOfArray(candyArray, newCandy){
  var newArray = candyArray;
  newArray = [newCandy, ...newArray];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(candyArray, newCandy){
  var newArray = candyArray;
  newArray.unshift(newCandy);
  return newArray;
}

function addElementToEndofArray(candyArray, newCandy){
  return a.push(b);
}

function destructivelyAddElementToEndOfArray(candyArray, newCandy){
  return a.push(b);
}

function accessElementInArray(){

}

function destructivelyRemoveElementFromBeginningOfArray(){

}

function removeElementFromBeginningOfArray(){

}

function destructivelyRemoveElementFromEndOfArray(){

}

function removeElementFromEndOfArray(){

}
