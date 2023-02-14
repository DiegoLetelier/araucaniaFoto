import {Fragment, useContext} from 'react';
import CartContext from '../context/cart/CartContext';
import {useState} from 'react';
import {Link} from 'react-router-dom'
import './comp.css';
 
const Product = ({item}) => {
    const context = useContext(CartContext)
    const dispatch = context.dispatch;

    const [qty, setQty] = useState(1)

    const handleChange = (e) => {
        if(e.target.value > stock) setQty(stock);
        else setQty(e.target.value);
    }

    const {_id,  imgurl, name, stock, price, brand} = item

    return (
       <div>
        <Link to={`/producto/${_id}`}>
        <div className="productCard">
        
        <img src={imgurl} width="350px" alt="" />
        <h3>{name}</h3>
        <p>Marca:{brand}</p>
        <p>Stock:{stock}</p>
        <p>Precio:${price}</p>
        </div>
        </Link>
        <div className='prouctBtn'>
        <button onClick={() => setQty(qty - 1)} disabled={qty <= 1 || stock <= 1}>-1</button>
        <input type="number"
               name="qty"
               id="qty" 
               value={qty}
               onChange={handleChange}
               />
        <button onClick={() => setQty(qty + 1)} disabled={stock<=qty? true: false}>+1</button>
        <button disabled={stock>0? false : true} 
        onClick={()=>dispatch({type:'ADD', payload: {item, qty}})}>
            Agregar al carrito
            </button>
        </div>
        </div>
    )
}

export default Product






// import {Fragment, useContext} from 'react';
// import CartContext from '../context/cart/CartContext';
// import {useState} from 'react';
// import {Link} from 'react-router-dom'
// import './comp.css';
 

// const Product = ({item}) => {
//     const context = useContext(CartContext)
   
//     const dispatch = context.dispatch;

//     const [qty, setQty] = useState(1)
   

//     const {_id,  imgurl, name, stock, price, brand} = item

//     return (
//        <div>
//         <Link to={`/producto/${_id}`}>
//         <div className="productCard">
        
//         <img src={imgurl} width="350px" alt="" />
//         <h3>{name}</h3>
//         <p>Marca:{brand}</p>
//         <p>Stock:{stock}</p>
//         <p>Precio:${price}</p>
//         </div>
//         </Link>
//         {/* Here on the function addtocart I´m sending data, and I have to use arrouw function otherwise it will run on the page load.  */}
//         {/* context.addToCart(_id) */}
//         <div className='prouctBtn'>
//         <input type="number"
//                name="qty"
//                id="qty" 
//                defaultValue={1}
//                onChange={(e)=> setQty(e.target.value)}
//                />
//         <button disabled={stock>0? false : true} 
//         onClick={()=>dispatch({type:'ADD', payload: {item, qty}})}>
//             Agregar al carrito
//             </button>
//         </div>
//         </div>
//     )
// }

// export default Product