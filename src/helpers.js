
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

export const getEmptyHand = () => {
  return [ null, null, null, null, null ]
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
