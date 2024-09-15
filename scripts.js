// scripts.js

// Array of fun dolphin facts
const dolphinFacts = [
    "Dolphins are part of the family of whales that includes orcas and pilot whales.",
    "A dolphin's diet consists mainly of fish, squid, and crustaceans.",
    "Dolphins can communicate with each other by whistling, clicking, and other sounds.",
    "There are over 40 species of dolphins, found worldwide.",
    "Dolphins use echolocation to find food and navigate their surroundings."
];

// Check if the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add a click event listener to the button
    document.querySelector('.reveal-fact').addEventListener('click', function() {
        // Log to check if button is clicked
        console.log("Button clicked!");

        // Generate a random fact
        const randomIndex = Math.floor(Math.random() * dolphinFacts.length);

        // Display the fact in the fact-display paragraph
        document.getElementById('fact-display').textContent = dolphinFacts[randomIndex];

        // Log the selected fact for debugging purposes
        console.log(dolphinFacts[randomIndex]);
    });
});
