import {Box,Grid} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import footerAdornment from '../../assets/Footer Adornment.svg'
import { ClassNames } from '@emotion/react';


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
        },
        mainContainer:{
            position:"absolute",
        },
        link: {
            color:"white",
            fontFamily:"Arial",
            fontSize:"0.75rem",
            fontWeight:"bold"
        }
    }

    return (
        <Box
            component="Footer"
            sx={useStyles.footer}
            >
            <Grid container justifyContent="center" sx={useStyles.mainContainer}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item sx={useStyles.link}>
                            Home
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item sx={useStyles.link}>
                            Services
                        </Grid>
                        <Grid item sx={useStyles.link}>
                            Custom Software Development
                        </Grid>
                        <Grid item sx={useStyles.link}>
                            Mobile App Development
                        </Grid>
                        <Grid item sx={useStyles.link}>
                            Website Development
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item sx={useStyles.link}>
                            The Revolution
                        </Grid>
                        <Grid item sx={useStyles.link}>
                            Vision
                        </Grid>
                        <Grid item sx={useStyles.link}>
                            Technology
                        </Grid>
                        <Grid item sx={useStyles.link}>
                            Process
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item sx={useStyles.link}>
                            About us
                        </Grid>
                        <Grid item sx={useStyles.link}>
                            History
                        </Grid>
                        <Grid item sx={useStyles.link}>
                            Team
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item sx={useStyles.link}>
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
