import { Link } from 'react-router-dom'; 
import { useTheme } from '@mui/material/styles';
import {Box,Grid, Typography,useMediaQuery,IconButton} from '@mui/material'
import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import analytics from '../assets/analytics.svg'
import seo from '../assets/seo.svg'
import outreach from '../assets/outreach.svg'
import ecommerce from '../assets/ecommerce.svg'
import { CallToAction } from './ui/CallToAction';

export const Websites = (props) => {
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
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
        paragraphContainer:{
            maxWidth:"30rem"
        }
    }
    return (
        <Grid container direction="column">
            <Grid item container direction="row" justifyContent={matchesMD ? "center" : undefined} sx={useStyles.rowContainer} style={{marginTop:matchesXS ? "1rem" : "2rem"}}>
                {/* el display xs:md remplaza al tmano de los hidden mdDown que significa que no sea visible para las ventanas mobiles*/}
                <Grid item sx={[useStyles.arrowContainer,{ display: { xs: 'none', md: 'block' } }]}  style={{marginRight:"1rem",marginLeft:"-3.5rem"}}>
                    <IconButton style={{backgroundColor:"transparent"}} onClick={() => props.setSelectedIndex(2)} component={Link} to="/mobileapps">
                        <Box
                            sx={useStyles.icon}
                            component="img"
                            // sx={useStyles.icon}
                            alt="ios/android developnt" 
                            src={backArrow}
                        />
                    </IconButton>
                </Grid>
                <Grid item container direction="column" sx={useStyles.heading}>
                    <Grid item>
                        <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                            Website Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                           Having a website is a necessity in today's business world. They give yoyu one centrarl, publicl
                           location to let people know who you are, what you do, and why yu're the best at it
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            From simply having your hours posted to having a full fledged online store, making yourself as 
                            possible to users online drives growth and enables you to reach new customers.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item sx={[useStyles.arrowContainer,{ display: { xs: 'none', md: 'block' }}]}>
                    <IconButton style={{backgroundColor:"transparent"}} component={Link} to="/services" onClick={() => props.setSelectedIndex(0)}>
                        <Box
                            sx={useStyles.icon}
                            component="img"
                            // sx={useStyles.icon}
                            alt="Forward to Services page" 
                            src={forwardArrow}
                        />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"} alignItems="center" sx={useStyles.rowContainer} style={{marginTOp:'15rem'}}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant="h4" gutterBottom>
                                Analytics
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h4" gutterBottom>
                                <Box
                                    sx={useStyles.icon}
                                    component="img"
                                    style={{marginLeft:"-2.7rem"}}
                                    alt="graph with magnifying glass revealing 1 and 0" 
                                    src={analytics}
                                />
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item  sx={useStyles.paragraphContainer}>
                    <Typography align={matchesMD ? "center" : undefined} variant="body1">
                        Knowledge is power, and data is 21st century gold. Analyzing this data 
                        can reveal hidden patterns and trends in your business empowering you
                        to make smarter decisions with measurable effects.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"} alignItems="center" sx={useStyles.rowContainer} justifyContent="flex-end" style={{marginBottom:"15rem",marginTop:"15rem"}}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>
                                E-commerce
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h4" gutterBottom>
                                <Box
                                    sx={useStyles.icon}
                                    component="img"
                                    alt="world outline made of dollar signs" 
                                    src={ecommerce}
                                />
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{marginLeft:"1rem"}} sx={useStyles.paragraphContainer}>
                    <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                        It's no secret that people like to shop online
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                        In 2017 over $2.3 trillon was spent in e-commerce, and it's time for your slice of that
                        pie.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"} alignItems="center" sx={useStyles.rowContainer}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant="h4" gutterBottom>
                                Outreach
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h4" gutterBottom>
                                <Box
                                    sx={useStyles.icon}
                                    component="img"
                                    alt="graph with magnifying glass revealing 1 and 0" 
                                    src={outreach}
                                />
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{marginLeft: matchesMD ? 0 : "1rem"}} sx={useStyles.paragraphContainer}>
                    <Typography align={matchesMD ? "center" : undefined} variant="body1">
                        Draw people in with a dazzling website, showing off your products online is a great
                        way to help customers decde wahts right for them before visiting in person.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"} alignItems="center" sx={useStyles.rowContainer} justifyContent="flex-end" style={{marginTop:"15rem",marginBottom:"15rem"}}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>
                                Search Engine <br/> Optimization
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h4" gutterBottom>
                                <Box
                                    sx={useStyles.icon}
                                    component="img"
                                    alt="website standing on winner;s podium" 
                                    src={seo}
                                />
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{marginLeft: matchesMD ? 0 : "1rem"}} sx={useStyles.paragraphContainer}>
                    <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                        How often have you ever been to the second page of Google results?
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                        If you're like us problably never.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                        Customers don't go there either, so we make sure your website is designet to end up on top.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={props.setValue}/>
            </Grid>
        </Grid>
    )
}
