

const CartReducer = (cartState, action) => {
    
    const {type, payload} = action
    
    switch(type){
        case 'ADD': 
        return  [...cartState, payload]
        
        default: 
        return cartState
    }
    
    
    // const idVerify = cartState.filter((item)=>payload.id===item.id)
       
        // if(idVerify.lenght > 0){
        //     return cartState
        // }else{ 
         
         //return console.log ( cartState.cart.push(payload))
           
}


   export default CartReducer
   