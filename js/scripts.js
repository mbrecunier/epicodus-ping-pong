var pingPong = function(userNumber) {
  var numberArray = [];
  if (userNumber < 0) {
    for (var index = -1; index >= userNumber; index--) {
      numberArray.push(index);
    }
    numberArray.forEach(function(number) {
      if((number % 5 === 0) && (number % 3 === 0)) {
        numberArray[-number-1] = 'pingpong';
      } else if (number % 3 === 0) {
        numberArray[-number-1] = 'ping';
      } else if (number % 5 === 0) {
        numberArray[-number-1] = 'pong';
      }
    });
  } else if (userNumber > 0) {
      for (var index = 1; index <= userNumber; index++) {
        numberArray.push(index);
      }
      numberArray.forEach(function(number) {
        if((number % 5 === 0) && (number % 3 === 0)) {
          numberArray[number-1] = 'pingpong';
        } else if (number % 3 === 0) {
          numberArray[number-1] = 'ping';
        } else if (number % 5 === 0) {
          numberArray[number-1] = 'pong';
        }
      });
  }

  return numberArray;
}
