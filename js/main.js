const main = document.createElement("main");
const container = document.createElement("div");
container.setAttribute("id", "container");
//background
const title1 = document.createElement("h1");
title1.classList.add("title");
title1.setAttribute("id", "title1");
title1.innerHTML = `${"Retro-Counter ".repeat(16)}`;
const title2 = title1.cloneNode(true);
title2.setAttribute("id", "title2");
const title3 = title1.cloneNode(true);
title3.setAttribute("id", "title3");
//counter
const display = document.createElement("div");
display.setAttribute("id", "display");
const buttons = document.createElement("div");
buttons.setAttribute("id", "buttons");
//buttons
const bMinus = document.createElement("button");
bMinus.classList.add("btn");
bMinus.setAttribute("id", "bMinus");
bMinus.innerHTML = "-";
const bPlus = document.createElement("button");
bPlus.classList.add("btn");
bPlus.setAttribute("id", "bPlus");
bPlus.innerHTML = "+";
const reset = document.createElement("button");
reset.classList.add("btn");
reset.setAttribute("id", "reset");
reset.innerHTML = "RESET";
//audio
const mainAudio = new Audio("src/gameboy-pluck.mp3");
const resetAudio = new Audio("src/8bit-ringtone.mp3");
//building the structure
document.body.append(main);
main.append(title1, title2, title3);
main.append(container);
container.append(display, buttons);
buttons.append(bMinus, bPlus, reset);
//adding decors
window.addEventListener("load", () => {
  mainAudio.load();
  resetAudio.load();
  setInterval(() => {
    title1.style.top = "-2.5rem";
    title2.style.top = "0";
    title3.style.top = "-2.5rem";
  }, 1000);
  setTimeout(() => {
    setInterval(() => {
      title1.style.top = "0";
      title2.style.top = "-2.5rem";
      title3.style.top = "0";
    }, 1000);
  }, 500);
});
//setting the counter
let counter = 0;
function setCounter() {
  display.innerHTML = counter;
}
setCounter();

bMinus.addEventListener("click", () => {
  counter -= 1;
  if (counter < 0) {
    display.style.color = "red";
  } else if (counter == 0) {
    display.style.color = "";
  }
  if (!resetAudio.ended) {
    resetAudio.pause();
  } else if (!mainAudio.ended) {
    mainAudio.pause();
    mainAudio.load();
  }
  mainAudio.play();
  setCounter();
});

bPlus.addEventListener("click", () => {
  counter += 1;
  if (counter > 0) {
    display.style.color = "blue";
  } else if (counter == 0) {
    display.style.color = "";
  }
  if (!resetAudio.ended) {
    resetAudio.pause();
  } else if (!mainAudio.ended) {
    mainAudio.pause();
    mainAudio.load();
  }
  mainAudio.play();
  setCounter();
});

reset.addEventListener("click", () => {
  setTimeout(setCounter, 2000);
  counter = 0;
  display.style.color = "";
  display.innerHTML = "-";
  if (resetAudio.paused) {
    resetAudio.load();
  } else if (!resetAudio.ended) {
    resetAudio.pause();
    resetAudio.load();
  }
  resetAudio.play();
});