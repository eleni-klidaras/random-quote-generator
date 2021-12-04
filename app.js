// Define variables.
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const btn = document.getElementById('btn');

// Add Event listeners
btn.addEventListener('click', getQuote);

// Promise

function getQuote() {
  fetch('http://api.quotable.io/random')
    .then(res => res.json())
    .then(data => {
      quote.innerHTML = data.content;
      author.innerHTML = data.author;
    })
}