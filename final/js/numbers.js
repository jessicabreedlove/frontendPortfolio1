// call api
function showNumber(str) {
  document.getElementById('dailyMath').innerText = str;
}

(function () {
  let p = document.createElement('script');
  p.async = true;
  p.src = 'http://numbersapi.com/42/math?callback=showNumber';
  document.body.appendChild(p);
})();

// rendData(url);

// function rendData(url) {
//   fetch(url)
//     // .then((response) => response.json())
//     .then((data) => {
//       renderMathFact(data);
//     });
// }

// function renderMathFacts(data) {
//   console.log(data);
//   const mathFacts = document.getElementById('dailyMath');
//   let mathFact = `<div>Name: ${data.text}<br></div>`;
//   mathFacts.innerHTML += mathFact;

//   prevUrl = data.previous;
//   nextUrl = data.next;
// }
