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
    <Fragment>
      <h1 className='userFormTitle mt-4 mb-4 text-white'>Información del usuario</h1>
      <div className='userForm d-flex col-xl-12 col-lg-12 col-md-12 col-sm-12'>
        <form>
          <label htmlFor='name' className='text-dark'>Nombre:</label>
          <input
            className='form-label'
            type='text'
            name='nombre'
            id='name'
            defaultValue={profile.nombre}
            onChange={(e) => handleInput(e)}
          />
          <label htmlFor='lastname' className='text-dark'>Apellido:</label>
          <input
            className='form-label'
            type='text'
            name='apellido'
            placeholder='ingrese su apellido'
            defaultValue={profile.apellido}
            onChange={(e) => handleInput(e)}
          />
          <label htmlFor='age' className='text-dark'>Edad:</label>
          <input
            className='form-label'
            type='number'
            name='edad'
            id='age'
            placeholder='ingresa tu edad'
            defaultValue={profile.edad}
            onChange={(e) => handleInput(e)}
          />
          <label htmlFor='email' className='text-dark'>Correo:</label>
          <input
            className='form-label'
            type='email'
            name='correo'
            id='email'
            placeholder='ingresa tu correo'
            defaultValue={profile.correo}
            onChange={(e) => handleInput(e)}
          />
                          <button
                              className='btn btn-dark'
                              onClick={(e) => {
                                  e.preventDefault()
                                  context.editUser(user)
                              }
                              }>
                              Editar mi información
                          </button>
                      </form>
                  </div>
              </Fragment>
  );
};


export default Profile;






