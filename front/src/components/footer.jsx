import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
       
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box borderBottom={1}>Araucanía Fotovoltaica</Box>
              <Box>
                <Link href='/' color="inherit">
                <img src='https://araucaniafotovoltaica.com/wp-content/uploads/2019/05/Ampolleta-sola.png' width={40} alt='ampolleta' />
                 Inicio
                </Link>
              </Box>
              <Box>
                <Link href='/us' color="inherit">
                <img src='https://araucaniafotovoltaica.com/wp-content/uploads/2019/05/Ampolleta-sola.png' width={40} alt='ampolleta' />
                  Nosotros
                </Link>
              </Box>
              <Box>
                <Link href='/store' color="inherit">
                <img src='https://araucaniafotovoltaica.com/wp-content/uploads/2019/05/Ampolleta-sola.png' width={40} alt='ampolleta' />
                  Tienda
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box borderBottom={1}>Diego Letelier</Box>
              <Box>
                <Link href="https://github.com/DiegoLetelier" color="inherit" target={"_blank"}>
                  <img src="https://diegoletelier.com/wp-content/uploads/2022/12/logo-diego-letelier-1.png" width={300}/>
                </Link>
              </Box>
              <Box>
                <Link href="https://www.linkedin.com/in/diegoletelier/" color="inherit" target={"_blank"} marginLeft={3}>
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" width={250} />
               
                </Link>
              </Box>
            </Grid>
            
          </Grid>
          <Box textalign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>

          <Grid item xs={12} sm={12} textAlign="center">
          <a  href="https://diegoletelier.com/" target={"_blank"}> diegoletelier.com &reg; {new Date().getFullYear()}</a>
          </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}