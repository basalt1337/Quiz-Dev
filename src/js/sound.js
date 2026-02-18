const sound = {
  click: new Audio("./assets/sound/click.wav"),
  correct: new Audio("./assets/sound/right_answer.wav"),
  wrong: new Audio("./assets/sound/wrong_answer.wav"),
  finished: new Audio("./assets/sound/finished.wav"),
  finished_alt: new Audio("./assets/sound/finishing_alt.ogg"),
  background: new Audio("./assets/sound/background.wav"),
};

export const playBackground = () => {
  if (sound["background"]) {
    sound["background"].currentTime = 0;
    sound["background"].volume = 0.2;
    sound["background"].loop = true;
    sound["background"].play();
  }
};

export const playSound = (name) => {
  if (sound[name]) {
    sound[name].currentTime = 0;
    sound[name].volume = 1.0;
    sound[name].play();
  }
};
