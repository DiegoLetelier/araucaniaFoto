import './views.css'
import { useEffect, useState } from "react";
import Jobs from '../components/jobs'
import axios from 'axios'


const Us = () => {

    
    useEffect(()=> {
        document.title = 'Nosotros'
        getJobs()
    }, [])
    
    const [jobs, setJobs] = useState([])
    
    const getJobs = async () => {
        try {
            const res = await axios.get('http://localhost:4000/api/jobs/4')
            const { succes, jobs } = res.data
      
            if (succes) {
              setJobs(jobs)
            }
          } catch (error) {
            console.log(error)
          }
        }
     
       console.log(jobs)
    
    return (
        <div>
            <h1>Nosotros</h1>
            <p>Iniciamos nuestro trabajo instalando paneles solares en nuestra propia casa. Y vimos cómo la comunidad alrededor nuestro se mostrpo interesada.
                En nuestro equipo hay ingenieros eléctricos, industriales, técnicos y algunos otros que nos apoyan. Les dejamos algunos de nuestros proyectos. 
            </p>
            <div className='jobsCont'>
            {jobs.map((e) => (<Jobs key={e._id} infoJobs={e}  />))}
            </div>
        </div>
    )
}

export default Us

