const quoteBtn = document.getElementById('quote-btn');
const content = document.getElementById('quote-info');
const author = document.getElementById('author');
const facebook=document.getElementById('facebook');
const twitter = document.getElementById('twitter');
const instagram = document.getElementById('instagram');
let quotes = [];

quoteBtn.addEventListener('click', changeQuote);

async function changeQuote() {
  // Load quotes if not loaded yet
  if (quotes.length === 0) {
    quotes = await getQuotes();
  }

  // Pick random quote
  const index = Math.floor(Math.random() * quotes.length);
  const quote = quotes[index];

  //console.log(quote);

  content.textContent = quote.content;
  author.textContent = quote.author;
}

async function getQuotes() {
  try {
    const response = await fetch("https://jibola2004.github.io/Proverb-quote/AfricaQuotes.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
   // console.log("Fetched JSON:", data);

    return data;
  } catch (err) {
    console.error("Fetch error:", err.message);
    return []; // safe fallback
  }
}

twitter.addEventListener('click',tweetQuote);
facebook.addEventListener('click',facebookShare);
instagram.addEventListener('click',instagramShare);

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${content.textContent} - ${author.textContent}`;
  window.open(twitterUrl, "_blank");
}

function facebookShare() {
  const quote = `${content.textContent} - ${author.textContent}`;

  navigator.clipboard.writeText(quote)
    .then(() => {
      alert("Quote copied! Open Facebook and paste it into your post.");
      window.open("https://facebook.com", "_blank");
    })
    .catch(err => {
      console.error("Failed to copy:", err);
    });
}



function instagramShare() {
  const quote = `${content.textContent} - ${author.textContent}`;
  
  navigator.clipboard.writeText(quote)
    .then(() => {
      alert("Quote copied! Open Instagram and paste it into your Story or Post.");
      window.open("https://instagram.com", "_blank");
    })
    .catch(err => console.log("Copy failed", err));
}






// TODO: ADD A FEATURE TO BE ABLE TO SHARE TO SOCIAL MEDIA
// TODO: INTEGRATE WITH A POMODORO TIMER
// TODO: INTEGRATE WITH A THIRD API TO GET THE QUOTES
// TODO: CHANGE THE JS FILE TO A TYPESCRIPT FILE
