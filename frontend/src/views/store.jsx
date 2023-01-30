import './views.css'
import { useContext, useEffect, useState } from "react";
import userContext from '../context/UserContext'
import Product from '../components/product'
import axios from 'axios'

const Store = () => {

const context = useContext(userContext)
console.log(context)
//const token = context.sate.token



useEffect(()=> {
    document.title = 'Tienda'
    getProducts()
}, [])

 const [products, setProducts] = useState([])

 const getProducts = async () => {
   

        try {
            const res = await axios.get('http://localhost:4000/api/productos/12')
            const { succes, products } = res.data
      
            if (succes) {
              setProducts(products)
            }
          } catch (error) {
            console.log(error)
          }
        }
     
       console.log(products)
 
 
    return (
        <div className='storeBox'>
            <h1>Tienda</h1>
            <div className='productCont'>
            {products.map((e) => (<Product key={e._id} item={e}  />))}
            </div>
        </div>
    )
}

export default Store