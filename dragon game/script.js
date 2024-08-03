count = 0;
crash = true;
var randomInt = getRandomInt(1, 5);
document.onkeydown = function (e) {
  console.log("key press ", e.keyCode);
  frog = document.querySelector(".frog");
  if (e.keyCode === 38) {
    frog.classList.add("animateFrog");
    setTimeout(() => {
      frog.classList.remove("animateFrog");
    }, 650);
  }
  if (e.keyCode === 39) {
    frogX = parseInt(
      window.getComputedStyle(frog, null).getPropertyValue("left")
    );
    frog.style.left = frogX + 130 + "px";
  }
  if (e.keyCode === 37) {
    frogX = parseInt(
      window.getComputedStyle(frog, null).getPropertyValue("left")
    );
    frog.style.left = frogX - 130 + "px";
  }
};

setInterval(() => {
  frog = document.querySelector(".frog");
  dragonLand = document.querySelector(".dragonLand");
  gameover = document.querySelector(".gameover");
  obs = document.querySelector(".obsticle");

  fx = parseInt(window.getComputedStyle(frog, null).getPropertyValue("left"));
  fy = parseInt(window.getComputedStyle(frog, null).getPropertyValue("top"));

  dx = parseInt(
    window.getComputedStyle(dragonLand, null).getPropertyValue("left")
  );
  dy = parseInt(
    window.getComputedStyle(dragonLand, null).getPropertyValue("top")
  );

  x = Math.abs(fx - dx);
  y = Math.abs(dy - fy);
  if (x < 93 && y < 52) {
    dragonLand.classList.remove("animationDragonLand");
    gameover.style.visibility = "visible";
  } else if (crash && x < 130) {
    count = count + 1;
    console.log(count);
    crash = false;
    setTimeout(() => {
      crash = true;
    }, 1000);
    ani = parseFloat(
      window
        .getComputedStyle(dragonLand, null)
        .getPropertyValue("animation-duration")
    );
    setTimeout(() => {
      newAni = ani - 0.11;
      dragonLand.style.animationDuration = newAni + "s";
      console.log((dragonLand.style.animationDuration = newAni + "s"));
    }, 900);
  }
  value = document.querySelector(".point");
  value.innerHTML = "score : " + count;

  if (count % randomInt === 0) {
    obs.classList.add("obsAni");
  } else {
    obs.classList.remove("obsAni");
  }
}, 100);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
