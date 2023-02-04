import UserContext from "./UserContext";
import { useReducer } from "react";
import UReducer from "./UserReducer";

import axios from "axios";

const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(UReducer, {
    token: null,
    user: null,
  });

  const signUp = async (user) => {
    try {
      const res = await axios.post("https://araucaniafotovoltaicaapp.onrender.com/api/usuario", user);
      if (res.data.succes) {
        console.log(res.data.token);
        // const tokenDecoded  = res.data.token

        dispatch({ type: "REGISTER", payload: res.data.token });
        // let decoded = jwt.decode(tokenDecoded, process.env.SECRET)
        // console.log(decoded)
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const signIn = async (user) => {
    try {
      const res = await axios.post(
        "https://araucaniafotovoltaicaapp.onrender.com/api/usuariologin",
        user
      );
      if (res.data.succes) {
        // const token = res.data.token
        dispatch({ type: "LOGIN", payload: res.data.token, tag: res.data.tag });
        console.log(res.data);
        // if(token){
        // console.log('im in')
        // }
      } else return alert(res.data.message);
    } catch (e) {
      console.log(e.message);
    }
  };

  const showUser = async (id) => {
    try {
      const res = await axios.get(
        `https://araucaniafotovoltaicaapp.onrender.com/api/usuario/display/${id}`
      );

      if (res.data.succes) {
        console.log("hola success 1");
        dispatch({ type: "SET_USER", payload: res.data  });
        console.log("hola success 2");
        console.log(res.data.user);
        console.log(res.data)
        return res.data.user
       
      } else return console.log(res.data.message);
    } catch (e) {
      console.log(e.message);
    }
  };

  const editUser = async (user) => {
    console.log(user)
    const id = user._id;
    try {
      const res = await axios.put(
        `https://araucaniafotovoltaicaapp.onrender.com/api/usuario/${id}`,
        user
      );
      if (res.data.succes) {
        // const token = res.data.token
        dispatch({ type: "EDIT", payload: res.data });
        console.log(res.data);
        console.log('editing')
      } else return console.log(res.data.message);
    } catch (e) {
      console.log(e.message);
    }
      };
    
    
      const validToken = async () => {
        const tokenn = localStorage.getItem("token");
        if (tokenn) {
          const res = await axios.get("https://araucaniafotovoltaicaapp.onrender.com/api/usuariotoken", {
            headers: {
              Authorization: 'Bearer ' + tokenn,
            },
          });
          if (res.data.succes) {
            
            dispatch({ type: "LOGIN", payload: tokenn });
        }
      }};
    
      const signOut = () => {
        dispatch({ type: "LOGOUT" });
      };
    // found that I should get a way to insert the value of 'user' to be send - work here. 
      return (
        <UserContext.Provider
          value={{ userState, signUp, signOut, signIn, showUser, editUser, validToken }}
        >
          {children}
        </UserContext.Provider>
      );
    };
    
    export default UserProvider;






// import UserContext from "./UserContext";
// import { useReducer } from "react";
// import UReducer from "./UserReducer";

// import axios from "axios";


// const UserProvider = ({ children }) => {
//   const [ userState, dispatch] = useReducer(UReducer, {
//     token: null, user: null
//   });

  

//   const signUp = async (user) => {
//     try {
//       const res = await axios.post("http://localhost:4000/api/usuario", user);
//       if (res.data.succes) {
//         console.log(res.data.token);
//         // const tokenDecoded  = res.data.token

//         dispatch({ type: "REGISTER", payload: res.data.token });
//         // let decoded = jwt.decode(tokenDecoded, process.env.SECRET)
//         // console.log(decoded)
//       }
//     } catch (e) {
//       console.log(e.message);
//     }
//   };

//   const signIn = async (user) => {
//     try {
//       const res = await axios.post(
//         "http://localhost:4000/api/usuariologin",
//         user
//       );
//       if (res.data.succes) {
//         // const token = res.data.token
//         dispatch({ type: "LOGIN", payload: res.data.token, tag: res.data.tag });
//         console.log(res.data);
//         // if(token){
//         // console.log('im in')
//         // }
//       } else return alert(res.data.message);
//     } catch (e) {
//       console.log(e.message);
//     }
//   };

//  const showUser = async (id) => {
//    try {
     
//      const res = await axios.get(`http://localhost:4000/api/usuario/display/${id}`)
     
     
//      if (res.data.succes) {
       
//        console.log('hola success 1')
//         dispatch({ type: "GET", payload: res.data.user });
//         console.log('hola success 2')
//        console.log(res.data.user)
//     } else return console.log(res.data.message)
//   } catch(e) {
//     console.log(e.message)
//   }};
  
 

//   const editUser = async (userEdit) => {
//     const id = userEdit.id
//     try {
//       const res = await axios.put(`
//         "http://localhost:4000/api/usuario/${{id}}"`,
//         userEdit
//       );
//       if (res.data.succes) {
//         // const token = res.data.token
//         dispatch({ type: "EDIT", payload: res.data });
//         console.log(res.data);
//         // if(token){
//         // console.log('im in')
//         // }
//       } else return console.log(res.data.message);
//     } catch (e) {
//       console.log(e.message);
//     }
//   };


//   const validToken = async () => {
//     const tokenn = localStorage.getItem("token");
//     if (tokenn) {
//       const res = await axios.get("http://localhost:4000/api/usuariotoken", {
//         headers: {
//           Authorization: 'Bearer ' + tokenn,
//         },
//       });
//       if (res.data.succes) {
        
//         dispatch({ type: "LOGIN", payload: tokenn });
//     }
//   }};

//   const signOut = () => {
//     dispatch({ type: "LOGOUT" });
//   };
// // found that I should get a way to insert the value of 'user' to be send - work here. 
//   return (
//     <UserContext.Provider
//       value={{ userState, signUp, signOut, signIn, showUser, editUser, validToken }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserProvider;
