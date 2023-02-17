
import './comp.css' 
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

// I will make this comment to see it its change something

const ProductOne = () => {
    const [product, setProduct] = useState({})
    const {id } = useParams()
    console.log(id)

    const getProduct = async () => {
        const res = await axios.get(`https://araucaniafotovoltaicaapp.onrender.com/api/producto/${id}`)
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
    <h3> Producto: &emsp; {name}</h3>
    <p>Marca: &nbsp; {brand}</p>
    <p>Características: &nbsp; {model}</p>
    <p>Precio: &nbsp; {price}</p>
    </div>

  )
}

export default ProductOne