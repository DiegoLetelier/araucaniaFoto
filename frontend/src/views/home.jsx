import {useEffect, useContext } from 'react'
import UserContext from '../context/UserContext'



const Home = () => {
   const state = useContext(UserContext)
   const token = state.userState.token
   const embedId = "G3vg5kaIPwE" 

   useEffect(()=> {
      document.title = 'Araucania Fotovoltaica'
      }, [])
   
    return(
       <div>
       <h1>Esta App es en homenaje a mi papá</h1>
       <p>Poco antes de cumplir 70 años, mi papá inició esta empresa. Pionero en usar energía solar en modelo off-grid para una empresa de turismo en la araucanía. </p>
       <h5>Aquí un video de él hablando sobre los paneles solares y cómo funcionan</h5>
       <div className="customVideo">
       <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
     </div>
       
       <h2>{token}</h2>
       
       
       </div>
    )
   }
   

export default Home