import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Card from './components/Card'
import Slot from './components/Slot'

import { getShuffledDeck, getEmptyHand } from './helpers'

function App() {

  const [ hand, setHand ] = useState(getEmptyHand())
  const [ deck, setDeck ] = useState(getShuffledDeck())

  const handleDrop = (idx, item, monitor) => {
    setHand((hand) => [...hand.slice(0,idx), item, ...hand.slice(idx+1)])
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col h-screen">
        <h1 className="text-3xl text-center pt-8">
          Poker Evaluator API Tester
        </h1>
        <div className="flex flex-row grow justify-evenly items-center">
          <div className="flex flex-row">
            {hand.map((card, idx) => (
              <Slot key={idx} index={idx} card={card} handleDrop={handleDrop} />
            ))}
          </div>
        </div>
        <div className="relative w-full h-72">
          {deck.map((card, idx) => (
            <Card key={idx} absolute offset={idx*25} value={card.value} suit={card.suit} handleDrop={handleDrop} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
