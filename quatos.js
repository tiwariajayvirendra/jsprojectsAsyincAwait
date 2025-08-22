const quoteEl = document.querySelector('#quote');
const authorEl = document.querySelector('#author');
const btn = document.querySelector('#new-quote');

async function getQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    console.log("Author:", data.author);
    console.log("Content:", data.content);

    quoteEl.textContent = data.content;
    authorEl.textContent = `— ${data.author}`;
  } catch (error) {
    quoteEl.textContent = "Oops! Couldn't fetch a quote.";
    authorEl.textContent = "";
    console.error("Error fetching quote:", error);
  }
}

btn.addEventListener('click', getQuote);