const sound = {
    click: new Audio('./assets/sound/click.wav'),
    win: new Audio('./assets/sound/click.wav'),
    lose: new Audio('./assets/sound/click.wav'),
};

export const playSound = (name) => {
    if (sound[name]) {
        sound[name].currentTime = 0;
        sound[name].volume = 1.0;
        sound[name].play();
    }
};
