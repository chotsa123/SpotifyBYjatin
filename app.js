// Login Panel Toggle
const loginBtn = document.getElementById("loginBtn");
const loginPanel = document.getElementById("loginPanel");
const closeLogin = document.getElementById("closeLogin");

loginBtn.addEventListener("click", () => {
  loginPanel.classList.toggle("active");  // अब toggle होगा
});

closeLogin.addEventListener("click", () => {
  loginPanel.classList.remove("active");  // X दबाने से बंद
});

// Mobile Menu Toggle Example
const menuBtn = document.getElementById("menuBtn"); // Mobile menu button
const mobileMenu = document.getElementById("mobileMenu"); // Mobile menu div

if(menuBtn && mobileMenu){
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
}
