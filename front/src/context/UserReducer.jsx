
const userReducer = (state, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "REGISTER":
        localStorage.setItem("token", payload);
        return { token: payload, user: null };
      case "LOGOUT":
        return { token: null, user: null };
      case "LOGIN":
        localStorage.setItem("token", payload);
        return { token: payload, user: null };
      case "VALID":
        localStorage.setItem("token", payload);
        return { token: payload, user: null };
        case "SET_USER":
            return { ...state, user: payload };
      case "EDIT":
        return { token: payload, user: null };
      default:
        return state;
    }
  };
  
  export default userReducer;
  




// const userReducer = (state, action) => {
//  const {type, payload} = action

//  switch (type){
//     case 'REGISTER':
//         localStorage.setItem('token', payload)
//         return {token: payload}
//     case 'LOGOUT':
//         return {token: null }
//     case 'LOGIN' :
//         localStorage.setItem('token', payload)
//         return {token: payload}
//     case 'VALID' :
//         localStorage.setItem('token', payload)
//         return {token: payload}
//     case 'GET' :
        
//         return { ...state, user: payload };
        
//     case 'EDIT' :
//         return {token: payload}

//     default : 
//         return state
//  }

// }

// export default userReducer


