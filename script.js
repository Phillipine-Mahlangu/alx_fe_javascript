// Initialize quotes array
let quotes = [
  {
    text: "Life is what happens when you're busy making other plans.",
    category: "Life",
  },
  { text: "The purpose of our lives is to be happy.", category: "Life" },
];

// Function to load quotes from local storage
function loadQuotes() {
  const storedQuotes = localStorage.getItem("quotes");
  if (storedQuotes) {
    quotes = JSON.parse(storedQuotes);
  }
}

// Function to save quotes to local storage
function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Show a random quote on page load
window.onload = function () {
  loadQuotes();
  showRandomQuote();
};

// Function to show a random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById("quoteDisplay").innerText = quote.text;

  // Store the last viewed quote in session storage
  sessionStorage.setItem("lastQuote", quote.text);
}

// Function to add a new quote
function addQuote() {
  const newQuoteText = document.getElementById("newQuoteText").value;
  const newQuoteCategory = document.getElementById("newQuoteCategory").value;
  if (newQuoteText && newQuoteCategory) {
    quotes.push({ text: newQuoteText, category: newQuoteCategory });
    saveQuotes(); // Save updated quotes to local storage
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
  }
}

// Function to export quotes to a JSON file
document.getElementById("exportQuotes").onclick = function () {
  const json = JSON.stringify(quotes, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "quotes.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

// Function to import quotes from a JSON file
function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function (event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes(); // Save updated quotes to local storage
    alert("Quotes imported successfully!");
  };
  fileReader.readAsText(event.target.files[0]);
}
function showRandomQuote() {
  // Check if there are any quotes in the array
  if (quotes.length > 0) {
    // Get a random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    // Get the quote at that random index
    const randomQuote = quotes[randomIndex];
    // Display the quote in the quoteDisplay div
    document.getElementById(
      "quoteDisplay"
    ).innerText = `"${randomQuote.text}" - ${randomQuote.category}`;
  } else {
    // Display a message if there are no quotes
    document.getElementById("quoteDisplay").innerText =
      "No quotes available. Please add some!";
  }
}
