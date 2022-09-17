const body = document.querySelector("body");
const car = document.querySelector(".car");
const ground = document.querySelector(".ground");
const carImg = document.querySelector(".car-img");
let flag = true;

body.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    if (!ground.classList.contains("right")) {
      ground.classList.add("right");
      car.classList.add("bump");
    } else {
      ground.classList.remove("right");
      car.classList.remove("bump");
    }
  }
});

body.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (flag) {
      carImg.setAttribute("src", "./img/Img_05.png");
      flag = false;
    } else {
      carImg.setAttribute("src", "./img/Img_06.png");
      flag = true;
    }
  }
});
