const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

const instButton = document.querySelector(".instagram__button");
const instList = document.querySelector(".instagram__list");

instButton.addEventListener("click", function () {
  if (instList.style.maxHeight == "480px") {
    instList.style.maxHeight = "100%";
    instButton.innerHTML = "Скрыть";
  } else {
    instList.style.maxHeight = "480px";
    instButton.innerHTML = "Показать еще";
  }
});

const burgerButton = document.querySelector(".burger-button");
const burgerSpan = document.querySelector(".burger-button__span");
const burgerList = document.querySelector(".nav__list");
const burgerLink = document.querySelectorAll(".nav__link");
const page = document.querySelector(".page");

burgerButton.addEventListener("click", function () {
  burgerButton.classList.toggle("burger-button_active");
  burgerSpan.classList.toggle("burger-button__span_active");
  burgerList.classList.toggle("nav__list_active");
  page.classList.toggle("page_active");
});

for (let links of burgerLink) {
  links.addEventListener("click", function () {
    burgerList.classList.remove("nav__list_active");
    burgerButton.classList.remove("burger-button_active");
    burgerSpan.classList.remove("burger-button__span_active");
    page.classList.remove("page_active");
  });
}
