// function renderImg() {
//   let randomPic = document.getElementById('randomPic');
//   let genRandBtn = document.getElementById('genRandBtn');
//   genRandBtn.addEventListener('click', randImg(randomPic));
// }
let randomPic = document.getElementById('randomPic');
function randImg(randomPic) {
  randomPic.innerHTML =
    '<img class="randImg" src="https://source.unsplash.com/random/550x550/">';
}

randImg(randomPic);

// let genRandBtn = document.getElementById('genRandBtn');
// genRandBtn.addEventListener('click', 'window.location.reload()');
