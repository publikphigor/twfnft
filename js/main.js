"use strict";

// navbar function
const navbar = document.querySelector(".navbar");
const navBtn = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");

function toggleNavbar() {
  navbar.classList.toggle("active");
  navBtn.classList.toggle("active");
  overlay.classList.toggle("active");
}

navBtn.addEventListener("click", toggleNavbar);
overlay.addEventListener("click", toggleNavbar);

// slider funcion
const slider = document.querySelector(".swiper");
const sliderCard = document.querySelectorAll(".swiper-card");

const size = sliderCard[0].clientWidth;
let counter = 1;
// slider.style.transform = `translateX(${-size * counter}px)`;

function nextSlide() {
  if (counter >= sliderCard.length - 1) return;
  slider.style.transition = `transform 0.4s ease-in-out`;
  counter++;
  slider.style.transform = `translateX(${-size * counter}px)`;
}

// loop back to first slide
slider.addEventListener("transitionend", () => {
  if (sliderCard[counter].classList.contains("lastClone")) {
    console.log("works", counter);
    slider.style.transition = "none";
    counter = sliderCard.length - 2;
    slider.style.transform = `translateX(${-slideWidth * counter}px)`;
  }
  if (sliderCard[counter].classList.contains("firstClone")) {
    console.log("works", counter);
    slider.style.transition = "none";
    counter = sliderCard.length - counter;
    slider.style.transform = `translateX(${-slideWidth * counter}px)`;
  }
});

// setInterval(nextSlide, 500);

// Accordion Function

const faqContainers = document.querySelectorAll(".faq");
const faqToggleBtns = document.querySelectorAll(".faq-toggle");
const faqContents = document.querySelectorAll(".faq-content");

for (const [btnIndex, toggleBtn] of faqToggleBtns.entries()) {
  toggleBtn.addEventListener("click", function (e) {
    faqToggleBtns.forEach((button) => {
      if (button === e.target) return;
      button.classList.remove("active");
    });
    e.target.classList.toggle("active");
    faqContents.forEach((faqContent) => {
      if (faqContent === faqContents.item(btnIndex)) return;
      faqContent.classList.remove("active");
    });
    faqContents.item(btnIndex).classList.toggle("active");
  });
}
