import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({children,title = ''}) => {
  return (
    <Grid 
      container
      spacing={0} //Evita espacio entre los hijos
      direction = "column" //realiza un tipo de flexbox de columna
      alignItems = "center" //estructura del flex
      justifyContent="center" //estructura del flex
      sx = {{
        minHeight:'100vh',
        backgroundColor:'primary.main',
        padding:4 }} //extra style se le puede asignar estilos como tambien puede acceder a los temas del theme
    >
      <Grid item 
      className='box-shadow'
      xs={3} //en pantalla pequenas tendra tres posiciones
      sx={{        width:{sm:450}, //el width sera de 450 px
      backgroundColor:'white',padding:3,borderRadius:2}}
      >
            <Typography variant="h5" sx={{mb:1}}>
                {title}
            </Typography>
            {children}
        </Grid>
    </Grid>
  )
}
