import './comp.css'
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useState, Fragment } from "react";
import jwt_decode from "jwt-decode";


const Profile = () => {
  let token = localStorage.getItem("token");
  var decoded = jwt_decode(token);

  const { id } = decoded;
  const context = useContext(UserContext);

  console.log(id);
  console.log(token);

  console.log(context)

  const [profile, setProfile] = useState({});

  const [user, setUser] = useState({})

  const viewProfile = async () => {
    const profile = await context.showUser(id);
    if (profile) {
      setProfile(profile)
    } 
  };


  useEffect(() => {
   
   viewProfile();


  }, [profile.edad]);

  console.log(profile);

  if (!profile) return null;

  
  

  const handleInput = (e) => {
            
             setUser({
                _id: profile._id,
                ...user,
                [e.target.name]: e.target.value
            })
          return user
          
        }
        
console.log(user)
        
  console.log(profile)

  return (
    <Fragment >
      <div className='profileBox'>
      <h1 className='profileTitle'>Información del usuario</h1>
      <div className='profileForm'>
        <form>
          <div className='formInput'>  
          <label htmlFor='name' className='formItem'>Nombre: </label>
          <input
            
            type='text'
            name='nombre'
            id='name'
            defaultValue={profile.nombre}
            onChange={(e) => handleInput(e)}
          />
          </div>
          <div className='formInput'>
          <label htmlFor='lastname'className='formItem'>Apellido:</label>
          <input
            
            type='text'
            name='apellido'
            placeholder='ingrese su apellido'
            defaultValue={profile.apellido}
            onChange={(e) => handleInput(e)}
          />
           </div>
           <div className='formInput'>
          <label htmlFor='age' className='formItem'>Edad: &emsp; </label>
          <input
           
            type='number'
            name='edad'
            id='age'
            placeholder='ingresa tu edad'
            defaultValue={profile.edad}
            onChange={(e) => handleInput(e)}
          />
           </div>
           <div className='formInput'>
          <label htmlFor='email' className='formItem'>Correo: &ensp;</label>
          <input
            
            type='email'
            name='correo'
            id='email'
            placeholder='ingresa tu correo'
            defaultValue={profile.correo}
            onChange={(e) => handleInput(e)}
          />
           </div>
                         
                          <button
                              onClick={(e) => {
                                  e.preventDefault()
                                  context.editUser(user)
                                  
                              }}
                              className='profileBtn'
                              >
                              Editar mi información
                          </button>
                          
                      </form>
                  </div>
                </div>
              </Fragment>
  );
};


export default Profile;






