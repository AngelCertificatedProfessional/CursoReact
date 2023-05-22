import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
export const NothingSelectedView = () => {
  return (
    <Grid 
      className="animate__animated animate__fadeIn animate__faster"
      container
      spacing={0} //Evita espacio entre los hijos
      direction = "column" //realiza un tipo de flexbox de columna
      alignItems = "center" //estructura del flex
      justifyContent="center" //estructura del flex
      sx = {{
        minHeight:'calc(100vh - 110px)',
        backgroundColor:'primary.main',
        borderRadius:3
        }} //extra style se le puede asignar estilos como tambien puede acceder a los temas del theme
    >
        <Grid item xs={12}>
            <StarOutline sx={{fontSize:100,color:'white'}}/>
        </Grid>
        <Grid item xs={12}>
            <Typography color="white" variant="h5">
                Seleciona o crea una entrada
            </Typography>
        </Grid>
    </Grid>
  )
}
