const main = document.createElement('main');
const container = document.createElement('div');
container.setAttribute('id','container')
const title1 = document.createElement('h1');
title1.setAttribute('class', 'title');
title1.setAttribute('id', 'title1');
title1.innerHTML = 'Retro-Counter Retro-Counter Retro-Counter Retro-Counter Retro-Counter Retro-Counter Retro-Counter Retro-Counter Retro-Counter Retro-Counter Retro-Counter Retro-Counter Retro-Counter Retro-Counter Retro-Counter Retro-Counter';
const title2 = title1.cloneNode(true);
title2.setAttribute('id', 'title2');
const title3 = title1.cloneNode(true);
title3.setAttribute('id', 'title3');
const display = document.createElement('div');
display.setAttribute('id','display')
const buttons = document.createElement('div');
buttons.setAttribute('id','buttons')
const bMinus = document.createElement('button');
bMinus.setAttribute('class','btn')
bMinus.setAttribute('id','bMinus')
bMinus.innerHTML = '-'
const bPlus = document.createElement('button');
bPlus.setAttribute('class','btn')
bPlus.setAttribute('id','bPlus')
bPlus.innerHTML = '+'
const reset = document.createElement('button');
reset.setAttribute('class','btn');
reset.setAttribute('id','reset');
reset.innerHTML = 'RESET';
const mainAudio = new Audio ('src/gameboy-pluck.mp3');
const resetAudio = new Audio ('src/8bit-ringtone.mp3');
const resetTime = ()=> display.innerHTML = counter;

document.body.append(main);
main.append(title1, title2, title3);
main.append(container);
container.append(display, buttons);
buttons.append(bMinus, bPlus, reset);

let counter = 0;
display.innerHTML = counter;

bMinus.addEventListener('click', () => {
  counter -= 1;
  if(counter<0){
    display.style.color = 'red'
  }else if(counter==0){
    display.style.color = ''
  }
  if(!resetAudio.ended){
    resetAudio.pause()
  }else if (!mainAudio.ended){
    mainAudio.pause();
    mainAudio.load();
  }
  mainAudio.play();
  display.innerHTML = counter;
});

bPlus.addEventListener('click', () => {
  counter += 1;
  if(counter>0){
    display.style.color = 'blue'
  }else if(counter==0){
    display.style.color = ''
  }
  if(!resetAudio.ended){
    resetAudio.pause()
  }else if (!mainAudio.ended){
    mainAudio.pause();
    mainAudio.load();
  }
  mainAudio.play();
  display.innerHTML = counter;
})

reset.addEventListener('click', () => {
  setTimeout(resetTime, 2000);
  if(resetAudio.paused){
    resetAudio.load();
  }else if(!resetAudio.ended){
    resetAudio.pause();
    resetAudio.load();
  }
  resetAudio.play();
  counter = 0;
  display.style.color = ''
  display.innerHTML = '-';
})

setInterval(()=>{
  title1.style.top = '-2.5rem';
  title2.style.top = '0';
  title3.style.top = '-2.5rem';
},1000)
setTimeout(()=>{
  setInterval(()=>{
    title1.style.top = '0';
    title2.style.top = '-2.5rem';
    title3.style.top = '0';
  },1000)
},500)