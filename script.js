```js
/* script.js */

/**
 * 1️⃣  A modest list of quotes.
 *    Feel free to add as many as you like – the more, the more variety.
 */
const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. – 
Confucius",
  "Your time is limited, don’t waste it living someone else’s life. – 
Steve Jobs",
  "Success is not final, failure is not fatal: it is the courage to 
continue that counts. – Winston Churchill",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "You miss 100% of the shots you don’t take. – Wayne Gretzky",
  "The future belongs to those who believe in the beauty of their dreams. 
– Eleanor Roosevelt",
  "You are capable of more than you know. – Unknown",
  "What lies behind us and what lies before us are tiny matters compared 
to what lies within us. – Ralph Waldo Emerson",
  // Add more quotes here …
];

/**
 * 2️⃣  Pick a random quote from the array.
 */
function getRandomQuote() {
  const idx = Math.floor(Math.random() * quotes.length);
  return quotes[idx];
}

/**
 * 3️⃣  Render the quote into the page.
 */
function renderQuote() {
  const box = document.getElementById('quote-box');
  box.textContent = getRandomQuote();
}

/**
 * 4️⃣  Hook up the “Another one” button.
 */
document.getElementById('new-quote').addEventListener('click', 
renderQuote);

/**
 * 5️⃣  Show a quote as soon as the page loads.
 */
window.addEventListener('DOMContentLoaded', renderQuote);
```

*Why this works:*  
- The script has a **static array** of quotes.  
- Each time the page loads (or the button is pressed) `Math.random()` 
picks a new index, guaranteeing a **different** quote every refresh.  
- No external API or server is required, so everything stays on GitHub 
Pages for free.

---
