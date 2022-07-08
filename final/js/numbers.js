// jquery is the bomb
function randNum() {
  $.get('http://numbersapi.com/random/', function (data) {
    $('#randomMath').text(data);
  });
}

randNum();
