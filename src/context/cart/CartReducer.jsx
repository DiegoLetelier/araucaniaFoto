

const CartReducer = (cartState, action) => {
    
    const {type, payload} = action

    const getQty = (cart) => {
        const qty = cart.reduce((acc , total) => {
            return acc + Number(total.qty)
          }, 0)
          return qty
    }
    
    switch(type){
        case 'ADD': 

            console.log(cartState)
            if(cartState.cart.some((e)=>e._id===payload.item._id)){
                
                console.log(payload.item._id)
                
                //console.log(e[index].qty)

                cartState.cart.forEach((e)=>{
                   if(e._id===payload.item._id){
                        e.qty = payload.qty
                        
                    }
                    
                })
            
            }else{ 
              cartState.cart.push({...payload.item, qty: payload.qty}) 
            }
              
              return {cart : cartState.cart, qty: getQty(cartState.cart)  }
        
        case 'DELETE':

              const res = cartState.cart.filter(e=>e._id!==payload)

              return {
                cart: res, qty: getQty(res)
            }

        default: 
        return cartState
    }
         
    //      return console.log ( cartState.cart.push(payload))
    
    
           
}


   export default CartReducer
   