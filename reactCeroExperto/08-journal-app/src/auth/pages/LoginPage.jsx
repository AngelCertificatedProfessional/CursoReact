import {Link as RouterLink} from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"

export const LoginPage = () => {
  return (
    <Grid container
      spacing={0} //Evita espacio entre los hijos
      direction = "column" //realiza un tipo de flexbox de columna
      alignItems = "center" //estructura del flex
      justifyContent="center" //estructura del flex
      sx = {{minHeight:'100vh',backgroundColor:'primary.main',padding:4 }} //extra style se le puede asignar estilos como tambien puede acceder a los temas del theme
    >
      <Grid item 
      className='box-shadow'
      xs={3} //en pantalla pequenas tendra tres posiciones
      sx={{backgroundColor:'white',padding:3,borderRadius:2}}
      >
        <Typography variant="h5" sx={{mb:1}}>
          Login

          <form>
            <Grid container>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                  label="Correo" 
                  type="email" 
                  placeholder="correo@google.com"
                  fullWidth/>
              </Grid>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                  label="Contrasena" 
                  type="password" 
                  placeholder="Contrasena"
                  fullWidth //Se expande todo lo que pueda del padre item
                  />
              </Grid>

              <Grid container spacing={2} sx={{mb:2,mt:2}}>
                <Grid item xs={12} sm={6}> 
                  <Button variant='contained' fullWidth>
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}> 
                  <Button variant='contained' fullWidth>
                    <Google/>
                    <Typography sx={{ml:1}}>
                      Google
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
              <Grid container direction='row' justifyContent='end'>
                <Link component = {RouterLink} color='inherit' to='/auth/register'>
                  Crear una cuenta
                </Link>
              </Grid>
            </Grid>
          </form>

        </Typography>
      </Grid>
    </Grid>
  )
}
