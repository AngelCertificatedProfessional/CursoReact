import {AppBar,Toolbar,useScrollTrigger,Box} from '@mui/material'
import { cloneElement } from 'react';
import logo from '../../assets/logo.svg'

const ElevationScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true, //indica que no genere un delay para desaparecer la barra
    threshold: 0,//no endendi que hacia valor pero tengo entendido que hay que ponerlo en 0
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export const Header = () => {

  return (
    <>
      {/* Nos ayuda a tener un navbar fijo paraque no baje */}
      <ElevationScroll>
        {/* // fixed es la posicion predefinida y toma el full size de la pantalla static tomaria un margin */}
        <AppBar position="fixed" color="primary">
            {/* Toolbar es necesaripo porque a partir de este punto todo lo que se ponga
            se pondra en horizontal */}
            {/* disableGuttersv elimina un margen left que esta por default */}
            <Toolbar disableGutters>
              {/* Typografy simula la etiqueta de texto que se agrega en este caso el h3 */}
              {/* color="secondary"> a los tupografy le podemos agregar el color */}
              {/* <Typography variant="h3"> 
                Arc Development
              </Typography> */}
              <Box
                component="img"
                sx={{height:"7rem"}}
                alt= "company logo"
                src={logo}
              />

              {/* <img alt= "company logo" sx={{height:"7em"}} src={logo}/> */}
            </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* Antes se tenia un div pero como react 18 no permite tener elemementos tipo makestyles 
      se cambio por un toolbar el sx se agrego por el tamano de la imagen*/}
      <Toolbar sx={{mt:"3em"}}/>
    </>
  )
}
