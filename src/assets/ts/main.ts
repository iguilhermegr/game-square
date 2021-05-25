const Game = {
    score: 0,
    time: 2,
};

const startScreenElement = document.querySelector(
    '#start-screen'
) as HTMLDivElement;

const buttonElement = startScreenElement.querySelector(
    'button'
) as HTMLButtonElement;

buttonElement.addEventListener('click', () => {
    startScreenElement.style.display = 'none';
});

const squareElement = document.querySelector('#square') as HTMLDivElement;