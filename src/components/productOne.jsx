

import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductOne = () => {
    const [product, setProduct] = useState({})
    const {id } = useParams()
    console.log(id)

    const getProduct = async () => {
        
        const res = await axios.get(`http://localhost:4000/api/producto/${id}`)
        setProduct(res.data.product)
        console.log(res)
    }

    
    
    useEffect(() => {
      
      getProduct()
      
    }, [])
    
    const {imgurl, name, brand, model, price} = product
      

  return (
    <div className='productBigBox'>

    <img src={imgurl} />
    <p>{name}</p>
    <p>{brand}</p>
    <p>{model}</p>
    <p>{price}</p>
    </div>

  )
}

export default ProductOne