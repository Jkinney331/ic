// JavaScript code for Infinite Craft game with word combination logic
const elements = [
    { name: 'Water', id: 1, language: 'English' },
    { name: 'Fire', id: 2, language: 'English' },
    { name: 'Earth', id: 3, language: 'English' },
    { name: 'Wind', id: 4, language: 'English' },
    { name: 'Agua', id: 5, language: 'Spanish' },
    { name: 'Fuego', id: 6, language: 'Spanish' },
    { name: 'Tierra', id: 7, language: 'Spanish' },
    { name: '水', id: 8, language: 'Mandarin' },
    { name: '火', id: 9, language: 'Mandarin' },
    { name: '土', id: 10, language: 'Mandarin' }
];

const rarityBindingCurve = {
    'English': 1,
    'Spanish': 0.8,
    'Mandarin': 0.6,
    'Arabic': 0.4,
    // Add more languages and their rarity values
};

const elementContainer = document.getElementById('elements');

elements.forEach(element => {
    const div = document.createElement('div');
    div.classList.add('element');
    div.textContent = element.name;
    div.dataset.id = element.id;
    div.dataset.language = element.language;
    elementContainer.appendChild(div);
});

// Function to handle word combination logic
function combineElements(element1, element2) {
    // Logic to determine the resulting word based on the combination
    // Implement rarity and language-based logic
    const rarity1 = rarityBindingCurve[element1.language];
    const rarity2 = rarityBindingCurve[element2.language];
    const combinedRarity = (rarity1 + rarity2) / 2;
    
    // Example logic to create a new word based on rarity
    let newWord = '';
    if (combinedRarity > 0.7) {
        newWord = 'RareWord';
    } else if (combinedRarity > 0.5) {
        newWord = 'UncommonWord';
    } else {
        newWord = 'CommonWord';
    }

    return newWord;
}

// Example usage of combineElements function
const element1 = elements[0]; // Water
const element2 = elements[1]; // Fire
const result = combineElements(element1, element2);
console.log('Result of combining', element1.name, 'and', element2.name, ':', result);
