import axios from 'axios';

const convert = (card) => {
  let s = "";

  s += (card.value === "10") ? "T" : card.value;
  
  const suits = {
    "Clubs": 'c',
    "Diamonds": 'd',
    "Spades": 's',
    "Hearts": 'h',
  }

  s += suits[card.suit];

  return s;
}

export const fetchScore = async (cards) => {

  const payload = {
    cards: cards.map(c => convert(c))
  }

  const res = await axios.post("http://127.0.0.1:1323/rank-hand", payload);
  
  console.log(res.data);

  return res.data.score;
}
