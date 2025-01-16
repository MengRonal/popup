const btnGoogle = document.querySelector(".search");
const btnCansel = document.querySelector(".cansel");
const btnclose = document.querySelector(".btn_close");
const medal = document.querySelector(".moden");
const overlay = document.querySelector(".overlay");

btnGoogle.addEventListener("click", function () {
  medal.classList.add("active");
  overlay.classList.add("active");
});
btnCansel.addEventListener("click", function () {
  medal.classList.remove("active");
  overlay.classList.remove("active");
});
btnclose.addEventListener("click", function () {
  medal.classList.remove("active");
  overlay.classList.remove("active");
});
