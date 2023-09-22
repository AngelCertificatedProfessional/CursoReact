import { useTheme } from '@mui/material/styles';
import img_1 from '../animations/landinganimation/img_1.png'
import img_2 from '../animations/landinganimation/img_2.png'
import img_3 from '../animations/landinganimation/img_3.png'
import img_4 from '../animations/landinganimation/img_4.png'
import {Box,Grid,Button, Typography,useMediaQuery,Card,CardContent} from '@mui/material'
import ButtonArrow from './ui/ButtonArrow';
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppIcon from '../assets/mobileIcon.svg'
import websiteIcon from '../assets/websiteIcon.svg'
import revolutionBackground from '../assets/repeatingBackground.svg'
import infoBackground from '../assets/infoBackground.svg'
import { CallToAction } from './ui/CallToAction';

export const LandingPage = () => {
  
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
    const useStyles = {
        animation: {
            naxWidth:"50rem",
            minWidth:"21rem",
            marginTop:"2rem",
            marginLeft:"10%",
            [theme.breakpoints.down("sm")]:{
                maxWidth:30
            }
        },
        estimateButton:{
            ...theme.typography.estimate,
            backgroundColor: theme.palette.common.orange,
            borderRadius: 50,
            height: 45,
            width: 145,
            marginRight: 40,
            "&:hover":{
                backgroundColor: theme.palette.secondary.light
            }
        },
        buttonContainer:{
            marginTop:"1rem"
        },
        learnButtonHero:{
            ...theme.typography.learnButton,
            fontSize:"0.9rem",
            height:45,
            width:145
        },
        learnButton:{
            ...theme.typography.learnButton,
            fontSize:"0.7rem",
            height : 30,
            padding : 3,
            [theme.breakpoints.down("sm")] : {
                marginBottom:"2rem"
            }
        },
        mainContainer:{
            marginTop:"5rem",
            [theme.breakpoints.down("md")]:{
                marginTop:"3rem"
            },
            [theme.breakpoints.down("xs")]:{
                marginTop:"2rem"
            }
        },
        heroTextContainer:{
            minWidth:"21.5rem",
            marginLeft:"1rem",
            [theme.breakpoints.down("xs")]:{
                marginLeft:0
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
        revolutionBackground:{
            backgroundImage:`url(${revolutionBackground})`,
            backgroundPosition:"center",
            backgroundSize:"cover",
            bacgroundRepeat:"no-repeat",
            height:"100%",
            width:"100%"
        },
        revolutionCard:{
            position:"absolute",
            boxShadow:theme.shadows[10],
            borderRadius:5,
            padding:"10rem",
            [theme.breakpoints.down("sm")]:{
                paddingTop:"8rem",
                paddingBottom:"8rem",
                paddingLeft:0,
                paddingRight:0,
                borderRadius:0,
                width:"100%"
            }
        },
        infoBackground:{
            backgroundImage:`url(${infoBackground})`,
            backgroundPosition:"center",
            backgroundSize:"cover",
            bacgroundRepeat:"no-repeat",
            height:"100%",
            width:"100%"
        }
    }
    return (
        <Grid container direction="column" sx={useStyles.mainContainer}>
            <Grid item> {/* HERO BLOCK*/}
                <Grid container direction="row" alignItems="center" justifyContent="flex-end">
                    <Grid sm item sx={useStyles.heroTextContainer}>
                        <Typography variant="h2" align="center">
                            Brinick West Coast Tecnology
                            <br/>
                            To the MidWest
                        </Typography>
                        <Grid container justifyContent="center" sx={useStyles.buttonContainer}>
                            <Grid item>
                                <Button sx={useStyles.estimateButton} variant="contained">
                                    Free Estimate
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" sx={useStyles.learnButtonHero}>
                                    <span style={{marginRight:10}}>
                                        Learn More
                                    </span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm sx={useStyles.animation} item>
                        <Box
                            component="img"
                            // sx={useStyles.icon}
                            alt="landing page" 
                            src={img_1}
                        />
                        <Box
                            component="img"
                            // sx={useStyles.icon}
                            alt="landing page" 
                            src={img_2}
                        />
                        <Box
                            component="img"
                            // sx={useStyles.icon}
                            alt="landing page" 
                            src={img_3}
                        />
                        <Box
                            component="img"
                            // sx={useStyles.icon}
                            alt="landing page" 
                            src={img_4}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/* Custom Software block*/}
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
                        <Button variant="outlined" sx={useStyles.learnButton}>
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
                        <Button variant="outlined" sx={useStyles.learnButton}>
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
            <Grid item> {/* WEBSIE Software block*/}
                <Grid container direction = "row" justifyContent={matchesSM ? "center" : undefined} sx={useStyles.serviceContainer}>
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5rem", textAlign: matchesSM ? "center" : undefined }}>
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
                        <Button variant="outlined" sx={useStyles.learnButton}>
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
                            alt="Website icon" 
                            src={websiteIcon}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                {/* The Revolution Block */}
                <Grid container style={{height:"100rem",marginTop:"12rem"}} alignItems="center" justifyContent="center">
                    <Card sx={useStyles.revolutionCard}>
                        <CardContent>
                            <Grid container direction="column" style={{textAlign:"center"}}>
                                <Grid item>
                                    {/* gutterBottom es un margin bottom */}
                                    <Typography variant="h3" gutterBottom> 
                                        The Revolution
                                    </Typography>
                                </Grid>
                                <Grid item >
                                    <Typography variant="subtitle1">
                                        Visionary insights couped with cutting-edge technology is a recipe for revolution
                                    </Typography>
                                    <Button variant="outlined" sx={useStyles.learnButton}>
                                        <span style={{marginRight:10}}>
                                            Learn More
                                        </span>
                                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Box
                        component="div"
                        sx={useStyles.revolutionBackground}
                    />
                </Grid>
            </Grid>
            <Grid item>
                {/* Informaciont block */}
                <Grid container style={{height:"80rem"}} alignItems="center" direction="row">
                    <Grid item container style={{position:"absolute",textAlign:matchesSM ? "center" : "inherit"}} direction={matchesSM? "column" : "row"} spacing={matchesSM ? 10 : 0}>
                        <Grid item sm style={{marginLeft: matchesSM ? 0 : "5rem"}}>
                            <Grid container direction="column">
                                <Typography variant="h2" style={{color:"white"}}>
                                    About Us
                                </Typography>
                                <Typography variant="subtitle2">
                                    Let's get personal
                                </Typography>
                                <Grid item>
                                    <Button variant="outlined" style={{color:"white",borderColor:"white"}} sx={useStyles.learnButton}>
                                        <span style={{marginRight:10}}>
                                            Learn More
                                        </span>
                                        <ButtonArrow width={10} height={10} fill={theme.palette.common.white}/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm style={{marginRight: matchesSM ? 0 : "5rem", textAlign: matchesSM ? "center" : "right"}}>
                            <Grid container direction="column">
                                <Typography variant="h2" style={{color:"white"}}>
                                    Contact Us
                                </Typography>
                                <Typography variant="subtitle2">
                                    Say Hello! 
                                </Typography>
                                <Grid item>
                                    <Button variant="outlined" style={{color:"white",borderColor:"white"}} sx={useStyles.learnButton}>
                                        <span style={{marginRight:10}}>
                                            Learn More
                                        </span>
                                        <ButtonArrow width={10} height={10} fill={theme.palette.common.white}/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Box
                        component="div"
                        sx={useStyles.infoBackground}
                    />
                </Grid>
            </Grid>
            <Grid item>
                {/* Call to action block */}
                <CallToAction/>
            </Grid>
        </Grid>
    )
}
