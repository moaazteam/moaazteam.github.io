//horror===============================================

$(document).ready(() => {
  $('#hamburger-menu').click(() => {
    $('#hamburger-menu').toggleClass('active')
    $('#nav-menu').toggleClass('active')
  })
})

const selected = document.querySelector(".selected-69");
const optionsContainer = document.querySelector(".options-container-69");

const optionsList = document.querySelectorAll(".option-69");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active-69");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active-69");
  });
});



const productContainers = [...document.querySelectorAll('.product-container-69')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn-69')];
const preBtn = [...document.querySelectorAll('.pre-btn-69')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

