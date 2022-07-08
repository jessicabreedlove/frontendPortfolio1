// function renderImg() {
//   let randomPic = document.getElementById('randomPic');
//   randomPic.addEventListener('click', randImg(randomPic));
// }

let randomPic = document.getElementById('randomPic');
randomPic.addEventListener('click', randImg(randomPic));

export function randImg(randomPic) {
  randomPic.innerHTML =
    '<img class="randImg" src="https://source.unsplash.com/random/">';
}

// export { randomImg };
// export { randomImg};
