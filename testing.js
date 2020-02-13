/*
    2/13/2020
    This is a test file for random scripting
*/

function sec(times) {

    var repeatedString = 'Mod 5 is ';
    var notZero = 'Not Zero';
    var zero = 'Zero'
  
  
    while (times > 0) {
      if (times % 5 == 0) {
        console.log(repeatedString + zero);
      } else {
        console.log(repeatedString + notZero);
      }
      times--;
    }
  
    return true;
  }
  
  
  var container = document.getElementById('Eric');
  
  function block(mClass, html) {
      return '<div class="' + mClass + '">' + html + '</div>';
  }
  
  for (var i = 0; i < 3; i++) {
      container.innerHTML += block('block', 'data');
  }

  console.log('Hello');