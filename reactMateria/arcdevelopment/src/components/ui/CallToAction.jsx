import {Grid, Typography,Button} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import ButtonArrow from './ButtonArrow';
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
    }
    return (
        <Grid container>
            <Grid item>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h2">
                            Simple Software <br/> Revolutionary
                        </Typography>
                        <Typography variant="subtitle2">
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
        </Grid>
    )
}
