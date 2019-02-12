var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
addElementToBeginningOfArray(chocolateBars, "dove");
destructivelyAddElementToBeginningOfArray(chocolateBars, "hersheys");
addElementToEndOfArray(chocolateBars, "crunch");
destructivelyAddElementToEndOfArray(chocolateBars, "butterfingers");


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
  var newArray = candyArray;
  newArray = [...newArray, newCandy];
  return newArray;
}

function destructivelyAddElementToEndOfArray(candyArray, newCandy){
  var newArray = candyArray;
  newArray.push(newCandy);
  return newArray;
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
