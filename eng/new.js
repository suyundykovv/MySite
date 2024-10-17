const themeToggle = document.getElementById('themeToggle');
const quoteContainer = document.getElementById('quoteContainer');
const newQuoteButton = document.getElementById('newQuoteButton');
const stars = document.querySelectorAll('.star');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('night');
});

newQuoteButton.addEventListener('click', fetchNewQuote);

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');
        stars.forEach(s => s.classList.remove('selected'));
        for (let i = 0; i < rating; i++) {
            stars[i].classList.add('selected');
        }
    });
});

function fetchNewQuote() {
    // Fetch a random quote from an API (e.g., Quotes API)
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').textContent = data.content;
        })
        .catch(error => console.error('Error fetching quote:', error));
}