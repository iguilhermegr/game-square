export const startScreenElement = () => document.querySelector('#start-screen') as HTMLDivElement;

export const buttonElement = () => 
    startScreenElement().querySelector('button') as HTMLButtonElement;

export const squareElement = () => document.querySelector('#square') as HTMLDivElement;

export const circleElement = () => document.querySelector('.circle') as HTMLDivElement;