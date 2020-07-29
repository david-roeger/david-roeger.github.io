//audio
let audioTopLevel = document.getElementById("audioTopLevelInput");
let audioSecondLevel_0 = document.getElementById("audio_secondlevel_0_input");
let audioSecondLevel_1 = document.getElementById("audio_secondlevel_1_input");
//let audio_container =  document.getElementById("audio_container");

let audio = {
  toplevel: false,
  secondlevel_0: false,
  secondlevel_1: false,
};

let audio_file_0;
let audio_file_1;

window.onload = function() {
  var context = new AudioContext();
  // Setup all nodes
  audio_file_0 = new Howl({
    src: ['../media/audio/1.2.mp3'],
    loop: true,
    autoPlay: false
  });
  audio_file_1 = new Howl({
    src: ['../media/audio/1.2_Abstrakt.mp3'],
    loop: true,
    autoPlay: false
  });
}

var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

audioTopLevel.addEventListener("change", function () {
  audioTopLevel = document.getElementById("audioTopLevelInput");
  audioSecondLevel_0 = document.getElementById("audio_secondlevel_0_input");
  audioSecondLevel_1 = document.getElementById("audio_secondlevel_1_input");
  audio_container =  document.getElementById("audio_container");

  const value = event.target.checked ? true : false;
  audio.toplevel = value;
  let secondlevel_0 = document.getElementById("audio_secondlevel_0");
  let secondlevel_1 = document.getElementById("audio_secondlevel_1");

  secondlevel_0.classList.toggle("hide");
  secondlevel_1.classList.toggle("hide");
  audio_container.classList.toggle("hide");

  if (!value) {
    audioSecondLevel_0.checked = false;
    audioSecondLevel_1.checked = false;
    audio_file_0.stop();
    audio_file_1.stop();
    let audio_0 = document.getElementById("audio_0");
    let audio_1 = document.getElementById("audio_1");
    audio_0.classList.add("hide");
    audio_1.classList.add("hide");
    audio.secondlevel_0 = false;
    audio.secondlevel_1 = false;
  }
});

audioSecondLevel_0.addEventListener("change", function () {
  audioSecondLevel_0 = document.getElementById("audio_secondlevel_0_input");
  let audio_0 = document.getElementById("audio_0");
  audio.secondlevel_0 = event.target.checked ? true : false;
  audio_0.classList.toggle("hide");
  if(audio.secondlevel_0){
    audio_file_0.play();
  } else {
    audio_file_0.pause();
  }
});

audioSecondLevel_1.addEventListener("change", function () {
  audioSecondLevel_1 = document.getElementById("audio_secondlevel_0_input");
  let audio_1 = document.getElementById("audio_1");
  audio.secondlevel_1 = event.target.checked ? true : false;
  audio_1.classList.toggle("hide");
  if(audio.secondlevel_1){
    audio_file_1.play();
  } else {
    audio_file_1.pause();
  }
});

//mov
let movTopLevel = document.getElementById("movTopLevelInput");
let movSecondLevel_0 = document.getElementById("mov_secondlevel_0_input");
let movSecondLevel_1 = document.getElementById("mov_secondlevel_1_input");
let mov_container =  document.getElementById("mov_container");

let mov = {
  toplevel: false,
  secondlevel_0: false,
  secondlevel_1: false,
};

videojs.options.autoplay = false;

var mov_file_0 = videojs('video_0', {
  preload: 'auto',
  controls: false,
  muted: true,
  loop: true,
  fill: true
});

var mov_file_1 = videojs('video_1', {
  preload: 'auto',
  controls: false,
  muted: true,
  loop: true,
  fill: true
});


movTopLevel.addEventListener("change", function () {
  movTopLevel = document.getElementById("movTopLevelInput");
  movSecondLevel_0 = document.getElementById("mov_secondlevel_0_input");
  movSecondLevel_1 = document.getElementById("mov_secondlevel_1_input");
  mov_container =  document.getElementById("mov_container");


  const value = event.target.checked ? true : false;
  mov.toplevel = value;

  let secondlevel_0 = document.getElementById("mov_secondlevel_0");
  let secondlevel_1 = document.getElementById("mov_secondlevel_1");

  secondlevel_0.classList.toggle("hide");
  secondlevel_1.classList.toggle("hide");

  if (!value) {
    movSecondLevel_0.checked = false;
    movSecondLevel_1.checked = false;
    let mov_0 = document.getElementById("mov_0");
    let mov_1 = document.getElementById("mov_1");
    mov_0.classList.add("hide");
    mov_1.classList.add("hide");
    mov_0.classList.remove("small");
    mov_1.classList.remove("small");
    mov_container.classList.remove("small");
    mov_container.classList.add("border");

    mov.secondlevel_0 = false;
    mov.secondlevel_1 = false;
  }
});

