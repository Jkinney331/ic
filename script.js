// JavaScript code for Infinite Craft game
const elements = [
    { name: 'Water', id: 1 },
    { name: 'Fire', id: 2 },
    { name: 'Earth', id: 3 },
    { name: 'Wind', id: 4 }
];

const elementContainer = document.getElementById('elements');

elements.forEach(element => {
    const div = document.createElement('div');
    div.classList.add('element');
    div.textContent = element.name;
    div.dataset.id = element.id;
    elementContainer.appendChild(div);
});
