import { useContext } from "react";
import CartContext from "../context/cart/CartContext";


const TotalPrice = ({qty, price}) => {
    const context = useContext(CartContext)
    
   const cart = context.cartState.cart
    
    let total = 0;
    cart.forEach(e => {
        total += e.price * e.qty
    })

    return (
        <div>
            <h2>Total de tu compra: </h2>
           
            <div className='total'>
                <h3>Total: ${total}</h3>
            </div>
        </div>
    )
}

export default TotalPrice