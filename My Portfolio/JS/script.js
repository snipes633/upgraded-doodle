// var typed = new Typed (".auto-type1", {
//   strings: [" ", "Adeniyi Adebisi"],
//   typeSpeed: 120,
// });

var typed = new Typed (".auto-type2", {
  strings: [" ", "A Web Designer And a Web Developer."],
  typeSpeed: 120,
  backSpeed: 150,
  loop: true
});

// /* For the sticky navidation */
// $(".js--section-services").Waypoint(function(direction) {
//     if (direction == "down") {
//         $("nav").addClass("sticky");
//     } else {
//         $("nav").removeClass("sticky");
//     }
// }, {
//   offset: '60px;'
// });

// window.onscroll = function() {myFunction()};
//
// var navbar = document.getElementById("navbar");
//
// var sticky = navbar.offsetTop;
//
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

$("#toggle").on("click", function() {
  if ($("body").hasClass("dark")) {
    $("body").removeClass("dark");
  } else {
    $("body").addClass("dark");
  }
});

// (function () {
//     [...document.querySelectorAll(".control")].forEach(button => {
//         button.addEventListener("click", function() {
//             document.querySelector(".active-btn").classList.remove("active-btn");
//             this.classList.add("active-btn");
//             document.querySelector(".active").classList.remove("active");
//             document.getElementById(button.dataset.id).classList.add("active");
//         })
//     });
//     document.querySelector(".theme-btn").addEventListener("click", () => {
//         document.body.classList.toggle("light-mode");
//     })
// })();

function rotate() {
  var lastChild = $('.slider div:last-child').clone();
  // $('#test').html(lastChild)
  $('.slider div').removeClass('firstSlide')
  $('.slider div:last-child').remove();
  $('.slider').prepend(lastChild)
  $(lastChild).addClass('firstSlide')
}

window.setInterval(function(){
   rotate()
 }, 5000);
