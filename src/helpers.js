
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];

export const getShuffledDeck = () => {
  let deck = []

  values.forEach(val => {
    suits.forEach(suit => {
      deck.push({
        value: val,
        suit: suit
      });
    })
  })

  shuffle(deck);

  return deck;
}

export const getEmptyHand = () => {
  const nothing = {
    value: null,
    suit: null,
  }
  return [ nothing, nothing, nothing, nothing, nothing ]
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
