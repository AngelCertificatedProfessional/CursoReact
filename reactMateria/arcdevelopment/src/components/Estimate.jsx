import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles';

import check from '../assets/check.svg'
import send from '../assets/send.svg'
import software from '../assets/software.svg'
import mobile from '../assets/mobile.svg'
import website from '../assets/website.svg'
import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import backArrowDisabled from '../assets/backArrowDisabled.svg'
import forwardArrowDisabled from '../assets/forwardArrowDisabled.svg'
import camera from '../assets/camera.svg'
import upload from '../assets/upload.svg'
import person from '../assets/person.svg'
import persons from '../assets/persons.svg'
import people from '../assets/people.svg'
import info from '../assets/info.svg'
import bell from '../assets/bell.svg'
import users from '../assets/users.svg'
import iphone from '../assets/iphone.svg'
import gps from '../assets/gps.svg'
import customized from '../assets/customized.svg'
import data from '../assets/data.svg'
import android from '../assets/android.svg'
import globe from '../assets/globe.svg'
import biometrics from '../assets/biometrics.svg'

const defaultQuestions = [{
    id:1,
    title:"Which service are you interested in?",
    active:true,
    options:[
        {
            id:1,
            title:"Custom software development",
            subtitle:null,
            icon:software,
            iconAlt: "Thre floating screens",
            selected:false,
            cost:0
        },
        {
            id:2,
            title:"iOs/Android app development",
            subtitle:null,
            icon:mobile,
            iconAlt: "Phone and tablet outline",
            selected:false,
            cost:0
        },
        {
            id:3,
            title:"Website development",
            subtitle:null,
            icon:website,
            iconAlt: "Computer outline",
            selected:false,
            cost:0
        },
    ]
}]

export const Estimate = () => {
    const theme = useTheme();
    const useStyles = {
        icon:{
            width:"12rem",
            height:"10rem"
        },
        estimateButton: {
            ...theme.typography.estimate,
            borderRadius:50,
            backgroundColor:theme.palette.common.orange,
            height:50,
            width:225,
            fontSize:"1.25rem",
            marginTop:"5rem",
            "&:hover":{
                backgroundColor:theme.palette.secondary.light
            }
        }
    }

    return (
        <Grid container direction="row">
            <Grid item container direction="column" lg>
                <Grid item>
                    <Typography variant="h2" 
                        style={{marginTop:"2rem",marginLeft:"5rem"}}>
                        Estimate
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container direction="column" lg 
                alignItems="center"
                style={{
                    marginRight:"2rem",
                    marginBottom:"25rem"
                }}>
                {
                    defaultQuestions
                        .filter(question => question.active)
                        .map((question,index) => (
                            <>
                                <Grid item>
                                    <Typography variant="h2" 
                                        align="center" 
                                        style={{
                                            fontSize:"2.25rem",
                                            fontWeight:500, 
                                            marginTop:"5rem"
                                        }}
                                    >
                                        {question.title}
                                    </Typography>
                                    <Typography 
                                        variant="body1" align="center"
                                        style={{marginBottom:"2.5rem"}}
                                        gutterBottom
                                    >
                                        {question.subtitle}
                                    </Typography>
                                </Grid>
                                <Grid item container>
                                    {question.options.map(option => (
                                        <Grid item container direction="column" md>
                                            <Grid item style={{maxWidth:"12rem"}}>
                                                <Typography variant="h6" align="center" style={{marginBottom:"1rem"}}>
                                                    {option.title}
                                                </Typography>
                                                <Typography variant="caption" align="center">
                                                    {option.subtitle}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Box
                                                    component="img"
                                                    alt={option.iconAlt}
                                                    src={option.icon}
                                                    sx={useStyles.icon}
                                                />
                                            </Grid>
                                        </Grid>
                                    ))}
                                </Grid>
                            </>
                        )
                    )
                }
                <Grid item container justifyContent="space-between" 
                    style={{width:"15rem",marginTop:"3rem"}}>
                    <Grid item>
                        <Box
                            component="img"
                            alt="Previous question" 
                            src={backArrow}
                        />
                    </Grid>
                    <Grid item>
                        <Box
                            component="img"
                            alt="next question" 
                            src={forwardArrow}
                        />
                    </Grid>
                </Grid>
                <Grid item>
                    <Button variant="contained" sx={useStyles.estimateButton}>
                        Get Estimate
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}
