import {Box,Grid, Hidden} from '@mui/material'
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import footerAdornment from '../../assets/Footer Adornment.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'


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
        },
        icon:{
            height:"4rem",
            width:"4rem",
            [theme.breakpoints.down("md")]:{
                height:"2.5rem",
                width:"2.5rem"
            }
        },
        socialContainer:{
            position:"absolute",
            marginTop:"-6rem",
            right:"1.5rem",
            [theme.breakpoints.down("md")]:{
                right:"0.6rem"
            }
        }
    }

    return (
        <Box
            component="footer"
            sx={useStyles.footer}
            >
            <Hidden mdDown>
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
                                iOS/Android App Development
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
            </Hidden>
            <Box
                component="img"
                sx={useStyles.adornment}
                alt="black decorative slash"
                src={footerAdornment}
            />
            <Grid container justifyContent="flex-end" spacing={2} sx={useStyles.socialContainer}>
                <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                    <Box
                        component="img"
                        sx={useStyles.icon}
                        alt="facebook logo" 
                        src={facebook}
                    />
                </Grid>

                <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
                    <Box
                        component="img"
                        sx={useStyles.icon}
                        alt="facebook logo" 
                        src={twitter}
                    />
                </Grid>
                <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
                    <Box
                        component="img"
                        sx={useStyles.icon}
                        alt="facebook logo" 
                        src={instagram}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}
