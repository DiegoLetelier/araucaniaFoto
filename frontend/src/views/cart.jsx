import './views.css'
import React from 'react'
import { useContext } from 'react'
import CartContext from '../context/cart/CartContext'
import ProductBox from '../components/productBox'
import TotalPrice from '../components/totalPrice'
import { PayPalButtons } from '@paypal/react-paypal-js'


const Cart = () => {
    const cartContext = useContext(CartContext)
    console.log(cartContext)

    const {cart, qty} = cartContext.cartState
  return (
        <div className='cartBox'>
          <div className='cartBoxh1'><h1 >Tus productos en el Carrito  = {qty}</h1></div>
         <div className='productsCartBox'>
        <div>
            {cart.map(e=><ProductBox item={e} key={e._id}/>)}
        </div>
    </div>
        <div className='cartSpaces'><TotalPrice /></div>
        <div> <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "1.99",
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                    });
                }}
            /> 
        </div>
    </div>
  )
}

export default Cart 