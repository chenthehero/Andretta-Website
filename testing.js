/*
    2/13/2020
    This is a test file for random scripting
*/
  
var divToChange = document.getElementById('Eric');
var paragraph = document.getElementById('Eric').innerHTML;
  

function specialDiv(number) {

  var returnDiv

  if (number % 5 == 0) {
    returnDiv = '<div>' + number + ' is divisible by 5</div>'
  } else {
    returnDiv = '<div>'+ number + ' is not divisible by 5</div>'
  }

  return returnDiv;
}

function repeater(count) {
  while (count >= 0) {
      divToChange.innerHTML += specialDiv(count);
    count--;
  }
}

repeater(16);
console.log('Value: ' + paragraph);

  
