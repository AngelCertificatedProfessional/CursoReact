import {Menu,MenuItem,AppBar,Toolbar,useScrollTrigger,Box,Tab, Tabs,Button, useMediaQuery, SwipeableDrawer, IconButton, ListItemText, List, ListItemButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
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

const menuOptions = [
  {name:"Services",link:"/services",activeIndex:1,selectedIndex:0},
  {name:"Custom Software Developer",link:"/customsoftware",activeIndex:1,selectedIndex:1},
  {name:"iOS/Android App Development",link:"/mobileapps",activeIndex:1,selectedIndex:2},
  {name:"Websites Development",link:"/websites",activeIndex:1,selectedIndex:3},
]

export const Header = (props) => {
  //esta linea nos ayudara a obtener los estilos dethene
  const theme = useTheme();
  // esta linea nos ayuda a entrar a los 
  // Variables que nos ayudara a detectar si la pantalla esta en md o menor
  const iOS =
  typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("lg"))
  const [openDrawer,setOpenDrawer] = useState(false)
  const [openMenu,setOpenMenu] = useState(false)
  const [anchorEl,setAnchorEl] = useState(null)

  const routes = [
    {name:"Home",link:'/',activeIndex:0}, 
    {name:"Services",link:'/services',
      activeIndex:1,
      ariaOwns: anchorEl ? "simple-menu" : undefined, //elemento que esta relacionado con simpe-menu, en las versiones nuevas veo que solo sirve para indicar con que esta agarrado
      ariaPopup: anchorEl ? true : undefined,
      mouseOver: event => handleClick(event)
    },
    {name:"The Revolution",link:"/revolution",activeIndex:2},
    {name:"About Us",link:"/about",activeIndex:3},
    {name:"Contact Us",link:"/contact",activeIndex:4}];

  const handleChange = (e, newValue) => {
    props.setValue(newValue)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }

  const handleMenuItemClick = (e,index) => {
    handleClose()
    props.setSelectedIndex(index)
  } 

  const handleClose = () => {
    setAnchorEl(null)
    setOpenMenu(false)
  }



  const useStyles = {
    logo:{
      height:"7rem",
      //achica la imagen
      [theme.breakpoints.down("lg")]:{
        height:"6rem"
      },
      [theme.breakpoints.down('sm')]:{
        height:"5.5rem"
      }
    },
    toolbarMargin:{
      ...theme.mixins.toolbar,
      marginBottom:"3rem",
      [theme.breakpoints.down("lg")]:{
        marginBottom:"2rem"
      },
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
      ...theme.typography.estimate,
      "&:hover":{
        backgroundColor: theme.palette.secondary.light
      }
    },
    logoContainer:{
      padding:0,
      "&:hover":{
        backgroundColor:"transparent"
      }
    },
    menu:{
      zIndex:theme.zIndex.modal + 2,
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
    drawerIconContainer: {
      marginLeft:"auto",
      "&:hover":{
        backgroundColor:"transparent"
      }
    },
    drawerIcon:{
      height:"50px",
      width:"50px"
    },
    drawer:{
      "& .MuiPaper-root": {
        backgroundColor: theme.palette.common.blue,
        color:"white",
        borderRadius:"0px"
      }
    },
    drawerItem:{
      ...theme.typography.tab,
    },
    drawerItemEstimate:{
      backgroundColor:theme.palette.common.orange
    },
    drawerItemButton:{
      "&.Mui-selected": {
        backgroundColor: theme.palette.common.blueSelected
      },
      "&.Mui-selected:hover":{ 
        backgroundColor: theme.palette.common.blueSelected
      },
      "&:hover": {
        backgroundColor: theme.palette.common.blueSelected
      }
    },
    appbar:{
      zIndex:theme.zIndex.modal + 1
    }
  }

  useEffect(() => {
    //Cuando cargas la pagina y estas en otra ruta ,te carga el login pero en la ruta se queda con otra
    //para evitar que no te muestre la correcta agregamos el sigueitne codigo
    [...menuOptions,...routes].forEach(route => {
      switch(window.location.pathname){
        case `${route.link}`:
          if(props.value !== route.activeIndex){
            props.setValue(route.activeIndex)
            if(route.selectedIndex && route.selectedIndex !== props.selectedIndex){
              props.setSelectedIndex(route.selectedIndex)
            }
          }
        break;
        case '/estimate':
          props.setValue(5);
          break;
        default:
          break;
      }
    })
  },[props.value,menuOptions,props.selectedIndex,routes,props ])

  const tabs = (
    <>
      <Tabs 
        value={props.value}
        sx={useStyles.tabContainer}
        textColor="secondary"
        indicatorColor="primary"
        onChange={handleChange}
      >
        {
          routes.map((route,index) => (
            // las propiedades que no tengan tanto ariaowns como las otras las tomara como undefined y no les 
            //asignara valor
            <Tab key={index} sx={useStyles.tab} component={Link} to={route.link} label={route.name} 
              aria-owns={route.ariaOwns} aria-haspopup={route.ariaPopup} onMouseOver={route.mouseOver}/>
          ))
        }
      </Tabs>
      {/* Contained indica que se cra un botton con background */}
      <Button component={Link} to="/estimate" variant="contained" color="secondary" sx={useStyles.button} onClick={() => props.setValue(5)}>
        Free Estimate
      </Button>
      <Menu 
        id="simple-menu" 
        anchorEl={anchorEl} 
        open={openMenu} 
        onClose={handleClose}
        sx={useStyles.menu}
        MenuListProps={{onMouseLeave:handleClose}}
        disableAutoFocusItem
        elevation={0}
        >
       
        {
          menuOptions.map((option,i) => (
            <MenuItem 
              key={i}
              component={Link} 
              to={option.link} 
              sx={useStyles.menuItem} 
              onClick={(event) => {
                handleMenuItemClick(event,i); 
                props.setValue(1)
              }} 
              selected = {i === props.selectedIndex && props.value === 1}
              >
              {option.name}
            </MenuItem>
          ))
        }
      </Menu>
    </>
  )

  const drawer = (
    <>
      <SwipeableDrawer 
      disableBackdropTransition={!iOS} 
      disableDiscovery={iOS} 
      open={openDrawer} 
      onClose = {() => setOpenDrawer(false)} 
      onOpen={() => setOpenDrawer(true)}
      sx={useStyles.drawer}
      >
        <Toolbar sx={useStyles.toolbarMargin}/>
        <List disablePadding >
          {/* ListItem si quieres uno con forma de boton el itembutton es mejor*/}
          {
            routes.map((route,index) => (
              <ListItemButton key={index} sx={useStyles.drawerItemButton} onClick={() => {setOpenDrawer(false); props.setValue(route.activeIndex);}} 
              divider component={Link} to={route.link} selected={props.value === route.activeIndex}>
              {/* disableTypography elimina los estilos por default */}
              <ListItemText sx={useStyles.drawerItem}  disableTypography>
                {route.name}
              </ListItemText>
            </ListItemButton>
            ))
          }
          <ListItemButton sx={useStyles.drawerItemEstimate} onClick={() => {setOpenDrawer(false); props.setValue(5);}} 
            divider component={Link} to="/estimate">
            <ListItemText sx={useStyles.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItemButton>
        </List>
      </SwipeableDrawer>
      <IconButton sx={useStyles.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon sx={useStyles.drawerIcon}/>
      </IconButton>
    </>
  )

  return (
    <>
      {/* Nos ayuda a tener un navbar fijo paraque no baje */}
      <ElevationScroll>
        {/* // fixed es la posicion predefinida y toma el full size de la pantalla static tomaria un margin */}
        <AppBar position="fixed" color="primary" sx={useStyles.appbar}>
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
                onClick={() => props.setValue(0)}>
                <Box
                  component="img"
                  sx={useStyles.logo}
                  alt= "company logo"
                  src={logo}
                />
              </Button>
              {/* se cambia el img por el box <img alt= "company logo" sx={{height:"7em"}} src={logo}/> */}
              {
                matches ? drawer : tabs
              }
            </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* Antes se tenia un div pero como react 18 no permite tener elemementos tipo makestyles 
      se cambio por un toolbar el sx se agrego por el tamano de la imagen*/}
      <Toolbar sx={useStyles.toolbarMargin}/>
    </>
  )
}
