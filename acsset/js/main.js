// Show user dropdown
const userDropDown = document.querySelector(".js-dropdown");
const UserHeader = document.querySelector(".js-user-header");

function showAndHideUserDropDown() {
    if (cartDropDown.classList.contains("show")){showAndHideCartDropDown()}
    userDropDown.classList.toggle("show");
}
UserHeader.onclick = function (event) {
    event.stopPropagation();
    showAndHideUserDropDown();
};
userDropDown.addEventListener("click", function (event) {
    event.stopPropagation();
});
// Show cart dropdown
const cartDropDown = document.querySelector(".js-cart-dropdown");
const cart = document.querySelector(".js-cart");

function showAndHideCartDropDown() {
    if(userDropDown.classList.contains("show")){showAndHideUserDropDown()}
    cartDropDown.classList.toggle("show");
}
cart.addEventListener("click", function (event) {
    showAndHideCartDropDown();
    event.stopPropagation();
});
cartDropDown.addEventListener("click", function (event) {
    event.stopPropagation();
});
// Close dropdown
window.addEventListener("click", function (event) {
    if (userDropDown.classList.contains("show")) {
        showAndHideUserDropDown();
    }
    if (cartDropDown.classList.contains("show")) {
        showAndHideCartDropDown();
    }
});
// Hide free ship bar
const closebar = document.querySelector(".js-close-bar");
function hideFreeShipBar() {
    document.querySelector(".upper-bar-freeship").style.display = "none";
}
closebar.addEventListener("click", function (event) {
    hideFreeShipBar();
    // even.stopPropagation();
});
// Slide show

function showSlide(Index) {
    let i = 0;
    if (Index > slide.length - 1) {
        slideIndex = 0;
    }
    if (Index < 0) {
        slideIndex = slide.length - 1;
    }
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        if (dots[i].classList.contains("active")) {
            dots[i].classList.remove("active");
        }
    }
    slide[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}
function currentSlide(Index) {
    showSlide((slideIndex = Index));
}
function plusSlide(i) {
    showSlide((slideIndex += i));
}
var slideIndex = 0;
const slide = document.querySelectorAll(".js-slider-banner");
const dots = document.querySelectorAll(".dot");
showSlide(slideIndex);
setInterval(function () {
    plusSlide(1);
}, 15000);
