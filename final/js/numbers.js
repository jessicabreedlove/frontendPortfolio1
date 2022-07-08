// jquery is the bomb
export function randNum() {
  $.get('http://numbersapi.com/random/', function (data) {
    $('#randomMath').text(data);
  });
}
