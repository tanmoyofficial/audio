
var audio = new Audio();

audio.controls= true;
audio.src = "./assets/audio/yes, and_.mp3";
console.log(audio);

document.querySelector(".audio").appendChild(audio);


