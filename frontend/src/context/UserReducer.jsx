
const userReducer = (state, action) => {
 const {type, payload, tag} = action

 switch (type){
    case 'REGISTER':
        localStorage.setItem('token', payload)
        return {token: payload}
    case 'LOGOUT':
        return {token: null }
    case 'LOGIN' :
        localStorage.setItem('token', payload)
        return {token: payload, tag: tag }
    case 'VALID' :
        localStorage.setItem('token', payload)
        return {token: payload, tag: tag}
    case 'GET' :
        return {user: payload}
    case 'EDIT' :
        return {token: payload, tag: tag}

    default : 
        return state
 }

}

export default userReducer


