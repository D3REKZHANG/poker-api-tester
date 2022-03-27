import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import axios from 'axios';

import Card from './components/Card';
import Slot from './components/Slot';

import { getShuffledDeck, getEmptyHand, getDeck } from './helpers';
import { fetchScore } from './api';

function App() {

  const [ hand, setHand ] = useState(getEmptyHand());
  const [ deck, setDeck ] = useState(getDeck());

  const [ score, setScore ] = useState();

  const handleDrop = (idx, item, monitor) => {
    // if from another slot
    if (item.slot) {
      // copy hand
      let cur = JSON.parse(JSON.stringify(hand));
      // swap
      [cur[idx], cur[item.idx]] = [cur[item.idx], cur[idx]];
      setHand(cur);
    } else {
      // remove from deck
      setDeck((deck) => [...deck.slice(0,item.idx), ...deck.slice(item.idx+1)]);

      if (hand[idx]) {
        // add replaced card back into deck
        setDeck((deck) => [...deck, hand[idx]]);
      }
      // add to hand
      setHand((hand) => [...hand.slice(0,idx), item, ...hand.slice(idx+1)]);
    }
  }

  const handleClick = async () => {
    setScore(await fetchScore(hand));
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col h-screen items-center">
        <h1 className="text-3xl text-center pt-8">
          Poker Evaluator API Tester
        </h1>
        <div className="m-10 flex flex-row justify-evenly items-center">
          <div className="flex flex-row">
            {hand.map((card, idx) => (
              <Slot key={idx} index={idx} card={card} handleDrop={handleDrop} />
            ))}
          </div>
        </div>
        <div className="relative w-full h-72">
          {deck.map((card, idx) => (
            <Card key={idx} idx={idx} absolute offset={idx*25} value={card.value} suit={card.suit} handleDrop={handleDrop} />
          ))}
        </div>
        <div className="border bg-slate-50 w-52 h-24 flex flex-row justify-center items-center">
          <h1 className="text-2xl text-center">
            {score ? score : "N/A"}
          </h1>
        </div>
        <button className="m-2 w-52 border" onClick={()=>handleClick()}>Get Score</button>
      </div>
    </DndProvider>
  );
}

export default App;
