import { useDrag } from 'react-dnd'

const Card = ({ slot, idx, value, suit, absolute, offset }) => {

  const [{ isDragging }, dragRef] = useDrag({
    type: 'card',
    item: {
      value: value,
      suit: suit,
      idx: idx,
      slot: !!slot,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  return (
    <div 
      ref={dragRef}
      style={{position: absolute && 'absolute', top: 10, left: offset, zIndex: offset}}
      className={`rounded-lg bg-white border-2 border-slate-100 w-40 h-56 m-4 p-1`}
    >
      <div className="w-4 flex flex-col justify-start items-center">
        <p>{value}</p>
        <img src={`https://sean.brunnock.com/Images/${suit.toLowerCase().slice(0,suit.length-1)}.svg`} width={15}/>
      </div>
    </div>
  )
}

export default Card
