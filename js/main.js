


//
//
// var init = function() {
//   chance();
// }

document.querySelector('#showContent').addEventListener('click', function() {

var chance = Math.floor(Math.random() * 9) + 1;

var chanceDOM = document.querySelector('.chance');
// chanceDOM.style.display = 'block';
chanceDOM.src = 'img/chance-' + chance + '.jpg';

  });

// document.querySelector("#moveContent").addEventListener('click', function() {

function flipImg() {
  var element = document.getElementById('moveMe');
  element.classList.toggle('flip');
}

// document.querySelector('#moveMe').addEventListener('click', function() {
// var flip = document.getElementById('flip');
// flip.classList.toggle('anispin');
//
// });
// function ani(){
//   document.getElementById('moveMe').style.keyframes = "aniset";
// }
