function createElement(eTag, eParent, eId, eContent, eClass) {
  const element = document.createElement(eTag);
  if (eContent) {
    element.innerHTML = eContent;
  }
  if (eClass) {
    element.classList.add(eClass);
  }
  if (eId) {
    element.setAttribute("id", eId);
  } else {
    element.setAttribute("id", eTag);
  }
  if (eParent === "body") {
    document.body.append(element);
  } else {
    eParent.append(element);
  }
}
const mainAudio = new Audio("assets/audio/gameboy-pluck.mp3");
const resetAudio = new Audio("assets/audio/8bit-ringtone.mp3");
const introAudio = new Audio("assets/audio/gameboy-startup-sound.mp3");
const background = `${"Retro-Counter ".repeat(18)}`;
introAudio.load();
mainAudio.load();
resetAudio.load();
introAudio.play();
//STRUCTURE BUILT
//(eTag, eParent, eId, eContent, eClass)
createElement("main", "body");
createElement("div", main, "container");
createElement("h1", main, "title1", background, "title");
createElement("h1", main, "title2", background, "title");
createElement("h1", main, "title3", background, "title");
createElement("div", container, "display");
createElement("div", container, "buttons");
createElement("button", buttons, "btnMinus", "-", "btn");
createElement("button", buttons, "btnPlus", "+", "btn");
createElement("button", buttons, "reset", "RESET", "btn");
//DECORATIONS
//btnPlus Animation
function bubble() {
  createElement("h1", btnPlus, "symbolPlus", "+");
  setTimeout(() => {
    symbolPlus.style.fontSize = "4rem";
    symbolPlus.style.top = "-200%";
    symbolPlus.style.color = "transparent";
  }, 50);
  setTimeout(() => {
    symbolPlus.remove();
  }, 100);
}
//btnMinus Animation
function drop() {
  createElement("h1", btnMinus, "symbolMinus", "-");
  setTimeout(() => {
    symbolMinus.style.top = "4rem";
    symbolMinus.style.top = "200%";
    symbolMinus.style.color = "transparent";
  }, 50);
  setTimeout(() => {
    symbolMinus.remove();
  }, 100);
}
//Display Animation
function setDisplay() {
  const dashes = ["-", "-"];
  let loading = dashes[0];
  display.innerHTML = loading;
  setTimeout(() => {
    loading = dashes[0] + dashes[1];
    display.innerHTML = loading;
  }, 500);
}
//Background Animation
window.addEventListener("load", () => {
  setTimeout(setCounter, 1500);
  setDisplay();
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
//COUNTER
//Setting the counter
let counter = 0;
function setCounter() {
  display.innerHTML = counter;
}
setCounter();
//Button functions
//-------
function bMinus() {
  counter -= 1;
  drop();
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
}
//++++++++
function bPlus() {
  counter += 1;
  bubble();
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
}
//RESET
let timer;
function reset() {
  clearTimeout(timer);
  timer = setTimeout(setCounter, 2000);
  counter = 0;
  display.style.color = "";
  setDisplay();
  if (resetAudio.paused) {
    resetAudio.load();
  } else if (!resetAudio.ended) {
    resetAudio.pause();
    resetAudio.load();
  }
  resetAudio.play();
}
//EVENT LISTENER
buttons.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) {
    return;
  }
  switch (btn.id) {
    case "btnMinus":
      bMinus();
      break;
    case "btnPlus":
      bPlus();
      break;
    case "reset":
      reset();
      break;
    default:
      return;
  }
});
