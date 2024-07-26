const viewBtn = document.querySelector('#viewBtn');
const comments = document.querySelector('.comments');
const i = document.querySelector('i');

viewBtn.addEventListener ('click', () => {
    comments.classList.toggle('hidden');
    i.classList.toggle('rotate-180');
})
