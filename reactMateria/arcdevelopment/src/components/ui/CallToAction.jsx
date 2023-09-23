import {Grid, Typography,Button} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import ButtonArrow from './ButtonArrow';
import background from '../../assets/background.jpg'
import mobileBackground from '../../assets/mobileBackground.jpg'

export const CallToAction = () => {
    const theme = useTheme();
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
            height:"60rem",
            width:"100%",
            [theme.breakpoints.down("md")]:{
                backgroundImage:`url(${mobileBackground})`,
            }
        },
        estimateButton:{
            ...theme.typography.estimate,
            borderRadius:50,
            height:80,
            width:205,
            backgroundColor:theme.palette.common.orange,
            fontSize:"1.5rem",
            marginRight:"5rem"
        }
    }
    return (
        <Grid container alignItems="center" justifyContent="space-between" sx={useStyles.background}>
            <Grid item style={{marginLeft:"5rem"}} >
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h2">
                            Simple Software <br/> Revolutionary
                        </Typography>
                        <Typography variant="subtitle2" style={{fontSize:"1.5rem"}}>
                            Take advantage of the 21st Century
                        </Typography>
                        <Grid container item>
                            <Button variant="outlined" sx={useStyles.learnButton}>
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
                <Button variant="contained" sx={useStyles.estimateButton}>
                    Free estimate
                </Button>
            </Grid>
        </Grid>
    )
}
