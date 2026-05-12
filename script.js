// MOBILE MENU
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

// DROPDOWN MENU
document.querySelectorAll(".dropdown-toggle").forEach(link => {

  link.addEventListener("click", function(e) {

    e.preventDefault();

    const dropdown = this.closest(".dropdown");

    document.querySelectorAll(".dropdown").forEach(item => {

      if(item !== dropdown){
        item.classList.remove("active");
      }

    });

    dropdown.classList.toggle("active");

  });

});

// CLOSE DROPDOWN WHEN CLICK OUTSIDE
document.addEventListener("click", function(e) {

  if(!e.target.closest(".dropdown")){

    document.querySelectorAll(".dropdown").forEach(item => {
      item.classList.remove("active");
    });

  }

});

// NAVBAR SHADOW ON SCROLL
window.addEventListener("scroll", function(){

  const navbar = document.getElementById("navbar");

  if(!navbar) return;

  if(window.scrollY > 50){

    navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,0.12)";

  } else {

    navbar.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";

  }

});

// ANIMATED COUNTERS
const counters = document.querySelectorAll(".counter");

const speed = 200;

function runCounter(){

  counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");

    const count = +counter.innerText;

    const increment = target / speed;

    if(count < target){

      counter.innerText = Math.ceil(count + increment);

      setTimeout(runCounter, 15);

    } else {

      counter.innerText = target;

    }

  });

}

// START COUNTER WHEN SECTION VISIBLE
const statsSection = document.querySelector(".stats-bar");

let started = false;

window.addEventListener("scroll", () => {

  if(!statsSection) return;

  const sectionTop = statsSection.offsetTop;

  if(window.pageYOffset > sectionTop - 500 && !started){

    runCounter();
    started = true;

  }

});

// TESTIMONIAL SLIDER
let currentSlide = 0;

const slides = document.querySelectorAll(".review-card");

function showSlides(){

  slides.forEach((slide,index)=>{

    slide.style.display = "none";

    if(index === currentSlide){
      slide.style.display = "block";
    }

  });

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

}

// MOBILE ONLY SLIDER
function mobileSlider(){

  if(window.innerWidth <= 768){

    showSlides();

    setInterval(showSlides, 3000);

  }

}

mobileSlider();

// FLOATING ENQUIRY FORM TOGGLE
const enquiryBtn = document.querySelector(".floating-enquiry-btn");
const enquiryForm = document.querySelector(".floating-form");

if(enquiryBtn){

  enquiryBtn.addEventListener("click", ()=>{

    enquiryForm.classList.toggle("show-form");

  });

}

// SMOOTH SCROLL ACTIVE MENU
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", ()=>{

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if(pageYOffset >= sectionTop - 200){

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if(link.getAttribute("href").includes(current)){

      link.classList.add("active");

    }

  });

});

// HERO IMAGE ANIMATION
const heroImage = document.querySelector(".hero-right img");

window.addEventListener("mousemove", (e)=>{

  if(!heroImage) return;

  let x = (window.innerWidth / 2 - e.pageX) / 40;
  let y = (window.innerHeight / 2 - e.pageY) / 40;

  heroImage.style.transform = `translate(${x}px, ${y}px)`;

});

// BUTTON RIPPLE EFFECT
const buttons = document.querySelectorAll(".primary-btn, .secondary-btn, .cta-btn");

buttons.forEach(btn => {

  btn.addEventListener("mouseenter", ()=>{

    btn.style.transform = "translateY(-3px)";
    btn.style.transition = "0.3s ease";

  });

  btn.addEventListener("mouseleave", ()=>{

    btn.style.transform = "translateY(0px)";

  });

});

// DESTINATION CARD HOVER EFFECT
const destinationCards = document.querySelectorAll(".destination-card");

destinationCards.forEach(card => {

  card.addEventListener("mouseenter", ()=>{

    card.style.transition = "0.3s ease";
    card.style.transform = "translateY(-10px)";

  });

  card.addEventListener("mouseleave", ()=>{

    card.style.transform = "translateY(0px)";

  });

});

// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(
  ".service-card, .destination-card, .step, .review-card, .mv-card, .why-grid div"
);

function revealOnScroll(){

  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {

    const revealTop = el.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){

      el.style.opacity = "1";
      el.style.transform = "translateY(0px)";
      el.style.transition = "0.8s ease";

    } else {

      el.style.opacity = "0";
      el.style.transform = "translateY(50px)";

    }

  });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
// UK MODAL

const openUK = document.getElementById("openUK");
const ukModal = document.getElementById("ukModal");
const closeModal = document.querySelector(".close-modal");

openUK.onclick = () => {
    ukModal.style.display = "flex";
}

closeModal.onclick = () => {
    ukModal.style.display = "none";
}

window.onclick = (e) => {
    if(e.target == ukModal){
        ukModal.style.display = "none";
    }
}