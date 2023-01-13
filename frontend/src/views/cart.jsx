import React from 'react'
import { useContext } from 'react'
import CartContext from '../context/cart/CartContext'
import ProductBox from '../components/productBox'


const Cart = () => {
    const cartContext = useContext(CartContext)
    console.log(cartContext)

    const {cart, qty} = cartContext.cartState
  return (
    <div>
        <h1>Tus productos en el Carrito  = {qty}</h1>
        <div>
            {cart.map(e=><ProductBox item={e} key={e._id}/>)}
        </div>
    </div>
  )
}

export default Cart 