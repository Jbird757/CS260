/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar58").style.top = "0";
//   } else {
//     document.getElementById("navbar58").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }
// {mode: 'cors'}
function getFact() {
  url = "https://uselessfacts.jsph.pl/random.json?language=en";
  fetch(url)
      .then(function(response) {
      return response.json();
      }).then(function(json) {
      console.log(json);
      const result = document.getElementById('factResult');
      result.innerHTML = json.text;
      });
}

window.onload = getFact;