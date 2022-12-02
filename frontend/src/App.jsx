
import './App.css';
import { Routes, Route, Navigate} from 'react-router-dom'
import { useContext, useEffect } from 'react';
import UserContext from './context/UserContext';
import Home from '../src/views/home';
import Layout from '../src/components/layout';
import Us from '../src/views/us';
import Store from '../src/views/store';
import Blog from '../src/views/blog';



function App() {
  const context = useContext(UserContext)
  console.log(context.validToken)
  
  useEffect(()=>{
  context.validToken()
  },[])

  const token = context.userState.token
  console.log(context)
  console.log(token)
  

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route
        index
        element={<Home token={token}/>}
      />
       <Route
        path="/us"
        element={<Us />}
      />
       <Route
        path="/store"
        element={<Store />}
      />
      <Route
        path="/blog"
        element={<Blog />}
      />
      {/* <Route 
         path="/signin"
         element={<Login tag="signin" />}
         />
         {!token && 
         <Route 
         path="/signup"
         element={<Login tag="signup"/>}
         />} */}
      <Route 
         path="*"
         element={<Navigate to={token ? '/' : '/not-found'}/>}
         />
       </Route>
    </Routes>
  );
}

export default App;
