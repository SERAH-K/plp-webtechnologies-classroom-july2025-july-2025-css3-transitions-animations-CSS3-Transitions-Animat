// Demonstrating functions, scope, and DOM interaction

// GLOBAL variable
let animationCount = 0;

// Function with parameter + return value
function calculateDouble(num) {
  return num * 2;
}

// Local scope demonstration
function increaseCounter() {
  let localCounter = calculateDouble(animationCount); // local variable
  animationCount++; // modifies global
  console.log("Local doubled:", localCounter, "Global count:", animationCount);
}

// DOM Elements
const animateBoxBtn = document.getElementById("animateBoxBtn");
const animatedBox = document.getElementById("animatedBox");
const toggleModalBtn = document.getElementById("toggleModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");

// Reusable function to trigger CSS animation
function triggerAnimation(element, className) {
  element.classList.remove(className); // reset
  void element.offsetWidth;            // trick: restart animation
  element.classList.add(className);
  increaseCounter();
}

// Event: Animate the box when button clicked
animateBoxBtn.addEventListener("click", () => {
  triggerAnimation(animatedBox, "animate");
});

// Modal toggle functions
function openModal() {
  modal.classList.add("show");
}
function closeModal() {
  modal.classList.remove("show");
}

// Events for modal
toggleModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
