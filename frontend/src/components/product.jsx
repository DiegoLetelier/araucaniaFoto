import {useContext} from 'react'
import CartContext from '../context/cart/CartContext'
import './comp.css'
 

const Product = ({item}) => {
    const context = useContext(CartContext)
    const dispatch = context.dispatch;
   

    const { imgurl, name, stock, price, brand} = item

    return (

    
        <div className="productCard">
        
        <img src={imgurl} width="150px" alt="" />
        <h3>{name}</h3>
        <p>{brand}</p>
        <p>{stock}</p>
        <p>{price}</p>
        {/* Here on the function addtocart I´m sending data, and I have to use arrouw function otherwise it will run on the page load.  */}
        {/* context.addToCart(_id) */}
        <button disabled={stock>0? false : true} onClick={()=>dispatch({type:'ADD', payload: item})}>Agregar al carrito</button>
        
        </div>
        
    
    )
}

export default Product