movSecondLevel_0.addEventListener("change", function () {
  movSecondLevel_0 = document.getElementById("mov_secondlevel_0_input");
  let mov_0 = document.getElementById("mov_0");
  let mov_1 = document.getElementById("mov_1");
  mov_container =  document.getElementById("mov_container");

  mov.secondlevel_0 = event.target.checked ? true : false;
  mov_0.classList.toggle("hide");
  if(mov.secondlevel_0) {
    mov_file_0.play();
  } else {
    mov_file_0.pause();
  }

  console.log(movSecondLevel_0.checked, mov.secondlevel_0);
  if (mov.secondlevel_0 && mov.secondlevel_1) {
    mov_0.classList.add("small");
    mov_1.classList.add("small");
    mov_container.classList.add("small");
  } else {
    mov_0.classList.remove("small");
    mov_1.classList.remove("small");
    mov_container.classList.remove("small");
  }

  if (mov.secondlevel_0 || mov.secondlevel_1) {
    mov_container.classList.remove("border");
  } else {
    mov_container.classList.add("border");
  }
});

movSecondLevel_1.addEventListener("change", function () {
  movSecondLevel_1 = document.getElementById("mov_secondlevel_0_input");
  let mov_1 = document.getElementById("mov_1");
  let mov_0 = document.getElementById("mov_0");
  mov_container =  document.getElementById("mov_container");
  console.log()

  mov.secondlevel_1 = event.target.checked ? true : false;
  mov_1.classList.toggle("hide");

  if(mov.secondlevel_1) {
    mov_file_1.play();
  } else {
    mov_file_1.pause();
  }

  if (mov.secondlevel_0 && mov.secondlevel_1) {
    mov_0.classList.add("small");
    mov_1.classList.add("small");
    mov_container.classList.add("small");
  } else {
    mov_0.classList.remove("small");
    mov_1.classList.remove("small");
    mov_container.classList.remove("small");
  }
  if (mov.secondlevel_0 || mov.secondlevel_1) {
    mov_container.classList.remove("border");
  } else {
    mov_container.classList.add("border");
  }
});

//text
let textTopLevel = document.getElementById("textTopLevelInput");
let textSecondLevel_0 = document.getElementById("text_secondlevel_0_input");
let textSecondLevel_1 = document.getElementById("text_secondlevel_1_input");

let text = {
  toplevel: false,
  secondlevel_0: false,
  secondlevel_1: false,
};

textTopLevel.addEventListener("change", function () {
  textTopLevel = document.getElementById("textTopLevelInput");
  textSecondLevel_0 = document.getElementById("text_secondlevel_0_input");
  textSecondLevel_1 = document.getElementById("text_secondlevel_1_input");

  const value = event.target.checked ? true : false;
  text.toplevel = value;

  let secondlevel_0 = document.getElementById("text_secondlevel_0");
  let secondlevel_1 = document.getElementById("text_secondlevel_1");

  secondlevel_0.classList.toggle("hide");
  secondlevel_1.classList.toggle("hide");

  if (!value) {
    textSecondLevel_0.checked = false;
    textSecondLevel_1.checked = false;
    let text_0 = document.getElementById("text_0");
    let text_1 = document.getElementById("text_1");
    text_0.classList.add("hide");
    text_1.classList.add("hide");
    text.secondlevel_0 = false;
    text.secondlevel_1 = false;
  }
});

textSecondLevel_0.addEventListener("change", function () {
  textSecondLevel_0 = document.getElementById("text_secondlevel_0_input");
  let text_0 = document.getElementById("text_0");
  text.secondlevel_0 = event.target.checked ? true : false;
  text_0.classList.toggle("hide");
});

textSecondLevel_1.addEventListener("change", function () {
  textSecondLevel_1 = document.getElementById("text_secondlevel_0_input");
  let text_1 = document.getElementById("text_1");
  text.secondlevel_1 = event.target.checked ? true : false;
  text_1.classList.toggle("hide");
});
