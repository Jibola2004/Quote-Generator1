const quoteBtn=document.getElementById('quote-btn');
const content =document.getElementById('quote-info');
const author=document.getElementById('author');


const africanProverbs = [
  {
    content: "If you want to go fast, go alone. If you want to go far, go together.",
    author: "African Proverb"
  },
  {
    content: "A child who is not embraced by the village will burn it down to feel its warmth.",
    author: "African Proverb"
  },
  {
    content: "Wisdom is like a baobab tree; no one individual can embrace it.",
    author: "Ghana (Akan)"
  },
  {
    content: "When there is no enemy within, the enemies outside cannot hurt you.",
    author: "Kenya"
  },
  {
    content: "Rain beats a leopard’s skin but does not wash out the spots.",
    author: "Ghana"
  },
  {
    content: "He who learns, teaches.",
    author: "Ethiopia"
  },
  {
    content: "Not everyone who chased the zebra caught it, but he who caught it chased it.",
    author: "South Africa (Zulu)"
  },
  {
    content: "A single bracelet does not jingle.",
    author: "Congo"
  },
  {
    content: "Even the best cooking pot will not produce food.",
    author: "Ghana"
  },
  {
    content: "No matter how long the night, the day is sure to come.",
    author: "Tanzania"
  },
  {
    content: "A roaring lion kills no game.",
    author: "Nigeria (Igbo)"
  },
  {
    content: "A bird that flies off the Earth and lands on an anthill is still on the ground.",
    author: "Nigeria (Igbo)"
  },
  {
    content: "A spider’s cobweb isn’t only its sleeping spring but also its food trap.",
    author: "Nigeria (Igbo)"
  },
  {
    content: "Do not call a dog with a whip in your hand.",
    author: "Mali"
  },
  {
    content: "However long the river, it will reach the sea.",
    author: "South Africa"
  },
  {
    content: "Sticks in a bundle are unbreakable.",
    author: "Kenya"
  },
  {
    content: "The eye that sees a king is the same eye that sees a corpse.",
    author: "Nigeria (Yoruba)"
  },
  {
    content: "Milk and honey have different colors, but they share the same house peacefully.",
    author: "Somalia"
  },
  {
    content: "You learn how to cut down trees by cutting them down.",
    author: "Bantu Proverb"
  },
  {
    content: "An old drum never forgets a rhythm.",
    author: "Cameroon"
  }
];


quoteBtn.addEventListener('click',changeQuote);

function changeQuote(){
 const index=Math.floor(Math.random()*africanProverbs.length);
 const quote=africanProverbs[index];
 content.textContent=quote.content;
 author.textContent=quote.author;
}


//TODO: ADD A FEATURE TO BE ABLE TO SHARE TO SOCIAL MEDIA
//TODO: INTEGRATE WITH A POMODORO TIMER
//TODO: INTEGRATE WITH A THRID API TO GET THE QUOTES


