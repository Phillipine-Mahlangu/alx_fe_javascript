// script.js

// Step 3.1: Create an array to store quotes
const quotes = [
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    category: "Motivation",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    category: "Wisdom",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    category: "Inspiration",
  },
];

// Step 3.2: Create a function to show a random quote
function showRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteDisplay.innerHTML = `"${randomQuote.text}" - ${randomQuote.category}`;
}

// Step 3.3: Set up an event listener for the "Show New Quote" button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);
// Step 4.1: Create a function to add a new quote
function addQuote() {
  const newQuoteText = document.getElementById("newQuoteText").value;
  const newQuoteCategory = document.getElementById("newQuoteCategory").value;

  // Check if both fields are filled
  if (newQuoteText && newQuoteCategory) {
    quotes.push({ text: newQuoteText, category: newQuoteCategory });
    document.getElementById("newQuoteText").value = ""; // Clear the input
    document.getElementById("newQuoteCategory").value = ""; // Clear the input
    alert("New quote added successfully!");
  } else {
    alert("Please fill in both fields.");
  }
}

// Step 4.2: Set up an event listener for the "Add Quote" button
document.getElementById("addQuoteButton").addEventListener("click", addQuote);
