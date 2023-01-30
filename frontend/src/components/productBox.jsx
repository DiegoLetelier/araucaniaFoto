import './comp.css'
import React, { Fragment, useContext } from 'react'
import CartContext from '../context/cart/CartContext'



 const ProductBox = ({item}) => {
  const {imgurl, name, brand, _id, qty, price} = item
  const context = useContext(CartContext)
  console.log(item)

  
 
  return (
    <Fragment>
    <div className='product-row'>
    <img src={imgurl} />
    <p>Cantidad : {qty}</p>
    <p className='name'>{name}</p>
    <p>Marca: {brand}</p>
    <p>Precio: {price} </p>
    <button onClick={()=>context.delFromCart(_id)}>Eliminar</button>
    </div>
    <div>
    
    </div>
    </Fragment>
  )
}

export default ProductBox