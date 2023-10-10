import { useTheme } from '@mui/material/styles';
import {Box,Grid, Typography,useMediaQuery,IconButton} from '@mui/material'
import vision from '../assets/vision.svg'
import consultation from '../assets/consultationIcon.svg'

export const Revolution = () => {
    const theme = useTheme()
    const useStyles = {
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
            <Grid item sx={useStyles.rowContainer} style={{marginTop:"2rem"}}>
                <Typography variant="h2" style={{fontFamily:"Pacifico"}}>
                    The Revolution
                </Typography>
            </Grid>
            <Grid item container direction="row" alignItems="center" sx={useStyles.rowContainer}>
                <Grid item lg>
                    <Box
                        sx={useStyles.icon}
                        component="img"
                        style={{maxWidth:"40rem",marginRight:"5rem"}}
                        alt="mountain htought binoculars" 
                        src={vision}
                    />
                </Grid>
                <Grid item container direction="column" lg style={{maxWidth:"40rem"}}>
                    <Grid item>
                        <Typography align="right" variant="h4" gutterBottom>
                            Vision
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align="right"  variant="body1" paragraph>
                            The rise of computers, and subsequently the internet, has completely altered
                            every aspect of human life. This has increased our comfort, broadened our connections, and 
                            reshaped how we view the world.
                        </Typography>
                        <Typography align="right"  variant="body1" paragraph>
                            What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. 
                            Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.
                        </Typography>
                        <Typography align="right"  variant="body1" paragraph>
                            We want to help busineses capitalize on the latest and greatest technology. The best way to predict
                            the future is to be the one building it, and we want to help guide the world int othis next chapter of technological expansion, 
                            exploration, and innovation.
                        </Typography>
                        <Typography align="right"  variant="body1" paragraph>
                            By hoilding ourselves to rigorous standars and pritine quality, we can ensure you have the 
                            absolute best tools necessary to thrive in this new frontier.
                        </Typography>

                        <Typography align="right"  variant="body1" paragraph>
                            We see a future where every individual has persnalized software custom tailored to ther lifestyle, cultre, and 
                            interests, helping them overcome life;s obstacles. Each project is a step towards that goal.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction="row" alignItems="center" sx={useStyles.rowContainer}>
                <Grid item container direction="column" lg style={{maxWidth:"40rem"}}>
                    <Grid item>
                        <Typography align="right" variant="h4" gutterBottom>
                            Technology
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph>
                            In 2013 The rise of computers, and subsequently the internet, has completely altered
                            every aspect of human life. This has increased our comfort, broadened our connections, and 
                            reshaped how we view the world.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. 
                            Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We want to help busineses capitalize on the latest and greatest technology. The best way to predict
                            the future is to be the one building it, and we want to help guide the world int othis next chapter of technological expansion, 
                            exploration, and innovation.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            By hoilding ourselves to rigorous standars and pritine quality, we can ensure you have the 
                            absolute best tools necessary to thrive in this new frontier.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            We see a future where every individual has persnalized software custom tailored to ther lifestyle, cultre, and 
                            interests, helping them overcome life;s obstacles. Each project is a step towards that goal.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            By hoilding ourselves to rigorous standars and pritine quality, we can ensure you have the 
                            absolute best tools necessary to thrive in this new frontier.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            We see a future where every individual has persnalized software custom tailored to ther lifestyle, cultre, and 
                            interests, helping them overcome life;s obstacles. Each project is a step towards that goal.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container justifyContent="flex-end" lg>
                    <Box
                        sx={useStyles.icon}
                        component="img"
                        style={{maxWidth:"40rem",margin:0}}
                        alt="mountain htought binoculars" 
                        src={vision}
                    />
                </Grid>
            </Grid>
            <Grid item container direction="row" justifyContent="center" sx={useStyles.rowContainer}>
                <Grid item>
                    <Typography variant="h4" gutterBottom>
                        Process
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container direction="row" sx={useStyles.rowContainer} style={{backgroundColor:"#B3B3B3",height:"90rem"}}>
                <Grid item container direction="column" lg>
                    <Grid item>
                        <Typography variant="h4" gutterBottom style={{color:"#000",marginTop:"5rem"}}>
                            Consulation
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            In 2013 The rise of computers, and subsequently the internet, has completely altered
                            every aspect of human life. This has increased our comfort, broadened our connections, and 
                            reshaped how we view the world.
                        </Typography>
                        <Typography variant="body1" style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. 
                            Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.
                        </Typography>
                        <Typography variant="body1" style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            We want to help busineses capitalize on the latest and greatest technology. The best way to predict
                            the future is to be the one building it, and we want to help guide the world int othis next chapter of technological expansion, 
                            exploration, and innovation.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <Box
                        component="img"
                        alt="hanshake" 
                        src={consultation}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}
