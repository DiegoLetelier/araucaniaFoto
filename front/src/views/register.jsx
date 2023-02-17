import {useState} from 'react'
import * as React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import Stack from '@mui/material/Stack'
import SendIcon from '@mui/icons-material/Send'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'





const Register = (props) => {
  
 // make sure that is getting  
  const state = useContext(UserContext)
 
  
  console.log(state)

  const {handleClose} = props

  const signUp = async () => {
    try{
    state.signUp(user)
    const token = state.userState.token
    console.log(token)
     if (token){
     handleClose()}
    //  else{
    //  handleOpen()
    //  }
    }catch(e){
      console.log(e.message)
    }
  }
  
  
  
  
 const [user, setUser] = useState({});
 const handleInput = (e) => {
  setUser({
    ...user,
    [e.target.name]:e.target.value
  })
}
 return(
    <div><h3>{  'Registrate '} </h3>
    <Box>
    <Stack gap={3}>
        <TextField
          id="outlined-basic"
          label="correo"
          variant="outlined"
          size="small"
          type="email"
          name="correo"
          onChange={(e)=>handleInput(e)}
         /> 
         <TextField
          id="outlined-basic"
          label="password"
          variant="outlined"
          size="small"
          type="password"
          name="password"
          onChange={(e)=>handleInput(e)}
         />
         <Button
           variant="contained"
           endIcon={<SendIcon />}
          
           onClick={signUp}
           >
            {  'Registrarte '}
           </Button>
          
         
    </Stack>
    </Box>
    </div>
 )}
 

export default Register