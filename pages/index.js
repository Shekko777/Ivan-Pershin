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

const burgerButton = document.querySelector(".burger-button"),
  burgerSpan = document.querySelector(".burger-button__span"),
  burgerList = document.querySelector(".nav__list"),
  burgerLink = document.querySelectorAll(".nav__link"),
  page = document.querySelector(".page");

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

// галерея

const popupImage = document.querySelector(".popup-image");
const images = document.querySelectorAll(".instagram__img");
const popupClose = document.querySelector(".popup-image__close");
const imagePopup = document.querySelector(".popup-image__img");

images.forEach((el) => {
  el.addEventListener("click", () => {
    popupImage.classList.add("popup-image_type_opened");
    imagePopup.src = el.src;
  });
});

popupClose.addEventListener("click", () => {
  popupImage.classList.remove("popup-image_type_opened");
});

popupImage.addEventListener("click", (evt) => {
  if (evt.target === evt.currentTarget) {
    popupImage.classList.remove("popup-image_type_opened");
  }
});

document.addEventListener("keydown", (evt) => {
  if (evt.keyCode === 27) {
    popupImage.classList.remove("popup-image_type_opened");
  }
});
