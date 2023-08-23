import {Box,Grid} from '@mui/material'
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import footerAdornment from '../../assets/Footer Adornment.svg'

export const Footer = (props) => {
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
        },
        mainContainer:{
            position:"absolute",
        },
        link: {
            color:"white",
            fontFamily:"Arial",
            fontSize:"0.75rem",
            fontWeight:"bold",
            textDecoration:"none"
        },
        gridItem:{
            margin:"3rem"
        }
    }

    return (
        <Box
            component="Footer"
            sx={useStyles.footer}
            >
            <Grid container justifyContent="center" sx={useStyles.mainContainer}>
                <Grid item sx={useStyles.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} onClick={() => props.setValue(0)} to="/" sx={useStyles.link}>
                            Home
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={useStyles.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(0)}} to="/services" sx={useStyles.link}>
                            Services
                        </Grid>
                        <Grid item component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(1)}} to="/customsoftware" sx={useStyles.link}>
                            Custom Software Development
                        </Grid>
                        <Grid item component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(2)}} to="/mobileapps" sx={useStyles.link}>
                            Mobile App Development
                        </Grid>
                        <Grid item component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(3)}} to="/websites" sx={useStyles.link}>
                            Website Development
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={useStyles.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/revolution" sx={useStyles.link} onClick={() => props.setValue(2)}>
                            The Revolution
                        </Grid>
                        <Grid item component={Link} to="/revolution" sx={useStyles.link} onClick={() => props.setValue(2)}>
                            Vision
                        </Grid>
                        <Grid item component={Link} to="/revolution" sx={useStyles.link} onClick={() => props.setValue(2)}>
                            Technology
                        </Grid>
                        <Grid item component={Link} to="/revolution" sx={useStyles.link} onClick={() => props.setValue(2)}>
                            Process
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={useStyles.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/about" sx={useStyles.link} onClick={() => props.setValue(3)}>
                            About us
                        </Grid>
                        <Grid item component={Link} to="/about" sx={useStyles.link} onClick={() => props.setValue(3)}>
                            History
                        </Grid>
                        <Grid item component={Link} to="/about" sx={useStyles.link} onClick={() => props.setValue(3)}>
                            Team
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={useStyles.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/contact" sx={useStyles.link} onClick={() => props.setValue(4)}>
                            Contact Us
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Box
                component="img"
                sx={useStyles.adornment}
                alt="black decorative slash"
                src={footerAdornment}
            />
        </Box>
    )
}
