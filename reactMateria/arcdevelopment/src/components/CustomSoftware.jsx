import { Link } from 'react-router-dom'; 
import { useTheme } from '@mui/material/styles';
import {Box,Grid, Typography,useMediaQuery,IconButton} from '@mui/material'
import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'

export const CustomSoftware = () => {
    const useStyles = {
    }
    return (
        <Grid container direction="column">
            <Grid item container direction="row">
                <Grid item>
                    <IconButton>
                        <Box
                            sx={useStyles.icon}
                            component="img"
                            // sx={useStyles.icon}
                            alt="back to services page" 
                            src={backArrow}
                        />
                    </IconButton>
                </Grid>
                <Grid item container direction="column">
                    <Typography variant="h2">
                        Custom Software Development
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph>
                        Whether we're replacing old software or inventing new solutions, 
                        Arc Development is here to herlp your businnes takel technology
                    </Typography>
                    <Typography variant="body1" paragraph>
                       Using regular commercial software leaves you with a lot of stuff
                       you don't need, without some of the stuff you do need and 
                       ultimately controls the way you work. 
                       Without using apy software at all you risk falling behing 
                       competitors and missing out on huge savings from increased efficiency.
                    </Typography>
                    <Typography variant="body1" paragraph>
                       We creaate exactly what you what , exactly how you want
                    </Typography>
                </Grid>
                <Grid item>
                    <IconButton>
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
        </Grid>
    )
}
