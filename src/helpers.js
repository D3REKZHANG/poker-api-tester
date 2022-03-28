
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];

let deck = []

suits.forEach(suit => {
  values.forEach(val => {
    deck.push({
      value: val,
      suit: suit
    });
  })
})

export const getDeck = () => {
  return deck;
}

export const getShuffledDeck = () => {
  shuffle(deck);
  return deck;
}


const compare = (c1, c2) => {
  const suit = {
    'Diamonds': 1, 'Clubs': 2,
    'Hearts': 3, 'Spades': 4,
  };

  if(c1.suit != c2.suit){
    return suit[c1.suit] > suit[c2.suit];
  }

  const cases = { 'J': 11, 'Q': 12, 'K': 13 }
  const v1 = (c1.value in cases) ? cases[c1.value] : Number(c1.value);
  const v2 = (c2.value in cases) ? cases[c2.value] : Number(c2.value);

  return v1 > v2;
}

export const insertSorted = (card, deck) => {
  let i = deck.length/2;

  // TODO  
}

export const getEmptyHand = () => {
  return [ null, null, null, null, null ]
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
