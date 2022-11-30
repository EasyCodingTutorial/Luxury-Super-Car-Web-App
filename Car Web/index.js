document.querySelector("#LoginBtn").onclick = () => {
  document.querySelector(".LoginFormContainer").classList.toggle("active");
};
// To Close The Login Form
document.querySelector("#CloseLoginForm").onclick = () => {
  document.querySelector(".LoginFormContainer").classList.remove("active");
};

// For Header
let MenuBtn = document.querySelector("#MenuBtn");
let Navbar = document.querySelector(".navbar");

MenuBtn.onclick = () => {
  MenuBtn.classList.toggle("fa-times");
  Navbar.classList.toggle("active");
};

// For The Movement of img in Header
// When Mouse Enter/Move
document.querySelector(".home").onmousemove = (e) => {
  document.querySelectorAll(".HomeParallex").forEach((elm) => {
    let speed = elm.getAttribute("data-speed");
    let x = (window.innerWidth - e.pageX * speed) / 60;
    let y = (window.innerHeight - e.pageY * speed) / 60;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
  });
};
// When Mouse Leave
document.querySelector(".home").onmouseleave = (e) => {
  document.querySelectorAll(".HomeParallex").forEach((elm) => {
    elm.style.transform = `translateX(0px) translateY(0px)`;
  });
};
