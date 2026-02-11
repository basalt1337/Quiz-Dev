import { playSound } from './sound.js';

const allScreens = document.querySelectorAll('.screen');

function goTo (idTarget) {
    allScreens.forEach(screen => {
        screen.classList.add('hidden');
    });
    
    const screenTarget = document.getElementById(idTarget);
    screenTarget.classList.remove('hidden');
}

const initialBtn = document.querySelector('.play-screen__btn-play');
initialBtn.addEventListener('click', () => {
    playSound('click');
    goTo('winScreen')
});

const homeBtn = document.querySelector('.result-card__return-btn');
homeBtn.addEventListener('click', () => {
    playSound('click');
    goTo('playScreen')
});
