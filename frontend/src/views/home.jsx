import { useContext } from 'react'
import UserContext from '../context/UserContext'



const Home = () => {
   const state = useContext(UserContext)
   const token = state.userState.token
   
    return(
       <div>
       <h3>HOME</h3>
       <h2>{token}</h2>
       
       
       </div>
    )
   }
   

export default Home