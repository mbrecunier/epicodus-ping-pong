var pingPong = function(userNumber) {
  var numberArray = [];
  for (var index = 1; index <= userNumber; index++) {
    numberArray.push(index);
  }
  numberArray.forEach(function(number) {
    if (number % 3 === 0) {
      numberArray[number-1] = 'ping';
    }
  });
  return numberArray;
}
