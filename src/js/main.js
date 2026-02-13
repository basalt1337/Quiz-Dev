import { playSound } from './sound.js';
import { correctQuestion } from './punctuation.js';
import { punctuation } from './punctuation.js';

const currentPoints = document.querySelector('.result-card--value');
const currentQuestions = document.querySelector('.stat-box--value-questions');
currentQuestions.innerHTML = 10;

const currentCorrectQuestions = document.querySelector('.stat-box--value-correct');
currentCorrectQuestions.innerHTML = 8;

const currentWrongQuestions = document.querySelector('.stat-box--value-wrong');
currentWrongQuestions.innerHTML = 2;

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
    goTo('winScreen');
});

const homeBtn = document.querySelector('.result-card__return-btn');
homeBtn.addEventListener('click', () => {
    playSound('click');
    goTo('playScreen');
});

const btnTest = document.querySelector('.btn-test');
btnTest.addEventListener('click', () => {
    currentPoints.innerHTML = punctuation(correctQuestion());
});
