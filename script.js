const btn = document.getElementById('btn');
const title = document.getElementById('title');
btn.addEventListener('click', () => {
    title.textContent = 'Текст изменен через JS!';
    title.style.color = 'red';
});