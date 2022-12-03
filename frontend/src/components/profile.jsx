import { useEffect, useContext } from "react"
import UserContext from "../context/UserContext"

const Profile = () => {

    const context = useContext(UserContext)

    
    
    
    useEffect(()=> {
        document.title = 'Mi perfil'
    }, [])
    return (

        <div><h1>Mi perfil</h1>
        <button onClick={context.showUser()}>Mi perfil</button>
        </div>
        )
    }
    
    export default Profile