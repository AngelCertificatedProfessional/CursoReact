import {Menu,MenuItem,AppBar,Toolbar,useScrollTrigger,Box,Tab, Tabs,Button} from '@mui/material'
import { cloneElement, useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';

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

const routes = ['/', '/services', '/revolution','/about', '/contact'];
const menuRutas = ['/services', '/customsoftware', '/mobileapps','/websites'];

export const Header = () => {
  // esta linea nos ayuda a entrar a los 
  const theme = useTheme();

  const [value,setValue] = useState(0)
  const [anchorEl,setAnchorEl] = useState(null)
  const [open,setOpen] = useState(false)
  const [selectedIndex,setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setValue(value)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpen(true)
  }

  const handleMenuItemClick = (e,index) => {
    handleClose()
    setSelectedIndex(index)
  } 

  const handleClose = () => {
    setAnchorEl(null)
    setOpen(false)
  }

  const menuOptions = [
    {name:"Services",link:"/services"},
    {name:"Custom Software Developer",link:"/customsoftware"},
    {name:"Mobile App Development",link:"/mobileapps"},
    {name:"Websites Development",link:"/websites"},
  ]


  const useStyles = {
    logo:{
      height:"7rem"
    },
    toolbarMargin:{
      ...theme.mixins.toolbar,
      marginBottom:"3rem"
    },
    tabContainer:{
      ml:"auto"
    },
    tab:{
      ...theme.typography.tab,
      minWidth:10,
      marginLeft:"25px",
    },
    button:{
      borderRadius:"50px",
      marginLeft:"50px",
      marginRight:"25px",
      height:"45px",
      ...theme.typography.estimate
    },
    logoContainer:{
      padding:0,
      "&:hover":{
        backgroundColor:"transparent"
      }
    },
    menu:{
      "& .MuiPaper-root": {
        backgroundColor: theme.palette.common.blue,
        color:"white",
        borderRadius:"0px"
      }
    },
    menuItem:{
      ...theme.typography.tab,
      "&.Mui-selected": {
        backgroundColor: theme.palette.common.blueSelected
      },
      "&.Mui-selected:hover":{ 
        backgroundColor: theme.palette.common.blueSelected
      },
      "&:hover": {
        backgroundColor: theme.palette.common.blueSelected
      }
      // opacity:0.7,
      // "&:hover":{
      //   opacity:1
      // }
    },
  }

  useEffect(() => {
    //Cuando cargas la pagina y estas en otra ruta ,te carga el login pero en la ruta se queda con otra
    //para evitar que no te muestre la correcta agregamos el sigueitne codigo
    if(menuRutas.includes(window.location.pathname)){
      setValue(1)  
      setSelectedIndex(menuRutas.includes(window.location.pathname) ? menuRutas.indexOf(window.location.pathname) : 0)
      return;
    } 
    setValue(routes.includes(window.location.pathname) ? routes.indexOf(window.location.pathname) : 0)  
  },[value,selectedIndex ])

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
              <Button 
                component={Link} 
                to="/" 
                sx={useStyles.logoContainer} 
                disableRipple
                onClick={() => setValue(0)}>
                <Box
                  component="img"
                  sx={useStyles.logo}
                  alt= "company logo"
                  src={logo}
                />
              </Button>
              {/* se cambia el img por el box <img alt= "company logo" sx={{height:"7em"}} src={logo}/> */}
              <Tabs 
                value={value}
                sx={useStyles.tabContainer}
                textColor="secondary"
                indicatorColor="primary"
                onChange={handleChange}
              >
                <Tab sx={useStyles.tab} component={Link} to="/" label="Home" />
                <Tab 
                  sx={useStyles.tab} 
                  aria-owns={anchorEl ? "simple-menu" : undefined} 
                  aria-haspopup={anchorEl ? "true" : undefined} 
                  component={Link} 
                  onMouseOver={(event) => handleClick(event)}
                  to="/services" 
                  label="Services" />

                <Tab sx={useStyles.tab} component={Link} to="/revolution" label="The Revolution" />
                <Tab sx={useStyles.tab} component={Link} to="/about" label="About Us" />
                <Tab sx={useStyles.tab} component={Link} to="/contact" label="Contact Us" />
              </Tabs>
              {/* Contained indica que se cra un botton con background */}
              <Button variant="contained" color="secondary" sx={useStyles.button}>
                Free Estimate
              </Button>
              <Menu 
                id="simple-menu" 
                anchorEl={anchorEl} 
                open={open} 
                onClose={handleClose}
                sx={useStyles.menu}
                MenuListProps={{onMouseLeave:handleClose}}
                disableAutoFocusItem
                elevation={0}
                >
                {/* <MenuItem 
                  onClick={() => {handleClose(); setValue(1)}} 
                  component={Link} 
                  to="/services" 
                  sx={useStyles.menuItem}
                  >
                  Services
                </MenuItem>
                <MenuItem 
                  onClick={() => {handleClose(); setValue(1)}} 
                  component={Link} 
                  to="/customsoftware"
                  sx={useStyles.menuItem}
                  >
                  Custom Software Developtment
                </MenuItem>
                <MenuItem 
                  onClick={() => {handleClose(); setValue(1)}} 
                  component={Link} 
                  to="/mobileapps"
                  sx={useStyles.menuItem}
                  >
                  Mobile App Development
                </MenuItem>
                <MenuItem 
                  onClick={() => {handleClose(); setValue(1)}} 
                  component={Link} 
                  to="/websites"
                  sx={useStyles.menuItem}
                  >
                  Website Developtment
                </MenuItem> */}
                {
                  menuOptions.map((option,i) => (
                    <MenuItem 
                      key={i}
                      component={Link} 
                      to={option.link} 
                      sx={useStyles.menuItem} 
                      onClick={(event) => {
                        handleMenuItemClick(event,i); 
                        setValue(1)
                      }} 
                      selected = {i === selectedIndex && value === 1}
                      >
                      {option.name}
                    </MenuItem>
                  ))
                }
              </Menu>
            </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* Antes se tenia un div pero como react 18 no permite tener elemementos tipo makestyles 
      se cambio por un toolbar el sx se agrego por el tamano de la imagen*/}
      <Toolbar sx={useStyles.toolbarMargin}/>
    </>
  )
}
