import { Link } from 'react-router-dom'; 
import { useTheme } from '@mui/material/styles';
import {Box,Grid, Typography,useMediaQuery,IconButton} from '@mui/material'
import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import lightbulb from '../assets/bulb.svg'
import cash from '../assets/cash.svg'
import stopwatch from '../assets/stopwatch.svg'
import roots from '../assets/root.svg'
import { CallToAction } from './ui/CallToAction'

export const CustomSoftware = (props) => {
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
    const useStyles = {
        heading:{
            maxWidth:"40rem"
        },
        arrowContainer:{
            marginTop:"0.5rem"
        },
        rowContainer:{
            paddingLeft:"5rem",
            paddingRight:"5rem",
            [theme.breakpoints.down("md")]:{
                paddingLeft:'1.5rem',
                paddingRight:'1.5rem'
            }
        },
        itemContainer:{
            maxWidth:"40rem"
        }
    }
    return (
        <Grid container direction="column">
            <Grid item container direction="row" justifyContent={matchesMD ? "center" : undefined} sx={useStyles.rowContainer} style={{marginTop:matchesXS ? "1rem" : "2rem"}}>
                {/* el display xs:md remplaza al tmano de los hidden mdDown que significa que no sea visible para las ventanas mobiles*/}
                <Grid item sx={[useStyles.arrowContainer,{ display: { xs: 'none', md: 'block' } }]}  style={{marginRight:"1rem",marginLeft:"-3.5rem"}}>
                    <IconButton style={{backgroundColor:"transparent"}} onClick={() => props.setSelectedIndex(0)} component={Link} to="/services">
                        <Box
                            sx={useStyles.icon}
                            component="img"
                            // sx={useStyles.icon}
                            alt="back to services page" 
                            src={backArrow}
                        />
                    </IconButton>
                </Grid>
                <Grid item container direction="column" sx={useStyles.heading}>
                    <Grid item>
                        <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                            Custom Software Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Whether we're replacing old software or inventing new solutions, 
                            Arc Development is here to herlp your businnes takel technology
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Using regular commercial software leaves you with a lot of stuff
                            you don't need, without some of the stuff you do need and 
                            ultimately controls the way you work. 
                            Without using apy software at all you risk falling behing 
                            competitors and missing out on huge savings from increased efficiency.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            We creaate exactly what you what , exactly how you want
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item sx={[useStyles.arrowContainer,{ display: { xs: 'none', md: 'block' }}]}>
                    <IconButton style={{backgroundColor:"transparent"}} component={Link} to="/mobileapps" onClick={() => props.setSelectedIndex(2)}>
                        <Box
                            sx={useStyles.icon}
                            component="img"
                            // sx={useStyles.icon}
                            alt="Forward to iOs/Android App Development Page " 
                            src={forwardArrow}
                        />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item container direction="row" justifyContent="center" style={{marginTop:"15rem",marginBottom:"20rem"}} sx={useStyles.rowContainer}>
                <Grid item container direction="column" md alignItems="center" style={{maxWidth:"40rem"}}>
                    <Grid item>
                        <Typography variant="h4"> Save Energy</Typography>
                    </Grid>
                    <Grid item>
                        <Box
                            sx={useStyles.icon}
                            component="img"
                            // sx={useStyles.icon}
                            alt="lightbulb" 
                            src={lightbulb}
                        />
                    </Grid>
                </Grid>
                <Grid item container direction="column" md alignItems="center" style={{maxWidth:"40rem",marginTop:matchesSM ? "10rem": 0,marginBottom:matchesSM ? "10rem": 0}}>
                    <Grid item>
                        <Typography variant="h4"> Save Time</Typography>
                    </Grid>
                    <Grid item>
                        <Box
                            sx={useStyles.icon}
                            component="img"
                            // sx={useStyles.icon}
                            alt="stopwatch" 
                            src={stopwatch}
                        />
                    </Grid>
                </Grid>
                <Grid item container direction="column" md alignItems="center" style={{maxWidth:"40rem"}}>
                    <Grid item>
                        <Typography variant="h4"> Save Money</Typography>
                    </Grid>
                    <Grid item>
                        <Box
                            sx={useStyles.icon}
                            component="img"
                            // sx={useStyles.icon}
                            alt="cash" 
                            src={cash}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container 
                alignItems={matchesMD ? "center" : undefined} 
                direction={ matchesMD ? "column":"row"} 
                justifyContent="space-between" 
                sx={useStyles.rowContainer}
                >
                <Grid item container 
                    direction={matchesSM ? "column" : "row"}
                    sx={useStyles.itemContainer} 
                    style={{marginBottom: matchesMD ? "15rem" : 0}} 
                    md>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesMD ? "center" : undefined}>
                                Digital documents & data
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                                Reduce Errors. Reduce Waste. Reduce Costs.
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                                Billions area spent annyally on the purchasing, printing and distribution
                                of paper. On top of the massive environment impact this has, it causes harm yo your bottom line as well.
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                                By utilizin digital forms and documents you can remove these 
                                obsolete expenses, accelerate your comunication, and help the 
                                Earth.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container sx={useStyles.itemContainer} md direction={matchesSM ? "column" : "row"}>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesMD ? "center" : "right"} >
                                Scale
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesMD ? "center" : "right"} paragraph>
                                Whether you're a large brand, just getting started, or taking off right now, our application architecture
                                ensures pain-free growth and reliability.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction="row" style={{marginTop:"20rem", marginBottom:"20rem"}} sx={useStyles.rowContainer}>
                <Grid item container direction="column" alignItems="center">
                    <Grid item>
                        <Box
                            sx={useStyles.icon}
                            component="img"
                            // sx={useStyles.icon}
                            alt="tree with roots extending out" 
                            src={roots}
                            height={matchesMD ? "30rem" : "45rem"}
                            width={matchesMD ? "30rem": "45rem"}
                        />
                    </Grid>
                    <Grid itemsx={useStyles.itemContainer}>
                        <Typography variant="h4" align='center' gutterBottom>
                            Root-Couse Analysis
                        </Typography>
                        <Typography variant="body1" align='center' gutterBottom>
                            Many problems are merely symptoms of larger, underlying issues.
                        </Typography>
                        <Typography variant="body1" align='center' gutterBottom>
                            We can help yoyu throroughly examine all areas of yout business to develop a 
                            holistic plan for the most effective implementation of technology.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container 
                justifyContent="space-between"                 
                alignItems={matchesMD ? "center" : undefined} 
                direction={ matchesMD ? "column": "row"} 
                style={{marginBottom:"12rem"}}
                sx={useStyles.rowContainer}
                
                >
                <Grid item container 
                    direction={matchesSM ? "column" : "row"}
                    sx={useStyles.itemContainer} 
                    style={{marginBottom: matchesMD ? "15rem" : 0}} md>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesMD ? "center" : undefined}>
                                Automation
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                                Why waste time when you don't have to
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                                We can help you identify processes with time or event based actions which can now easily be automated
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                                Incresing efficiency increases profits, leaving you more time to focus on your businees, not busywork 
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container sx={useStyles.itemContainer} direction={matchesSM ? "column" : "row"} md>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesMD ? "center" : "right"}>
                                User Experience Design
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesMD ? "center" : "right"} paragraph>
                                A good design that isn't usable isn't a good designt
                            </Typography>
                            <Typography variant="body1" align={matchesMD ? "center" : "right"} paragraph>
                                So shy are so many pieces of software pcomplicated, confusing, and frustrating?
                            </Typography>
                            <Typography variant="body1" align={matchesMD ? "center" : "right"} paragraph>
                                By prioritizing users and the real ways they interact with technology we're able to develop unique, personable 
                                experiences that solve problems rather than create new ones
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue = {props.setValue}/>
            </Grid>
        </Grid>
    )
}
