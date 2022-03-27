import { useDrop } from 'react-dnd'
import Card from './Card'

const Slot = ({index, card, handleDrop}) => {

  const [{isOver}, dropRef] = useDrop({
    accept: 'card',
    drop: (item, monitor) => {
      handleDrop(index, item, monitor)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  })

  return (
    <div ref={dropRef}>
      {(card) ? 
        <Card slot idx={index} value={card.value} suit={card.suit}/> :
        <div className="bg-slate-50 w-40 h-56 m-4 flex justify-center items-center">
          Slot {index}
        </div>
      }
    </div>
  )
}

export default Slot
