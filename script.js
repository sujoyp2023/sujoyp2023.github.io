// Typing animation
const typeText = document.getElementById('type-text');
const phrases = ["Frontend Developer.", "Tech Enthusiast.", "Open Source Learner."];
let index = 0, charIndex = 0;

function typeEffect() {
  if (charIndex <= phrases[index].length) {
    typeText.textContent = phrases[index].slice(0, charIndex++);
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typeText.textContent = phrases[index].slice(0, --charIndex);
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % phrases.length;
    setTimeout(typeEffect, 500);
  }
}
document.addEventListener('DOMContentLoaded', typeEffect);

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

// Persist dark mode
window.onload = () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
};

// Form validation
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields.");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}
