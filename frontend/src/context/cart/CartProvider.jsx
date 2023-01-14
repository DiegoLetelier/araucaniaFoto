import CartContext from './CartContext'
import { useReducer } from 'react'
import CartReducer from './CartReducer'




const CartProvider = ({children}) => {

    const [cartState, dispatch] = useReducer(CartReducer, {cart: [], qty: 0})
    // const addToCart = (id) => {
    //     console.log(id)
    //     dispatch({type: 'ADD', payload: id})
    // }

    const delFromCart = (id) => {
        dispatch({type: 'DELETE', payload: id})
    }
    const cartInfo = {cartState, delFromCart, dispatch}
    return  <CartContext.Provider value={cartInfo}>
        {children}
    </CartContext.Provider>       
    
}

export default CartProvider