import { Link } from 'react-router-dom'; 
import { useTheme } from '@mui/material/styles';
import {Box,Grid, Typography,useMediaQuery,IconButton} from '@mui/material'
import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import swiss from '../assets/swissKnife.svg'
import access from '../assets/extendAccess.svg'
import engagement from '../assets/increaseEngagement.svg'
import { CallToAction } from './ui/CallToAction'

export const MobileApps = (props) => {
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
    }
    return (
        <Grid container direction="column">
            <Grid item container direction="row" justifyContent={matchesMD ? "center" : undefined} sx={useStyles.rowContainer} style={{marginTop:matchesXS ? "1rem" : "2rem"}}>
                {/* el display xs:md remplaza al tmano de los hidden mdDown que significa que no sea visible para las ventanas mobiles*/}
                <Grid item sx={[useStyles.arrowContainer,{ display: { xs: 'none', md: 'block' } }]}  style={{marginRight:"1rem",marginLeft:"-3.5rem"}}>
                    <IconButton style={{backgroundColor:"transparent"}} onClick={() => props.setSelectedIndex(1)} component={Link} to="/customsoftware">
                        <Box
                            sx={useStyles.icon}
                            component="img"
                            // sx={useStyles.icon}
                            alt="back to custom software development page" 
                            src={backArrow}
                        />
                    </IconButton>
                </Grid>
                <Grid item container direction="column" sx={useStyles.heading}>
                    <Grid item>
                        <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                            iOs/Android App Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Mobile apps allow you to take your tools on the go.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Whether you want an app for your customers, emplyees, or yourself, we can build 
                            cros-platform native solutions for any part of your business process. this opens you up
                            to a whole new world of possibilities by taking advantage of phone features like the camera, GPS,
                            push notifications, and more
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Convenience. Conection
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item sx={[useStyles.arrowContainer,{ display: { xs: 'none', md: 'block' }}]}>
                    <IconButton style={{backgroundColor:"transparent"}} component={Link} to="/websites" onClick={() => props.setSelectedIndex(3)}>
                        <Box
                            sx={useStyles.icon}
                            component="img"
                            // sx={useStyles.icon}
                            alt="Forward to website development page " 
                            src={forwardArrow}
                        />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"} sx={useStyles.rowContainer} style={{marginTop:"15rem",marginBottom:"15rem"}}>
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h4" gutterBottom>
                           Integration
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                            Our technology enables an innate interconnection between web and mobile applications, puttoing everything you need right in one convenient place.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                            This allows you to extend your reach, reinvent interactons, and develop a stronger relationship with your users than ever before.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : "right"} variant="h4" gutterBottom>
                           Simultaneous platform support
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : "right"} variant="body1" gutterBottom>
                            Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets - all at the same time
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : "right"} variant="body1" gutterBottom>
                            This significantly reduces costs and creates a more unified brand experience across all devices.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"} sx={useStyles.rowContainer}
                style={{marginBottom:"15rem"}}>
                <Grid item container direction="column" alignItems="center" md>
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Extend Functionality
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Box
                            sx={useStyles.icon}
                            component="img"
                            // sx={useStyles.icon}
                            alt="swiss army knife" 
                            src={swiss}
                        />
                    </Grid>
                </Grid>
                <Grid item container direction="column" md alignItems="center" style={{marginTop:matchesMD ? "10rem" : 0,marginBottom: matchesMD ? "10rem" : 0}}>
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Extend Access
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Box
                            sx={useStyles.icon}
                            component="img"
                            // sx={useStyles.icon}
                            alt="tear-one -off sign" 
                            src={access}
                            style={{maxWidth: matchesXS ? "20rem" : "28rem"}}
                        />
                    </Grid>
                </Grid>
                <Grid item container direction="column" md alignItems="center">
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Extend Engagement
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Box
                            sx={useStyles.icon}
                            component="img"
                            // sx={useStyles.icon}
                            alt="" 
                            src={engagement}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={props.setValue}/>
            </Grid>
        </Grid>
    )
}
