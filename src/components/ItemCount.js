import { useState } from "react";
import  "./ItemCountStyle.css"

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }
  return (
    <div className='counter'>
        <button disable={count <= 1} onClick={decrease}>-</button>
        <span>{count}</span>
        <button disable={count >= stock} onclick={increase}>+</button>
        <div>
            <button>Agregar al carrito</button>
        </div>

    </div>
  );
}

export default ItemCount;