$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

  // setting owl carousel
  let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]
  $('#hero-carousel').owlCarousel({
      items: 1,
      dots: false,
      loop: true,
      nav: true,
      navText: navText,
      autoplay: true,
      autoplayHoverPause: true
  })
  $('#top-movies-slide').owlCarousel({
      items: 2,
      dots: false,
      loop: true,
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
          500: {
              items: 3
          },
          1280: {
              items: 4
          },
          1600: {
              items: 6
          }
      }
  })
  $('.movies-slide').owlCarousel({
      items: 2,
      dots: false,
      nav: true,
      navText: navText,
      margin: 15,
      responsive: {
          500: {
              items: 2
          },
          1280: {
              items: 4
          },
          1600: {
              items: 6
          }
      }
  })

})


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-fade-mostafa");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


































//crime========================================


$(document).ready(() => {
  $('#hamburger-menu').click(() => {
    $('#hamburger-menu').toggleClass('active')
    $('#nav-menu').toggleClass('active')
  })
})





// show video
let playbutton =  document.querySelector('.play-movie'); 
let video =  document.querySelector('.video-container');
let myvideo = document.querySelector("#myvideo");
let closebtn =  document.querySelector('.close-video');

playbutton.onclick = () =>{
    video.classList.add('show-video')
}
// auto play

myvideo.play();











//action============================================































//comedy==========================================================

const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});


















































//adventure==================================================
$(document).ready(() => {
  $('#hamburger-menu').click(() => {
      $('#hamburger-menu').toggleClass('active')
      $('#nav-menu').toggleClass('active')
  })
})


'use strict';

// variables for navbar menu toggle
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navbarMenuBtn = document.querySelector('.navbar-menu-btn');

// variables for navbar search toggle
const navbarForm = document.querySelector('.navbar-form');
const navbarFormCloseBtn = document.querySelector('.navbar-form-close');
const navbarSearchBtn = document.querySelector('.navbar-search-btn');


// navbar menu toggle function
function navIsActive() {
  header.classList.toggle('active');
  nav.classList.toggle('active');
  navbarMenuBtn.classList.toggle('active');
}

navbarMenuBtn.addEventListener('click', navIsActive);



// navbar search toggle function
const searchBarIsActive = () => navbarForm.classList.toggle('active');

navbarSearchBtn.addEventListener('click', searchBarIsActive);
navbarFormCloseBtn.addEventListener('click', searchBarIsActive);




playButton.onclick = () => {
  video.classList.add('.show-video')
}

myvideo.play();

closebtn.onclick = () => {
  video.classList.remove('.show-video')
}

myvideo.pause();





/*animated________________________*/


 
