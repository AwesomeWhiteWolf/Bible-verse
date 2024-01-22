
const quotes = [
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "Step left, step right - two steps",
    author: "Jason Statham"
  },  
  {
    quote: "Here is a time for everything, and a season for every activity under the heavens:",
    author: "Ecclesiastes"
  },
  {
    quote: "Meaningless! Meaningless! Utterly meaningless! Everything is meaningless.",
    author: "Ecclesiastes"
  },
  {
    quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "All things are lawful, but not all things are profitable. All things are lawful, but not all things edify.",
    author: "Paul"
  }
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayQuote() {
  const quoteContainer = document.getElementById("insert");
  const randomQuote = getRandomQuote();
  document.getElementById("insert").innerHTML = randomQuote.quote;
  document.getElementById("author").innerHTML = "-" + randomQuote.author;
}

window.onload = function() {
  displayQuote();
};

window.onload=function(){
  const generateQuoteBtn = document.getElementById("change-quote");
  generateQuoteBtn.addEventListener("click", displayQuote);
}