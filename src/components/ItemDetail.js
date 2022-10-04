
import React from "react";
import FlexWrapper from "./FlexWrapper";
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom"

function ItemDetail({ course }) {
  let estadoCart = false;

  //Aparece el boton Finalizar compra
  //let estadoCart = true;


  function handleAddToCart(count) {
    alert(`Agregaste al carrito! ${count}`);
  }

  return (
    <FlexWrapper rows={true}>
      <div className="mainContainer">
        <h1>{course.title}</h1>
        <img src={course.img} alt={course.title} />
        <h3>$ {course.price}</h3>
      </div>

      {estadoCart === false? (
        <ItemCount stock={5} onAddToCart={handleAddToCart} />
      ) : (
        <Link to="/Cart">
        <button>Finalizar Compra</button>
        </Link>
      )}
    </FlexWrapper>
  );
}

export default ItemDetail;


