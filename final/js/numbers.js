// jquery is the bomb
$.get('http://numbersapi.com/20/trivia?', function (data) {
  $('#dailyMath').text(data);
});
