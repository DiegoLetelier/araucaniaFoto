import { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Login = (props) => {
  const { handleClose } = props;

  const state = useContext(UserContext);
  console.log(state);

  const token = state.token

  const signIn = () => {
    try {
      state.signIn(user);
      if (token) {
        handleClose();
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  // useEffect , that I didn´t use, just as a sample.
  // useEffect(()=>{
  //   document.title = tag==='signup'? 'Registrarse' : 'Iniciar Sesión'
  // },[tag])

  const [user, setUser] = useState({});

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h3>Iniciar Sesión </h3>
      <Box>
        <Stack gap={3}>
          <TextField
            id="outlined-basic"
            label="correo"
            variant="outlined"
            size="small"
            type="email"
            name="correo"
            onChange={(e) => handleInput(e)}
          />
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            size="small"
            type="password"
            name="password"
            onChange={(e) => handleInput(e)}
          />
          <Button variant="contained" endIcon={<SendIcon />} onClick={signIn}>
            {"Iniciar Sesión "}
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Login;
