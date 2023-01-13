import React, { useContext } from 'react'
import CartContext from '../context/cart/CartContext'

// why item is recieving without curly parentesis=? no idea. 

 const ProductBox = ({item}) => {
  const {imgurl, name, brand} = item
  const context = useContext(CartContext)
 
  return (
    <div className='product-row'>
    <img src={imgurl} />
    <p className='name'>{name}</p>
    <p>{brand}</p>
    <button>Eliminar</button>
    
    </div>
  )
}

export default ProductBox