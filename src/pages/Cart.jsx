import React from 'react'
import { useContext } from "react";
import Authcontext from '../context/Authcontext';
const Cart = () => {

    const { cart } = useContext(Authcontext);
  return (
      <div>
      <h1>Cart Items</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <img src={item.image} width="100" />
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Cart
