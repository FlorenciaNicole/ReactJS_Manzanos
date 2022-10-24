import { useContext } from "react";
import { cartCtx } from "./CartContext";
import Button from "./Button";
import "./CartView.css";
import CheckoutForm from "./CheckoutForm";
import {createBuyOrder} from "../Service/firestore"

function CartView() {
  const context = useContext(cartCtx);
  const { cart, clearCart, removeFromCart, getTotalPriceInCart } = context;

  let carritovacio = cart.length === 0;

  if (carritovacio) {
    return <div>Tu carrito está vacio...</div>;
  }

  function handleCheckout() {
  const orderData = {
    buyer: {
      name: 'Florencia',
      phone: '1122334455',
      email: 'manzanos@hotmail.com'
    },
    items: cart,
    total: getTotalPriceInCart(),
  };
  createBuyOrder(orderData);
}

  return (
    <>
      <h1 className='carritoTitle'>Carrito de compras</h1>
      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Imagen</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>ELiminar</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id} className="cartList_row">
                <td>
                  <img height={50} src={item.img} alt={item.title} />
                </td>
                <td>{item.title}</td>
                <td>$ {item.price}</td>
                <td>{item.count}</td>
                <td>
                  <Button onClick={item.removeItem}>ELIMINAR</Button>
                </td>
                <th>$ {item.price * item.count}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h3>El total de tu compra es de $ {getTotalPriceInCart()}</h3>
      <CheckoutForm />
    </>
  );
}

export default CartView;