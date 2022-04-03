window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound"); //array of sounds
  const pads = document.querySelectorAll(".pads div"); //array of pads
  const visual = document.querySelector(".visual"); //the visual area in html
  const colors = ["#60d394", "#60c2d3", "#d36060", "#c060d3", "#d3d160", "#606bd"];
  
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () { //only when mouse click, bubbles
      sounds[index].currentTime = 0; //enable audio playability for each pad when clicked. starts at 0
      sounds[index].play();
      animateBubble(index); //when clicked, call animation bubble
    });
  });
  
  const animateBubble = index => {
    const bubbles = document.createElement("div");
    visual.appendChild(bubbles);
    bubbles.style.backgroundColor = colors[index]; //bubble is of the pad color that is clicked
    bubbles.style.animation = `jump .5s ease`; //jump .5 seconds
    bubbles.addEventListener("animationend", function () {
      visual.removeChild(this); //when animation ends, obviously remove the bubble
    });
  };
    
});

window.addEventListener("keydown", function(e) { //when keydown
  const pads = document.querySelectorAll(".pads div");
  const sounds = document.querySelectorAll(".sound");
  const visual = document.querySelector(".visual");
  const colors = ["#60d394", "#60c2d3", "#d36060", "#c060d3", "#d3d160", "#606bd"];
  
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) //select for datakey in audio
  //const key = document.querySelector(`div[data-key="${e.keyCode}"]`)//select for datakey
  
  if (!audio) return;
  audio.currentTime = 0; //play audio when keydown
  audio.play();
});

let audioss = document.querySelectorAll("audio"); //enable the volume slider...
let volume = document.querySelector("#volume-control");
volume.addEventListener("change", function(e) { //when changing the slider...
  audioss.forEach((audios, i) => {
    audioss[i].volume = e.currentTarget.value / 100; //each audio pad will change volume by 100
  })
});