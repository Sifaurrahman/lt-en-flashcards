// Array of vocabulary pairs: English → Lithuanian
const flashcards = [
    { en: "Hello", lt: "Labas" },
    { en: "Apple", lt: "Obuolys" },             // A
    { en: "Bread", lt: "Duona" },               // B
    { en: "Coffee", lt: "Kava" },               // C
    { en: "Dog", lt: "Šuo" },                   // D
    { en: "Egg", lt: "Kiaušinis" },             // E
    { en: "Friend", lt: "Draugas" },            // F
    { en: "Good morning", lt: "Labas rytas" },  // G
    { en: "Homework", lt: "Namų darbai" },      // H
    { en: "Ice", lt: "Ledas" },                 // I
    { en: "Juice", lt: "Sultys" },              // J
    { en: "Key", lt: "Raktas" },                // K
    { en: "Love", lt: "Meilė" },                // L
    { en: "Market", lt: "Parduotuvė" },         // M
    { en: "Name", lt: "Vardas" },               // N
    { en: "Orange", lt: "Apelsinas" },          // O
    { en: "Phone", lt: "Telefonas" },           // P
    { en: "Queen", lt: "Karalienė" },           // Q
    { en: "Room", lt: "Kambarys" },             // R
    { en: "Sun", lt: "Saulė" },                 // S
    { en: "Ticket", lt: "Bilietas" },           // T
    { en: "University", lt: "Universitetas" },  // U
    { en: "Vegetables", lt: "Daržovės" },       // V
    { en: "Water", lt: "Vanduo" },              // W
    { en: "X-ray", lt: "Rentgenas" },           // X
    { en: "Yellow", lt: "Geltona" },            // Y
    { en: "Zoo", lt: "Zoologijos sodas" }       // Z
];

let currentIndex = 0;

// DOM elements
const cardInner = document.getElementById("card-inner");
const frontText = document.getElementById("front-text");
const backText = document.getElementById("back-text");
const counter = document.getElementById("counter");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const flipBtn = document.getElementById("flip-btn");
const randomBtn = document.getElementById("random-btn");

// Update card content based on currentIndex
function updateCard() {
    const current = flashcards[currentIndex];
    frontText.textContent = current.en;
    backText.textContent = current.lt;
    counter.textContent = `Card ${currentIndex + 1} / ${flashcards.length}`;

    // Always reset to English side when changing card
    cardInner.classList.remove("is-flipped");
}

// Event listeners
flipBtn.addEventListener("click", () => {
    cardInner.classList.toggle("is-flipped");
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % flashcards.length;
    updateCard();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    updateCard();
});

randomBtn.addEventListener("click", () => {
    let newIndex = currentIndex;
    while (newIndex === currentIndex && flashcards.length > 1) {
        newIndex = Math.floor(Math.random() * flashcards.length);
    }
    currentIndex = newIndex;
    updateCard();
});

// Initialize first card
updateCard();
