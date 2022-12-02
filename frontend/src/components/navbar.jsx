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
import AdbIcon from '@mui/icons-material/Adb';
import {useContext} from 'react';
import UserContext from '../context/UserContext'
import BasicModal from './modal';
import ProfileAdmin from './profileadmin';
import Profile from './profile';




// const pages = [ 'Nosotros', 'Tienda', 'Blog' ];
const pagesLinks = [{text :'Nosotros', url:'/us'}, {text: 'tienda', url: '/store'} ,{text:'blog', url:'/blog'} ];
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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
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
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
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

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar >tú</Avatar> 
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