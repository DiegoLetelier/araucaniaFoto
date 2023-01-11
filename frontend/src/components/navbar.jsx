import './comp.css'
import * as React from 'react';
import {Link} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {useContext} from 'react';
import UserContext from '../context/UserContext'
import BasicModal from './modal';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../context/cart/CartContext';




// const pages = [ 'Nosotros', 'Tienda', 'Blog' ];
const pagesLinks = [{text: 'Inicio', url: '/'}, {text :'Nosotros', url:'/us'}, {text: 'Tienda', url: '/store'}  ];
// Usar operador ternario para 'iniciar sesión' vs 'Mi perfil y cerrar Sesión'



const Navbar = () => {

  // The idea is to have an object and get just some characters of the object

  // const arr = [
//     {
//         "id": "14",
//         "name": "Mickey",
//         "state": "HI",
//     },
//     {
//         "id": "34",
//         "name": "Minnie",
//         "state": "TX",
//     }
// ];
// const res = arr.map(({name})=>name[0]);
// console.log(res);



//  const [initials, setInitials] = useState(arr)

//  setInitials([
//     arr.map(({name})=>name[0])

//  ])

 const context = useContext(UserContext)
 const token = context.userState.token
  // const tag = context.userstate.tag
  // console.log(tag)

  const cartContext = useContext(CartContext)
  console.log(cartContext)
   let cartNumber = cartContext.cartState.qty
  // console.log(cartNumber)
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {

    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
 
  // const handleOnClick = () => {(
  //  token?  context.signOut : <BasicModal />
  // )}
 
  // make a state variable 
  const clickHandle = () => {
    if(token){
      return context.signOut()
    }
  } 

  return (
    <AppBar position="static"  style={{backgroundColor: "#91B7C7"}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          <img src="../../media/img/logo.png" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pagesLinks.map((link) => (
                  <Stack key={link.text} >
                <MenuItem >
                 <Link to={link.url}>
                  <Typography textalign="center">{link.text}</Typography>
                </Link>
                </MenuItem>
                </Stack>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="p"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 0.1,
              display: { xs: 'flex', sm: 'none' },
              flexGrow: 0,
              fontFamily: 'monospace',
              fontWeight: 300,
              letterSpacing: '.05rem',
              color: 'inherit',
              textDecoration: 'none',
              autoWidth: 'true',
            }}
          >
            <img src="../../media/img/logomobile.png" className='imgmobile'/>
            <br></br>
          
            <Stack className='titlemobile'>
              <p>Araucanía<br></br>Fotovoltaica </p>
            </Stack>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
             
            {pagesLinks.map((link) => (
              <Stack key={link.text}>
              <Link to={link.url}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              {link.text}
              </Button>
              </Link>
              </Stack>
            ))}
          </Box>
          <Box>
          
          <ShoppingCartIcon ></ShoppingCartIcon>
          <div>
          <p className='cartNumber'>{cartNumber}</p>
          </div>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Perfil">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar src="/broken-image.jpg" /> 
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
                
                <MenuItem key='log' textalign="center" >{token ? <Link to={'/profile/'}>Mi perfil</Link> : null}</MenuItem>
                <MenuItem key='log' textalign="center" onClick={clickHandle}> {token ? 'Cerrar Sesión' : <BasicModal />}
                </MenuItem>
               {/* <MenuItem> {tag ==='admin'?  <ProfileAdmin /> :<Profile />} </MenuItem> */}
              
            </Menu>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar