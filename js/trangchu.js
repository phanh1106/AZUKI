const listImage = document.querySelector(".list-image");
const imgs = document.getElementsByClassName("imgslide");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

const length = imgs.length;
let current = 0;
const ChangeSlide = () => {
  if (current == length - 1) {
    current = 0;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(0px)`;
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".index-item-" + current).classList.add("active");
  } else {
    current++;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width * -1 * current}px)`;
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".index-item-" + current).classList.add("active");
  }
};
let handleEventChangeSilde = setInterval(ChangeSlide, 10000);

btnRight.addEventListener("click", () => {
  clearInterval(handleEventChangeSilde);
  ChangeSlide();
  handleEventChangeSilde = setInterval(ChangeSlide, 10000);
});
btnLeft.addEventListener("click", () => {
  clearInterval(handleEventChangeSilde);
  if (current == 0) {
    current = length - 1;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width * -1 * current}px)`;
  } else {
    current--;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width * -1 * current}px)`;
  }
  handleEventChangeSilde = setInterval(ChangeSlide, 10000);
});

document.getElementById("bogach").addEventListener("click", function (event) {
  event.preventDefault();
});

document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Cuộn xuống
      header.classList.add("hidden");
    } else {
      // Cuộn lên
      header.classList.remove("hidden");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const verticalMenu = document.getElementById("verticalMenu");
  const menuOverlay = document.getElementById("menuOverlay");

  hamburgerBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Ngăn chặn sự kiện click lan rộng đến tài liệu
    if (verticalMenu.style.display === "block") {
      verticalMenu.style.display = "none";
      menuOverlay.style.display = "none";
    } else {
      verticalMenu.style.display = "block";
      menuOverlay.style.display = "block";
    }
  });

  // Ẩn menu và overlay khi nhấp vào bất kỳ khu vực nào khác ngoài menu và nút hamburger
  document.addEventListener("click", function (event) {
    if (
      !verticalMenu.contains(event.target) &&
      !hamburgerBtn.contains(event.target)
    ) {
      verticalMenu.style.display = "none";
      menuOverlay.style.display = "none";
    }
  });

  // Đảm bảo menu và overlay ẩn khi nhấp vào overlay
  menuOverlay.addEventListener("click", function () {
    verticalMenu.style.display = "none";
    menuOverlay.style.display = "none";
  });
});
