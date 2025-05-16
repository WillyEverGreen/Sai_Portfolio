//sec3 animations
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".main",
    start: "50% 50%",
    end: ".section-4 100%",
    scrub: 2,
    pin: true,
    markers: false,
  },
});

tl.to(
  ".top",
  {
    top: "-50%",
    ease: "power2.inOut",
  },
  "a"
)
  .to(
    ".bottom",
    {
      bottom: "-50%",
      ease: "power2.inOut",
    },
    "a"
  )
  .to(
    "#tp, #bp",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "a"
  );

let target = 0;
let current = 0;
let ease = 0.075;
let slideCount = 5; // Updated to 5 slides
let currentSlide = 1;

const slider = document.querySelector(".slider");
const sliderWrapper = document.querySelector(".slider-wrapper");
const markerWrapper = document.querySelector(".marker-wrapper");
const activeSlide = document.querySelector(".active-slide");
const slides = document.querySelectorAll(".slide");

let maxScroll = sliderWrapper.offsetWidth - slider.offsetWidth;

function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

function updateActiveSliderNumber(markerMove, markerMaxMove) {
  const partWidth = markerMaxMove / slideCount;
  let currentPart = Math.round((markerMove - 70) / partWidth) + 1;
  currentPart = Math.min(slideCount, currentPart);
  activeSlide.textContent = `${currentPart}/${slideCount}`;
  currentSlide = currentPart;

  slides.forEach((slide, index) => {
    if (index === currentPart - 1) {
      slide.style.backgroundColor = "lightblue";
    } else {
      slide.style.backgroundColor = "gray";
    }
  });
}

function update() {
  current = lerp(current, target, ease);

  gsap.set(".slider-wrapper", {
    x: -current,
  });

  let moveRatio = current / maxScroll;
  let markerMaxMove = slider.offsetWidth - markerWrapper.offsetWidth - 170;
  let markerMove = 70 + moveRatio * markerMaxMove;

  gsap.set(".marker-wrapper", {
    x: markerMove,
  });

  updateActiveSliderNumber(markerMove, markerMaxMove);

  requestAnimationFrame(update);
}

window.addEventListener("resize", () => {
  maxScroll = sliderWrapper.offsetWidth - slider.offsetWidth;
});

let isDragging = false;
let startX = 0;

slider.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX - current;
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const x = e.clientX - startX;
  target = x;
  target = Math.max(0, target);
  target = Math.min(maxScroll, target);
  if (tl && tl.scrollTrigger) {
    tl.scrollTrigger.update();
  }
});

slider.addEventListener("mouseup", () => {
  isDragging = false;
  slider.style.cursor = "grab";
});

slider.addEventListener("mouseleave", () => {
  if (isDragging) {
    isDragging = false;
    slider.style.cursor = "grab";
  }
});

update();
