




// Login and Signup popup controls
const loginBtn = document.getElementById("loginbtn");
const signBtn = document.getElementById("signbtn");
const loginSection = document.getElementById("login_section");
const signupContainer = document.querySelector(".signup_container");
const loginClose = document.getElementById("login_close");
const signClose = document.getElementById("sign_close");

loginBtn.addEventListener("click", () => {
  loginSection.style.display = "block";
  signupContainer.style.display = "none";
});

signBtn.addEventListener("click", () => {
  signupContainer.style.display = "block";
  loginSection.style.display = "none";
});

loginClose.addEventListener("click", () => {
  loginSection.style.display = "none";
});

signClose.addEventListener("click", () => {
  signupContainer.style.display = "none";
});  



//--  login click----
// Select elements
const toggler = document.querySelector('.toggler');
const navLinks = document.getElementById('navlinks');
const dropdowns = document.querySelectorAll('.dropdown');

// Toggle navbar visibility
toggler.addEventListener('click', (e) => {
  e.stopPropagation();
  navLinks.classList.toggle('active');
});

// Close navbar when clicking outside
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !toggler.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

// Toggle dropdowns inside mobile menu
dropdowns.forEach(drop => {
  drop.addEventListener('click', (e) => {
    e.stopPropagation();
    drop.classList.toggle('active');
  });
});

// Close navbar on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
