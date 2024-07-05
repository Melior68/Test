const yesBtn = document.getElementById('sim');
const noBtn = document.getElementById('nao');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const buttonsContainer = document.querySelector('.buttons-container');

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'Eu também te amo! 😘';
    gif.src = 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3d3dHlhd3ZuYzc0aWlhMGQ5MGQxN2Q5bmpjODZiNHhpMnFsa2twYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9G0AdBbVrkV3O/giphy.webp';

    // Esconde os botões
    buttonsContainer.style.display = 'none';
});

noBtn.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});
