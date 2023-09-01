import { useTheme } from '@mui/material/styles';
import img_1 from '../animations/landinganimation/img_1.png'
import img_2 from '../animations/landinganimation/img_2.png'
import img_3 from '../animations/landinganimation/img_3.png'
import img_4 from '../animations/landinganimation/img_4.png'
import {Box} from '@mui/material'

export const LandingPage = () => {
  
    const theme = useTheme();
    const useStyles = {
        footer: {
            backgroundColor: theme.palette.common.blue,
            width:"100%",
            zIndex:1302,
            position: "relative"
        },
    }
    return (
        <>
            <Box
                component="img"
                // sx={useStyles.icon}
                alt="landing page" 
                src={img_1}
            />
            <Box
                component="img"
                // sx={useStyles.icon}
                alt="landing page" 
                src={img_2}
            />
            <Box
                component="img"
                // sx={useStyles.icon}
                alt="landing page" 
                src={img_3}
            />
            <Box
                component="img"
                // sx={useStyles.icon}
                alt="landing page" 
                src={img_4}
            />
        </>
       
    )
}
