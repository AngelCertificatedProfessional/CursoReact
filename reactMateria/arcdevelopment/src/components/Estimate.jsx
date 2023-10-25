import { Box, Button, Grid, IconButton, Typography, useMediaQuery } from '@mui/material'
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
import { useState } from 'react';

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

const softwareQuestions = [
    { ...defaultQuestions[0], active: false },
    {
      id: 2,
      title: "Which platforms do you need supported?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Web Application",
          subtitle: null,
          icon: website,
          iconAlt: "computer outline",
          selected: false,
          cost: 100
        },
        {
          id: 2,
          title: "iOS Application",
          subtitle: null,
          icon: iphone,
          iconAlt: "outline of iphone",
          selected: false,
          cost: 100
        },
        {
          id: 3,
          title: "Android Application",
          subtitle: null,
          icon: android,
          iconAlt: "outlines of android phone",
          selected: false,
          cost: 100
        }
      ],
      active: true
    },
    {
      id: 3,
      title: "Which features do you expect to use?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Photo/Video",
          subtitle: null,
          icon: camera,
          iconAlt: "camera outline",
          selected: false,
          cost: 25
        },
        {
          id: 2,
          title: "GPS",
          subtitle: null,
          icon: gps,
          iconAlt: "gps pin",
          selected: false,
          cost: 25
        },
        {
          id: 3,
          title: "File Transfer",
          subtitle: null,
          icon: upload,
          iconAlt: "outline of cloud with arrow pointing up",
          selected: false,
          cost: 25
        }
      ],
      active: false
    },
    {
      id: 4,
      title: "Which features do you expect to use?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Users/Authentication",
          subtitle: null,
          icon: users,
          iconAlt: "outline of a person with a plus sign",
          selected: false,
          cost: 25
        },
        {
          id: 2,
          title: "Biometrics",
          subtitle: null,
          icon: biometrics,
          iconAlt: "fingerprint",
          selected: false,
          cost: 25
        },
        {
          id: 3,
          title: "Push Notifications",
          subtitle: null,
          icon: bell,
          iconAlt: "outline of a bell",
          selected: false,
          cost: 25
        }
      ],
      active: false
    },
    {
      id: 5,
      title: "What type of custom features do you expect to need?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "Low Complexity",
          subtitle: "(Informational)",
          icon: info,
          iconAlt: "'i' inside a circle",
          selected: false,
          cost: 25
        },
        {
          id: 2,
          title: "Medium Complexity",
          subtitle: "(Interactive, Customizable, Realtime)",
          icon: customized,
          iconAlt: "two toggle switches",
          selected: false,
          cost: 50
        },
        {
          id: 3,
          title: "High Complexity",
          subtitle: "(Data Modeling and Computation)",
          icon: data,
          iconAlt: "outline of line graph",
          selected: false,
          cost: 100
        }
      ],
      active: false
    },
    {
      id: 6,
      title: "How many users do you expect?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "0-10",
          subtitle: null,
          icon: person,
          iconAlt: "person outline",
          selected: false,
          cost: 1
        },
        {
          id: 2,
          title: "10-100",
          subtitle: null,
          icon: persons,
          iconAlt: "outline of two people",
          selected: false,
          cost: 1.25
        },
        {
          id: 3,
          title: "100+",
          subtitle: null,
          icon: people,
          iconAlt: "outline of three people",
          selected: false,
          cost: 1.5
        }
      ],
      active: false
    }
  ];
  
  
  const websiteQuestions = [
    { ...defaultQuestions[0], active: false },
    {
      id: 2,
      title: "Which type of website are you wanting?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "Basic",
          subtitle: "(Informational)",
          icon: info,
          iconAlt: "person outline",
          selected: false,
          cost: 100
        },
        {
          id: 2,
          title: "Interactive",
          subtitle: "(Users, API's, Messaging)",
          icon: customized,
          iconAlt: "outline of two people",
          selected: false,
          cost: 200
        },
        {
          id: 3,
          title: "E-Commerce",
          subtitle: "(Sales)",
          icon: globe,
          iconAlt: "outline of three people",
          selected: false,
          cost: 250
        }
      ],
      active: true
    }
  ];
  

export const Estimate = () => {

    const [questions,setQuestions] = useState(softwareQuestions)

    const theme = useTheme();

    const nextQuestion = () => {
        const newQuestions = JSON.parse(JSON.stringify(questions))
        const currentlyActive = newQuestions.filter(question => question.active)
        const activeIndex = currentlyActive[0].id - 1
        const nextIndex = activeIndex + 1

        newQuestions[activeIndex] = {...currentlyActive[0],active:false}
        newQuestions[nextIndex] = {...newQuestions[nextIndex],active:true}

        setQuestions(newQuestions)
    }

    const previousQuestion = () => {
        const newQuestions = JSON.parse(JSON.stringify(questions))
        const currentlyActive = newQuestions.filter(question => question.active)
        const activeIndex = currentlyActive[0].id - 1
        const nextIndex = activeIndex - 1

        newQuestions[activeIndex] = {...currentlyActive[0],active:false}
        newQuestions[nextIndex] = {...newQuestions[nextIndex],active:true}

        setQuestions(newQuestions)
    }

    const navigationPreviousDisabled = () => {
      const currentlyActive = questions.filter(question => question.active)
      if(currentlyActive[0].id === 1){
        return true;
      }else{
        return false;
      }
    }

    const navigationNextDisabled = () => {
      const currentlyActive = questions.filter(question => question.active)
      if(currentlyActive[0].id === questions[questions.length -1].id){
        return true;
      }else{
        return false;
      }
    }

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
                    questions
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
                    style={{width:"18rem",marginTop:"3rem"}}>
                    <Grid item>
                        <IconButton disabled={navigationPreviousDisabled()} onClick={previousQuestion}>
                            <Box
                                component="img"
                                alt="Previous question" 
                                src={navigationPreviousDisabled() ? backArrowDisabled :backArrow}
                            />
                        </IconButton>
                        
                    </Grid>
                    <Grid item>
                        <IconButton disabled={navigationNextDisabled()} onClick={nextQuestion}>
                            <Box
                                component="img"
                                alt="next question" 
                                src={navigationNextDisabled() ? forwardArrowDisabled :forwardArrow}
                            />
                        </IconButton>
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
