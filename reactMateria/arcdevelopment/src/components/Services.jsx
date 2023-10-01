import {Link} from 'react-router-dom'
import { useTheme } from '@mui/material/styles';
import {Grid,Button, Typography,useMediaQuery,Box } from '@mui/material'
import ButtonArrow from './ui/ButtonArrow';
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppIcon from '../assets/mobileIcon.svg'
import websiteIcon from '../assets/websiteIcon.svg'

export const Services = (props) => {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const useStyles = {
        learnButton:{
            ...theme.typography.learnButton,
            fontSize:"0.7rem",
            height : 30,
            padding : 3,
            [theme.breakpoints.down("sm")] : {
                marginBottom:"2rem"
            }
        },
        specialText:{
            fontFamily:"Pacifico",
            color:theme.palette.common.orange
        },
        subtitle:{
            marginBottom:"1rem"
        },
        icon:{
            marginLeft:"2rem",
            [theme.breakpoints.down("xs")]:{
                marginLeft:0
            }
        },
        serviceContainer:{
            marginTop:"12rem",
            [theme.breakpoints.down("sm")]:{
                padding:25
            }
        },
    }
    return (
        <Grid container direction="column">
            <Grid item> {/* iOS/Android block*/}
                <Grid container direction = "row" justifyContent={matchesSM ? "center" : "flex-end"} sx={useStyles.serviceContainer}>
                    <Grid item style={{textAlign: matchesSM ? "center" : undefined }}>
                        
                        <Typography variant="h4">
                           iOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" sx={useStyles.subtitle}>
                            Extend Functionality. Extend Access Increase Engagement.
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web experience or create a standalon app {matchesSM ? null : <br/>} with either mobile platform
                            <Box
                                component="span"
                                sx={useStyles.specialText}
                            >
                                celebration
                            </Box>
                        </Typography>
                        <Button component={Link} to="/mobileapps" variant="outlined" sx={useStyles.learnButton} onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}>
                            <span style={{marginRight:10}}>
                                Learn More
                            </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : "5rem" }}>
                        <Box
                            sx={useStyles.icon}
                            component="img"
                            // sx={useStyles.icon}
                            alt="mobile app icon" 
                            src={mobileAppIcon}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> 
            
                {/* Custom Software block*/}
                <Grid container direction = "row" justifyContent={matchesSM ? "center" : undefined} sx={useStyles.serviceContainer}>
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5rem", textAlign: matchesSM ? "center" : undefined }}>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" sx={useStyles.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital solutions, from investigation to {" "}
                            <Box
                                component="span"
                                sx={useStyles.specialText}
                            >
                                celebration
                            </Box>
                        </Typography>
                        <Button component={Link} to="/customsoftware" variant="outlined" sx={useStyles.learnButton} onClick={() => {props.setValue(1); props.setSelectedIndex(1)}}>
                            <span style={{marginRight:10}}>
                                Learn More
                            </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Box
                            sx={useStyles.icon}
                            component="img"
                            // sx={useStyles.icon}
                            alt="Custom software icon" 
                            src={customSoftwareIcon}
                        />
                    </Grid>
                </Grid>
            </Grid>

            
            <Grid item> {/* WEBSIE block*/}
                <Grid container direction = "row" justifyContent={matchesSM ? "center" : "flex-end"} sx={useStyles.serviceContainer}>
                    <Grid item style={{ textAlign: matchesSM ? "center" : undefined }}>
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" sx={useStyles.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for Search Engines, built for Speed {" "}
                            <Box
                                component="span"
                                sx={useStyles.specialText}
                            >
                                celebration
                            </Box>
                        </Typography>
                        <Button component={Link} to="/websites" variant="outlined" sx={useStyles.learnButton} onClick={() => {props.setValue(1); props.setSelectedIndex(3)}}>
                            <span style={{marginRight:10}}>
                                Learn More
                            </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : "5rem"}}>
                        <Box
                            sx={useStyles.icon}
                            component="img"
                            // sx={useStyles.icon}
                            alt="Website icon" 
                            src={websiteIcon}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
