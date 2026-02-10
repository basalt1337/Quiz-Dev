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
    goTo('winScreen')
});
