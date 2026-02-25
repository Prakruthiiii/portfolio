const textArray = [
  "Web Developer",
  "Java Developer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  const typingElement = document.getElementById("typing");
  currentText = textArray[index];

  if (!isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % textArray.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
