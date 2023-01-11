import {useContext} from 'react';
import CartContext from '../context/cart/CartContext';
import {useState} from 'react';
import './comp.css';
 

const Product = ({item}) => {
    const context = useContext(CartContext)
   
    const dispatch = context.dispatch;

    const [qty, setQty] = useState(1)
   

    const { imgurl, name, stock, price, brand} = item

    return (

    
        <div className="productCard">
        
        <img src={imgurl} width="350px" alt="" />
        <h3>{name}</h3>
        <p>Marca:{brand}</p>
        <p>Stock:{stock}</p>
        <p>Precio:${price}</p>
        {/* Here on the function addtocart I´m sending data, and I have to use arrouw function otherwise it will run on the page load.  */}
        {/* context.addToCart(_id) */}
        <input type="number"
               name="qty"
               id="qty" 
               onChange={(e)=> setQty(e.target.value)}
               />
        <button disabled={stock>0? false : true} 
        onClick={()=>dispatch({type:'ADD', payload: {item, qty}})}>
            Agregar al carrito
            </button>
        
        </div>
        
    
    )
}

export default Product