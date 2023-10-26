import { Box, Button, Grid, IconButton, Typography, useMediaQuery, Dialog, DialogContent, TextField } from '@mui/material'
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
  id: 1,
  title: "Which service are you interested in?",
  active: true,
  options: [
    {
      id: 1,
      title: "Custom software development",
      subtitle: null,
      icon: software,
      iconAlt: "Thre floating screens",
      selected: false,
      cost: 0
    },
    {
      id: 2,
      title: "iOs/Android app development",
      subtitle: null,
      icon: mobile,
      iconAlt: "Phone and tablet outline",
      selected: false,
      cost: 0
    },
    {
      id: 3,
      title: "Website development",
      subtitle: null,
      icon: website,
      iconAlt: "Computer outline",
      selected: false,
      cost: 0
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

  const [questions, setQuestions] = useState(defaultQuestions)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [emailHelper, setEmailHelper] = useState("")
  const [phone, setPhone] = useState('')
  const [phoneHelper, setPhoneHelper] = useState("")
  const [message, setMessage] = useState('')
  const [total, setTotal] = useState(0)

  const theme = useTheme();

  const onChange = event => {
    let valid;
    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
        if (!valid) {
          setEmailHelper("Invalid Email")
        } else {
          setEmailHelper("")
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)
        if (!valid) {
          setPhoneHelper("Invalid Phone")
        } else {
          setPhoneHelper("")
        }
        break;
      default:
        break;
    }
  }

  const nextQuestion = () => {
    const newQuestions = JSON.parse(JSON.stringify(questions))
    const currentlyActive = newQuestions.filter(question => question.active)
    const activeIndex = currentlyActive[0].id - 1
    const nextIndex = activeIndex + 1

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false }
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true }

    setQuestions(newQuestions)
  }

  const previousQuestion = () => {
    const newQuestions = JSON.parse(JSON.stringify(questions))
    const currentlyActive = newQuestions.filter(question => question.active)
    const activeIndex = currentlyActive[0].id - 1
    const nextIndex = activeIndex - 1

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false }
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true }

    setQuestions(newQuestions)
  }

  const navigationPreviousDisabled = () => {
    const currentlyActive = questions.filter(question => question.active)
    if (currentlyActive[0].id === 1) {
      return true;
    } else {
      return false;
    }
  }

  const navigationNextDisabled = () => {
    const currentlyActive = questions.filter(question => question.active)
    if (currentlyActive[0].id === questions[questions.length - 1].id) {
      return true;
    } else {
      return false;
    }
  }

  const handleSelect = (id) => {
    const newQuestions = JSON.parse(JSON.stringify(questions))
    const currentlyActive = newQuestions.filter(question => question.active)
    const activeIndex = currentlyActive[0].id - 1
    const newSelected = newQuestions[activeIndex].options[id - 1]
    const previousSelected = currentlyActive[0].options.filter(option => option.selected)


    switch (currentlyActive[0].subtitle) {
      case 'Select one.':
        if (previousSelected[0]) {
          previousSelected[0].selected = !previousSelected[0].selected
          console.log()
        }
        newSelected.selected = !newSelected.selected
        break;
      default:
        newSelected.selected = !newSelected.selected
        break;
    }

    switch (newSelected.title) {
      case "Custom software development":
        setQuestions(softwareQuestions)
        break;
      case "iOs/Android app development":
        setQuestions(softwareQuestions)
        break;
      case "Website development":
        setQuestions(websiteQuestions)
        break;
      default:
        setQuestions(newQuestions)
        break;
    }
  }

  const useStyles = {
    icon: {
      width: "12rem",
      height: "10rem"
    },
    estimateButton: {
      ...theme.typography.estimate,
      borderRadius: 50,
      backgroundColor: theme.palette.common.orange,
      height: 50,
      width: 225,
      fontSize: "1.25rem",
      marginTop: "5rem",
      "&:hover": {
        backgroundColor: theme.palette.secondary.light
      }
    },
    message: {
      borderBottom: `2px solid ${theme.palette.common.blue}`,
      marginTop: "5rem",
      borderRadius: 5
    },
    specialText: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "1.5rem",
      color: theme.palette.common.orange
    }
  }

  const getTotal = () => {
    let cost = 0;
    const selections = questions.map(
      question =>
        question.options.filter(option => option.selected))
      .filter(question => question.length > 0)

    selections.map(options => options.map(option => (cost += option.cost)));

    if (questions.length > 2) {
      const userCost = questions.filter(question => question.title === "How many users do you expect?").
        map(question => question.options.filter(option => option.selected))[0][0].cost;
      console.log(userCost)
    }
    cost -= userCost;
    cost *= userCost
    setTotal(cost);
  }

  return (
    <Grid container direction="row">
      <Grid item container direction="column" lg>
        <Grid item>
          <Typography variant="h2"
            style={{ marginTop: "2rem", marginLeft: "5rem" }}>
            Estimate
          </Typography>
        </Grid>
      </Grid>
      <Grid item container direction="column" lg
        alignItems="center"
        style={{
          marginRight: "2rem",
          marginBottom: "25rem"
        }}>
        {
          questions
            .filter(question => question.active)
            .map((question, index) => (
              <>
                <Grid item>
                  <Typography variant="h2"
                    align="center"
                    style={{
                      fontSize: "2.25rem",
                      fontWeight: 500,
                      marginTop: "5rem",
                      lineHeight: 1.25
                    }}
                  >
                    {question.title}
                  </Typography>
                  <Typography
                    variant="body1" align="center"
                    style={{ marginBottom: "2.5rem" }}
                    gutterBottom
                  >
                    {question.subtitle}
                  </Typography>
                </Grid>
                <Grid item container>
                  {question.options.map(option => (
                    <Grid item container direction="column"
                      md
                      component={Button}
                      onClick={() => handleSelect(option.id)}
                      style={{
                        display: "grid",
                        textTransform: "none",
                        borderRadius: 0,
                        backgroundColor: option.selected ? theme.palette.common.orange : null
                      }}>
                      <Grid item style={{ maxWidth: "14rem" }}>
                        <Typography variant="h6" align="center" style={{ marginBottom: "1rem" }}>
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
          style={{ width: "18rem", marginTop: "3rem" }}>
          <Grid item>
            <IconButton disabled={navigationPreviousDisabled()} onClick={previousQuestion}>
              <Box
                component="img"
                alt="Previous question"
                src={navigationPreviousDisabled() ? backArrowDisabled : backArrow}
              />
            </IconButton>

          </Grid>
          <Grid item>
            <IconButton disabled={navigationNextDisabled()} onClick={nextQuestion}>
              <Box
                component="img"
                alt="next question"
                src={navigationNextDisabled() ? forwardArrowDisabled : forwardArrow}
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={useStyles.estimateButton}
            onClick={() => { setDialogOpen(true); getTotal() }}>
            Get Estimate
          </Button>
        </Grid>
      </Grid>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography variant="h2" alignContent="center">
              Estimate
            </Typography>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid container>
            <Grid item container direction="column">
              <Grid item container direction="column" style={{ maxWidth: "20rem" }}>
                <Grid item style={{ marginBottom: "0.5rem" }}>
                  <TextField
                    fullWidth label="Name" id="name" value={name} variant="standard"
                    onChange={(event) => setName(event.target.value)} />
                </Grid>
                <Grid item style={{ marginBottom: "0.5rem" }}>
                  <TextField error={emailHelper.length !== 0}
                    helperText={emailHelper}
                    fullWidth label="Email" id="email"
                    value={email} variant="standard"
                    onChange={onChange} />
                </Grid>
                <Grid item style={{ marginBottom: "0.5rem" }}>
                  <TextField error={phoneHelper.length !== 0}
                    helperText={phoneHelper}
                    fullWidth label="Phone" id="phone"
                    value={phone} variant="standard"
                    onChange={onChange} />
                </Grid>
              </Grid>
              <Grid item style={{ maxWidth: "20rem" }}>
                <TextField fullWidth rows={10} value={message}
                  id="message" multiline variant="standard"
                  InputProps={{ disableUnderline: true }}
                  sx={useStyles.message}
                  onChange={event => setMessage(event.target.value)} />
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  We can create this digital solution for an estimated
                  <Box
                    component="span"
                    sx={useStyles.specialText}
                  >
                    ${total.toFixed(2)}
                  </Box>
                </Typography>
                <Typography variant="body1" paragraph>
                  Fill out your name, phone, number and email, place your request, and we'll get back
                  yo you with details moving forward and a final price
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  )
}
