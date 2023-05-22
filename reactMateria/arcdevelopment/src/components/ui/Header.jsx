import {AppBar,Toolbar} from '@mui/material'

export const Header = () => {
  return (
    // fixed es la posicion predefinida y toma el full size de la pantalla static tomaria un margin
    <AppBar position="fixed">
        {/* Toolbar es necesaripo porque a partir de este punto todo lo que se ponga
        se pondra en horizontal */}
        <Toolbar>
            Arc Development
        </Toolbar>
    </AppBar>
  )
}
