import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Stack } from '@mui/material';
import Login from '../views/login'
import Register from '../views/register'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
 
 
 
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

   const [view, setView] = useState(true);
  const modalShow = () => setView(!view);
    
  
  //  const view = true
  
  //   useEffect((view)=>{
  //     const toShow = view? <Login /> : <Register />
  //     return toShow
  //   },[view])

  return (
    <div>
      <Button onClick={handleOpen}>Iniciar Sesión</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
          <Stack>
          {view? <Login  handleclose={handleClose}/> : 
                 <Register handleClose={handleClose}
                          />}
          
          <Button onClick={modalShow}>{ view? 'Ir a registrarte'  : 'Ir a inicar sesión' }</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}