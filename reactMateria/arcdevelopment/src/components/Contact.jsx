import { Link } from 'react-router-dom'; 
import { TextField,Box, Grid, Button, Typography, useMediaQuery, Card, CardContent } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import background from '../assets/background.jpg'
import phoneIcon from '../assets/phone.svg'
import emailIcon from '../assets/email.svg'

export const Contact = () => {
    const theme = useTheme();
    const useStyles = {
        background:{
            backgroundImage:`url(${background})`,
            backgroundPosition:"center",
            backgroundSize:"cover",
            bacgroundRepeat:"no-repeat",
            height:"60rem",
        }
    }
  return (
    <Grid container direction="row">
        <Grid item container direction="column" justifyContent="center" lg={3}>
            <Grid item>
                <Typography variant='h2' style={{lineHeight:1}}>
                    Contact us
                </Typography>
                <Typography variant='body1' style={{color:theme.palette.common.blue}}>
                    We're waiting
                </Typography>
            </Grid>
            <Grid item container>
                <Grid item>
                    <Box
                        component="img"
                        // sx={useStyles.icon}
                        alt="landing page" 
                        src={phoneIcon}
                        style={{marginRight:"0.5rem"}}
                    />
                </Grid>
                <Grid item>
                    <Typography variant="body1" style={{color:theme.palette.common.blue,fontSize:"1rem"}}>
                        (555) 555-5555
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container>
                <Grid item>
                    <Box
                        component="img"
                        // sx={useStyles.icon}
                        alt="ENVELOPE" 
                        src={emailIcon}
                        style={{marginRight:"0.5rem",verticalAlign:"bottom"}}
                    />
                </Grid>
                <Grid item>
                    <Typography variant="body1" style={{color:theme.palette.common.blue,fontSize:"1rem"}}>
                        ZACHARY@GMAIL.COM
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item container sx={useStyles.background} lg={9}></Grid>
    </Grid>
  )
}
