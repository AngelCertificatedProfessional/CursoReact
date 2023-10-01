import {Grid, Typography,Button,useMediaQuery} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import ButtonArrow from './ButtonArrow';
import background from '../../assets/background.jpg'
import mobileBackground from '../../assets/mobileBackground.jpg'
import { Link } from 'react-router-dom'; 

export const CallToAction = (props) => {
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
        background:{
            backgroundImage:`url(${background})`,
            backgroundPosition:"center",
            backgroundSize:"cover",
            bacgroundRepeat:"no-repeat",
            backgroundAttachment:"fixed",
            height:"60rem",
            width:"100%",
            [theme.breakpoints.down("md")]:{
                backgroundImage:`url(${mobileBackground})`,
                backgroundAttachment:"inherit",
            }
        },
        estimateButton:{
            ...theme.typography.estimate,
            borderRadius:50,
            height:80,
            width:205,
            backgroundColor:theme.palette.common.orange,
            fontSize:"1.5rem",
            marginRight:"5rem",
            marginLeft:"2rem",
            "&:hover":{
                backgroundColor: theme.palette.secondary.light
            },
            [theme.breakpoints.down("sm")]:{
                marginRight:0,
                marginLeft:0,
            }
        }
    }
    return (
        <Grid container alignItems="center" justifyContent={matchesSM ? "center" : "space-between"} sx={useStyles.background} direction={matchesSM ? "column" : "row"}>
            <Grid item style={{marginLeft: matchesSM ? 0 : "5rem", textAlign: matchesSM ? "center" : "inherit"}} >
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h2">
                            Simple Software <br/> Revolutionary
                        </Typography>
                        <Typography variant="subtitle2" style={{fontSize:"1.5rem"}}>
                            Take advantage of the 21st Century
                        </Typography>
                        <Grid container justifyContent={matchesSM ? "center" : undefined} item>
                            <Button component={Link} to="/revolution" variant="outlined" sx={useStyles.learnButton} onClick={() => {props.setValue(2);}}>
                                <span style={{marginRight:10}}>
                                    Learn More
                                </span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item >
                <Button component={Link} to="/estimate" variant="contained" sx={useStyles.estimateButton} onClick={() => {props.setValue(5);}}>
                    Free estimate
                </Button>
            </Grid>
        </Grid>
    )
}
