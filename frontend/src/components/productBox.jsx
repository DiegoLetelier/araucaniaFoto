import React, { useContext } from 'react'
import CartContext from '../context/cart/CartContext'

// why item is recieving without curly parentesis=? no idea. 

 const ProductBox = ({item}) => {
  const {imgurl, name, brand, _id, qty} = item
  const context = useContext(CartContext)
  console.log(item)
 
  return (
    <div className='product-row'>
    <img src={imgurl} />
    <p>Cantidad : {qty}</p>
    <p className='name'>{name}</p>
    <p>Marca: {brand}</p>
    <button onClick={()=>context.delFromCart(_id)}>Eliminar</button>
    
    </div>
  )
}

export default ProductBox