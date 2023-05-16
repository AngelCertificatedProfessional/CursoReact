import { CircularProgress, Grid } from "@mui/material"
export const CheckingAuth = () => {
    return (
        <Grid container
            spacing={0} //Evita espacio entre los hijos
            direction = "column" //realiza un tipo de flexbox de columna
            alignItems = "center" //estructura del flex
            justifyContent="center" //estructura del flex
            sx = {{
                minHeight:'100vh',
                backgroundColor:'primary.main',
                padding:4 }} //extra style se le puede asignar estilos como tambien puede acceder a los temas del theme
            >
            <Grid container 
                direction='row'
                justifyContent='center'
            >
                <CircularProgress color='warning'/>
            </Grid>
        </Grid>
    )
}

