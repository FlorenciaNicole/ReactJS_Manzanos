
import React from "react";
import FlexWrapper from "./FlexWrapper";
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom"
import { useContext } from "react";
import { cartCtx } from "./CartContext";

function ItemDetail({ item }) {
  const { addItem } = useContext(cartCtx);


  function handleAddToCart(count) {
    addItem(item, count);
  }

  return (
    <FlexWrapper rows={true}>
      <div className="mainContainer">
      <h1>{item.title}</h1>
        <img src={item.img} alt={item.title} />
        <h3>$ {item.price}</h3>
      </div>

      <ItemCount stock={5} onAddToCart={handleAddToCart} />
    </FlexWrapper>
  );
}

export default ItemDetail;


