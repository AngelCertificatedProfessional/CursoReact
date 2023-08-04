import {Box} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import footerAdornment from '../../assets/Footer Adornment.svg'


export const Footer = () => {
    //esta linea nos ayudara a obtener los estilos dethene
    const theme = useTheme();
    const useStyles = {
        footer: {
            backgroundColor: theme.palette.common.blue,
            width:"100%",
            zIndex:1302,
            position: "relative"
        },
        adornment:{
            width: "25rem",
            verticalAlign:"bottom",
            //achica la imagen
            [theme.breakpoints.down("md")]:{
                width:"21rem"
            },
            [theme.breakpoints.down("xs")]:{
                width:"15rem"
            },
        }
    }

    return (
        <Box
            component="Footer"
            sx={useStyles.footer}
            >
            <Box
                component="img"
                sx={useStyles.adornment}
                alt="black decorative slash"
                src={footerAdornment}
            />
        </Box>
    )
}
