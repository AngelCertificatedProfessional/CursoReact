import {AppBar,Toolbar,useScrollTrigger} from '@mui/material'
import { cloneElement } from 'react';

function ElevationScroll(props) {
  const { children } = props;
  console.log(children)
  const trigger = useScrollTrigger({
    disableHysteresis: true, //indica que no genere un delay para desaparecer la barra
    threshold: 0,//no endendi que hacia valor pero tengo entendido que hay que ponerlo en 0
  });

  console.log(trigger)
  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


export const Header = () => {
  return (
    //Nos ayuda a tener un navbar fijo paraque no baje
    <ElevationScroll>
      {/* // fixed es la posicion predefinida y toma el full size de la pantalla static tomaria un margin */}
      <AppBar position="fixed">
          {/* Toolbar es necesaripo porque a partir de este punto todo lo que se ponga
          se pondra en horizontal */}
          <Toolbar>
              Arc Development
          </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}
