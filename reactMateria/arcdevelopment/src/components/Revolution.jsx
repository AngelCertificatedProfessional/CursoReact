import { useTheme } from '@mui/material/styles';
import {Box,Grid, Typography,useMediaQuery,IconButton} from '@mui/material'
import vision from '../assets/vision.svg'
import consultation from '../assets/consultationIcon.svg'
import mockup from '../assets/mockupIcon.svg'
import review from '../assets/reviewIcon.svg'
import design from '../assets/designIcon.svg'
import build from '../assets/buildIcon.svg'
import launch from '../assets/launchIcon.svg'
import maintain from '../assets/maintainIcon.svg'
import iterate from '../assets/iterateIcon.svg'

export const Revolution = () => {
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
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
                <Typography align={matchesMD ? "center" : undefined} variant="h2" style={{fontFamily:"Pacifico"}}>
                    The Revolution
                </Typography>
            </Grid>
            <Grid item container direction={matchesMD ? "column": "row"} alignItems="center" 
            sx={useStyles.rowContainer} style={{marginTop:"5rem"}}>
                <Grid item lg>
                    <Box
                        sx={useStyles.icon}
                        component="img"
                        style= {{
                            maxWidth: matchesMD ? 300:"40rem",
                            marginRight: matchesMD ? 0 : "5rem",
                            marginBottom: matchesMD ? "5rem" : 0,
                        }}
                        alt="mountain htought binoculars" 
                        src={vision}
                    />
                </Grid>
                <Grid item container direction="column" lg style={{maxWidth:"40rem" }}>
                    <Grid item> 
                        <Typography align={matchesMD ? "center":"right"} variant="h4" gutterBottom>
                            Vision
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center":"right"} variant="body1" paragraph>
                            The rise of computers, and subsequently the internet, has completely altered
                            every aspect of human life. This has increased our comfort, broadened our connections, and 
                            reshaped how we view the world.
                        </Typography>
                        <Typography align={matchesMD ? "center":"right"} variant="body1" paragraph>
                            What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. 
                            Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.
                        </Typography>
                        <Typography align={matchesMD ? "center":"right"}  variant="body1" paragraph>
                            We want to help busineses capitalize on the latest and greatest technology. The best way to predict
                            the future is to be the one building it, and we want to help guide the world int othis next chapter of technological expansion, 
                            exploration, and innovation.
                        </Typography>
                        <Typography align={matchesMD ? "center":"right"} variant="body1" paragraph>
                            By hoilding ourselves to rigorous standars and pritine quality, we can ensure you have the 
                            absolute best tools necessary to thrive in this new frontier.
                        </Typography>

                        <Typography align={matchesMD ? "center":"right"}  variant="body1" paragraph>
                            We see a future where every individual has persnalized software custom tailored to ther lifestyle, cultre, and 
                            interests, helping them overcome life;s obstacles. Each project is a step towards that goal.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column": "row"} alignItems="center" 
                sx={useStyles.rowContainer} style={{marginTop:"10rem",marginBottom:"10rem"}}>
                <Grid item container direction="column" lg style={{maxWidth:"40rem"}}>
                    <Grid item>
                        <Typography align={matchesMD ? "center":undefined} variant="h4" gutterBottom>
                            Technology
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center":undefined} variant="body1" paragraph>
                            In 2013 The rise of computers, and subsequently the internet, has completely altered
                            every aspect of human life. This has increased our comfort, broadened our connections, and 
                            reshaped how we view the world.
                        </Typography>
                        <Typography align={matchesMD ? "center":undefined} variant="body1" paragraph>
                            What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. 
                            Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.
                        </Typography>
                        <Typography align={matchesMD ? "center":undefined} variant="body1" paragraph>
                            We want to help busineses capitalize on the latest and greatest technology. The best way to predict
                            the future is to be the one building it, and we want to help guide the world int othis next chapter of technological expansion, 
                            exploration, and innovation.
                        </Typography>
                        <Typography align={matchesMD ? "center":undefined} variant="body1" paragraph>
                            By hoilding ourselves to rigorous standars and pritine quality, we can ensure you have the 
                            absolute best tools necessary to thrive in this new frontier.
                        </Typography>

                        <Typography align={matchesMD ? "center":undefined} variant="body1" paragraph>
                            We see a future where every individual has persnalized software custom tailored to ther lifestyle, cultre, and 
                            interests, helping them overcome life;s obstacles. Each project is a step towards that goal.
                        </Typography>
                        <Typography align={matchesMD ? "center":undefined} variant="body1" paragraph>
                            By hoilding ourselves to rigorous standars and pritine quality, we can ensure you have the 
                            absolute best tools necessary to thrive in this new frontier.
                        </Typography>

                        <Typography align={matchesMD ? "center":undefined} variant="body1" paragraph>
                            We see a future where every individual has persnalized software custom tailored to ther lifestyle, cultre, and 
                            interests, helping them overcome life;s obstacles. Each project is a step towards that goal.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container justifyContent={matchesMD ? "center":"flex-end"} lg>
                    <Box
                        sx={useStyles.icon}
                        component="img"
                        style= {{
                            maxWidth: matchesMD ? 300:"40rem",
                            margin:0
                        }}
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
            <Grid item container direction= {matchesMD ? "column" : "row"}
                sx={useStyles.rowContainer} style={{backgroundColor:"#B3B3B3",height:"90rem"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography variant="h4" gutterBottom 
                        align={matchesMD ? "center":undefined}
                        style={{color:"#000",marginTop:"5rem"}}>
                            Consultation
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" 
                            align={matchesMD ? "center":undefined}
                            style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            In 2013 The rise of computers, and subsequently the internet, has completely altered
                            every aspect of human life. This has increased our comfort, broadened our connections, and 
                            reshaped how we view the world.
                        </Typography>
                        <Typography variant="body1" 
                            align={matchesMD ? "center":undefined}
                            style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. 
                            Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.
                        </Typography>
                        <Typography variant="body1" 
                            align={matchesMD ? "center":undefined}
                            style={{color:"#fff",maxWidth:"20rem"}} paragraph>
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
                        width="100%"
                        style={{maxWidth:700}}
                    />
                </Grid>
            </Grid>

            <Grid item container direction= {matchesMD ? "column" : "row"} 
                sx={useStyles.rowContainer} style={{backgroundColor:"#FF7373",height:"90rem"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography align={matchesMD ? "center":undefined} 
                            variant="h4" 
                            gutterBottom style={{color:"#000",marginTop:"5rem"}}>
                            Mockup
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography 
                            align={matchesMD ? "center":undefined}
                            variant="body1" style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            In 2013 The rise of computers, and subsequently the internet, has completely altered
                            every aspect of human life. This has increased our comfort, broadened our connections, and 
                            reshaped how we view the world.
                        </Typography>
                        <Typography variant="body1" 
                            align={matchesMD ? "center":undefined}
                            style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. 
                            Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.
                        </Typography>
                        <Typography variant="body1" 
                            align={matchesMD ? "center":undefined}
                            style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            We want to help busineses capitalize on the latest and greatest technology. The best way to predict
                            the future is to be the one building it, and we want to help guide the world int othis next chapter of technological expansion, 
                            exploration, and innovation.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <Box
                        component="img"
                        alt="basic website design outline" 
                        src={mockup}
                        width="100%"
                        style={{maxWidth:1000}}
                    />
                </Grid>
            </Grid>

            <Grid item container direction= {matchesMD ? "column" : "row"} 
                sx={useStyles.rowContainer} style={{backgroundColor:"#39B54A",height:"90rem"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography align={matchesMD ? "center":undefined} 
                            variant="h4" gutterBottom style={{color:"#000",marginTop:"5rem"}}>
                            Review
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center":undefined} 
                            variant="body1" style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            In 2013 The rise of computers, and subsequently the internet, has completely altered
                            every aspect of human life. This has increased our comfort, broadened our connections, and 
                            reshaped how we view the world.
                        </Typography>
                        <Typography align={matchesMD ? "center":undefined} 
                            variant="body1" style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. 
                            Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.
                        </Typography>
                        <Typography align={matchesMD ? "center":undefined} 
                            variant="body1" style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            We want to help busineses capitalize on the latest and greatest technology. The best way to predict
                            the future is to be the one building it, and we want to help guide the world int othis next chapter of technological expansion, 
                            exploration, and innovation.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <Box
                        component="img"
                        alt="magnifying glass" 
                        src={review}
                        width="100%"
                    />
                </Grid>
            </Grid>

            <Grid item container direction= {matchesMD ? "column" : "row"} 
                sx={useStyles.rowContainer} style={{backgroundColor:"#A67C52",height:"90rem"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography align={matchesMD ? "center":undefined} 
                            variant="h4" gutterBottom style={{color:"#000",marginTop:"5rem"}}>
                            Design
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center":undefined} 
                            variant="body1" style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            In 2013 The rise of computers, and subsequently the internet, has completely altered
                            every aspect of human life. This has increased our comfort, broadened our connections, and 
                            reshaped how we view the world.
                        </Typography>
                        <Typography align={matchesMD ? "center":undefined} 
                            variant="body1" style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. 
                            Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <Box
                        component="img"
                        alt="magnifying glass" 
                        src={design}
                        style={{maxWidth:1000}}
                        width="100%"
                    />
                </Grid>
            </Grid>
            <Grid item container direction= {matchesMD ? "column" : "row"} 
                sx={useStyles.rowContainer} style={{backgroundColor:"#39B54A",height:"90rem"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography 
                            align={matchesMD ? "center":undefined} 
                            variant="h4" gutterBottom style={{color:"#000",marginTop:"5rem"}}>
                            Review
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography 
                            align={matchesMD ? "center":undefined}
                            variant="body1" style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            In 2013 The rise of computers, and subsequently the internet, has completely altered
                            every aspect of human life. This has increased our comfort, broadened our connections, and 
                            reshaped how we view the world.
                        </Typography>
                        <Typography 
                            align={matchesMD ? "center":undefined}
                            variant="body1" style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. 
                            Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <Box
                        component="img"
                        alt="magnifying glass" 
                        src={review}
                        width="100%"
                    />
                </Grid>
            </Grid>
            <Grid item container direction= {matchesMD ? "column" : "row"} 
                sx={useStyles.rowContainer} style={{backgroundColor:"#FBB03B",height:"90rem"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography 
                            align={matchesMD ? "center":undefined} 
                            variant="h4" gutterBottom style={{color:"#000",marginTop:"5rem"}}>
                            Build
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography 
                            align={matchesMD ? "center":undefined} 
                            variant="body1" style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            In 2013 The rise of computers, and subsequently the internet, has completely altered
                            every aspect of human life. This has increased our comfort, broadened our connections, and 
                            reshaped how we view the world.
                        </Typography>
                        <Typography 
                            align={matchesMD ? "center":undefined} 
                            variant="body1" style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. 
                            Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <Box
                        component="img"
                        alt="construction side" 
                        src={build}
                        width="100%"
                        style={{maxWidth: matchesMD ? 700 : 1000}}
                    />
                </Grid>
            </Grid>

            <Grid item container direction= {matchesMD ? "column" : "row"} 
                sx={useStyles.rowContainer} style={{backgroundColor:"#C1272D",height:"90rem"}}>
                <Grid item container direction="column" 
                    alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography 
                            align={matchesMD ? "center":undefined} 
                            variant="h4" gutterBottom 
                            style={{color:"#000",marginTop:"5rem"}}>
                            Launch
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography 
                            align={matchesMD ? "center":undefined}
                            variant="body1" style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            In 2013 The rise of computers, and subsequently the internet, has completely altered
                            every aspect of human life. This has increased our comfort, broadened our connections, and 
                            reshaped how we view the world.
                        </Typography>
                        <Typography 
                            align={matchesMD ? "center":undefined}
                            variant="body1" style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. 
                            Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.
                        </Typography>
                        <Typography 
                            align={matchesMD ? "center":undefined}
                            variant="body1" style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. 
                            Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <Box
                        component="img"
                        alt="construction side" 
                        src={launch}
                        style={{maxWidth: 200}}
                        width="100%"
                    />
                </Grid>
            </Grid>

            <Grid item container direction= {matchesMD ? "column" : "row"} 
                sx={useStyles.rowContainer} style={{backgroundColor:"#8E45CE",height:"90rem"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography align={matchesMD ? "center":undefined} 
                            variant="h4" gutterBottom style={{color:"#000",marginTop:"5rem"}}>
                            Maintain
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography 
                            align={matchesMD ? "center":undefined} 
                            variant="body1" style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            In 2013 The rise of computers, and subsequently the internet, has completely altered
                            every aspect of human life. This has increased our comfort, broadened our connections, and 
                            reshaped how we view the world.
                        </Typography>
                        <Typography 
                            align={matchesMD ? "center":undefined}
                            variant="body1" style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. 
                            Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.
                        </Typography>
                        <Typography 
                            align={matchesMD ? "center":undefined}
                            variant="body1" style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. 
                            Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <Box
                        component="img"
                        alt="construction side" 
                        src={maintain}
                        width="100%"
                        style={{maxWidth: 500}}
                    />
                </Grid>
            </Grid>

            <Grid item container direction= {matchesMD ? "column" : "row"} 
                sx={useStyles.rowContainer} style={{backgroundColor:"#29ABE2",height:"90rem"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography 
                            align={matchesMD ? "center":undefined} 
                            variant="h4" gutterBottom style={{color:"#000",marginTop:"5rem"}}>
                            Iterate
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography 
                            align={matchesMD ? "center":undefined}
                            variant="body1" style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            In 2013 The rise of computers, and subsequently the internet, has completely altered
                            every aspect of human life. This has increased our comfort, broadened our connections, and 
                            reshaped how we view the world.
                        </Typography>
                        <Typography 
                            align={matchesMD ? "center":undefined}
                            variant="body1" style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. 
                            Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.
                        </Typography>
                        <Typography 
                            align={matchesMD ? "center":undefined}
                            variant="body1" style={{color:"#fff",maxWidth:"20rem"}} paragraph>
                            What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. 
                            Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <Box
                        component="img"
                        alt="falling dominoes" 
                        src={iterate}
                        width="100%"
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}
