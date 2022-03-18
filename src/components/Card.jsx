import { useDrag } from 'react-dnd'

const Card = ({ value, suit }) => {

  const [{ isDragging }, dragRef] = useDrag({
    type: 'card',
    item: {
      value: value,
      suit: suit,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  return (
    <div 
      ref={dragRef}
      className="bg-white border-2 border-slate-100 w-40 h-56 m-4 flex justify-center items-center"
    >
      {value} {suit}
    </div>
  )
}

export default Card
