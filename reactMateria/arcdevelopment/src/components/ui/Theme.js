import { createTheme } from '@mui/material/styles';
const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"
const arcWhite = "#000000"
const arcBlueSelected = "#0D66A3"

export const theme = createTheme({
    palette: {
        common: {
            blue:arcBlue,
            orange:arcOrange,
            white:arcWhite,
            blueSelected:arcBlueSelected
        },
        primary:{
            main:arcBlue
        },
        secondary: {
            main:arcOrange
        }
    },
    typography: {
        tab:{
            fontFamily:'Raleway',
            textTransform: 'none',
            fontWeight:700,
            fontSize:"1rem",
            color:"white",
            indicatorColor:"white"
        },
        estimate:{
            fontFamily:"Pacifico",
            fontSize:"1rem",
            textTransform:"none",
            color:"white"
        }
    }
});