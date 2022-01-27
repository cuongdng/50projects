const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const quotesBtn = document.getElementById('quotesBtn');

quotesBtn.addEventListener('click', generateQuote);

generateQuote();

async function generateQuote() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };
    const res = await fetch('https://api.quotable.io/random', config);
    const data = await res.json();

    quotes.innerHTML = data.content;
    author.innerHTML = `- ${data.author} -`;
}
