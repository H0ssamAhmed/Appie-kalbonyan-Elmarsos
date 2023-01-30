// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************
// ************

let menu = document.querySelector(".head .header .links ul");
let bars = document.querySelector(".head .header .container .get-started i");
bars.addEventListener("click", () => {
  console.log(menu);
  menu.classList.toggle("header-menu");
});
let topPage = document.querySelector(".topPage");
window.onscroll = function () {
  if (window.scrollY >= 900) {
    topPage.style.display = "block";
  } else topPage.style.display = "none";
};
topPage.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
