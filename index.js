let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
};

document.querySelectorAll(".image-slider img").forEach((images) => {
  images.onclick = () => {
    let src = images.getAttribute("src");
    document.querySelector(".main-home-img").src = src;
  };
});
