import { CircularProgress,Box, Button, Grid, IconButton, Typography, useMediaQuery, Dialog, DialogContent, TextField, Snackbar } from '@mui/material'
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

  const [service, setService] = useState([])
  const [platforms, setPlatforms] = useState([])
  const [features, setFeatures] = useState([])
  const [customFeatures, setCustomFeatures] = useState("")
  const [category, setCategory] = useState("")
  const [users, setUsers] = useState("")
  const [open,setOpen] = useState(false)
  const [loading,setLoading] = useState(false);
  const [alert,setAlert] = useState({open:false,message:"",backgroundColor:""})

  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

  const hiddenmdUp = useMediaQuery(theme.breakpoints.up("md"))

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
        setService(newSelected.title)
        setPlatforms([])
        setFeatures([])
        setCustomFeatures("")
        setCategory("")
        setUsers("")
        break;
      case "iOs/Android app development":
        setQuestions(softwareQuestions)
        setService(newSelected.title)
        setPlatforms([])
        setFeatures([])
        setCustomFeatures("")
        setCategory("")
        setUsers("")
        break;
      case "Website development":
        setQuestions(websiteQuestions)
        setService(newSelected.title)
        setPlatforms([])
        setFeatures([])
        setCustomFeatures("")
        setCategory("")
        setUsers("")
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
      marginTop: "3rem",
      marginBottom: "2rem",
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
    }

    setUsers(userCost.title)
    cost -= userCost.cost;
    cost *= userCost.cost
    setTotal(cost);
  }

  const getPlatforms = () => {
    let newPlatforms = []
    if (questions.length > 2) {
      questions.filter(question => question.title === "Which platforms do you need supported?").
        map(question => question.options
          .filter(option => option.selected))[0].map(option => newPlatforms.push(option.title));
      setPlatforms(newPlatforms)
    }
  }

  const getFeatures = () => {
    let newFeatures = []
    if (questions.length > 2) {
      questions.filter(question => question.title === "Which features do you expect use?").
        map(question => question.options
          .filter(option => option.selected))
        .map(option => option.map(newFeature => newFeatures.push(newFeature.title)));
      setFeatures(newPlatforms)
    }
  }

  const getCustomFeatures = () => {
    if (question.length > 2) {
      const newCustomGeatures = questions.
        filter(question => question.title === "What type of custom features do you expect to need?").
        map(question => question.options.filter(option => option.selected))[0][0].title
      setCustomFeatures(newCustomGeatures)
    }
  }

  const estimateDisabled = () => {
    let disabled = true;
    const emptySelections = questions.
      map(question => question.options.filter(option => option.selected)).
      filter(question => question.length ===0)

      if(questions.length === 2){
        if(emptySelections.length === 1){
          disabled =  false;
        }
      }else if(questions.length === 1){
        disabled = true;
      }else if(emptySelections.length < 3 && questions[questions.length - 1].options.filter(option => option.selected).length > 0){
        disabled = false;
      }
      return disabled
  }

  const sendEstimate = () => {
    setLoading(true)
    //Aqui deberia ver un metodo que conecte con firebase
    /*
    Pero como no loquiero implmenetar entonces simplemente se agregara el valor en false
    */

    setTimeout(() => {
        setLoading(false);
        setOpen(false)
        setName("")
        setEmail("")
        setPhone("")
        setMessage("")
        setDialogOpen(false)
        setAlert({open:true,message:"Message sent successfuly!",backgroundColor:"#4BB543"})
    }, 2500);
  }

  const softwareSelection = (
    <Grid container direction="column">
      <Grid item container alignItems="center" style={{marginBottom:"1.25rem"}}>
        <Grid item sx={2}>
          <Box
            component="img"
            alt="checkamrk"
            src={check}
          />
        </Grid>
        <Grid item sx={10}>
          <Typography variant="body1">
            You want {service} for
            {platforms.length > 0 ? `for ${
              //if only web application is selected...
              platforms.indexOf("Web Application") > -1 &&
                platforms.length === 1
                ? //then finish sentence here
                "a Web Application."
                : //otherwise, if web application and another platform is selected...
                platforms.indexOf("Web Application") > -1 &&
                  platforms.length === 2
                  ? //then finish the sentence here
                  `a Web Application and an ${platforms[1]}.`
                  : //otherwise, if only one platform is selected which isn't web application...
                  platforms.length === 1
                    ? //then finish the sentence here
                    `an ${platforms[0]}`
                    : //otherwise, if other two options are selected...
                    platforms.length === 2
                      ? //then finish the sentence here
                      "an iOS Application and an Android Application."
                      : //otherwise if all three are selected...
                      platforms.length === 3
                        ? //then finish the sentence here
                        "a Web Application, an iOS Application, and an Android Application."
                        : null
              }` : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container alignItems="center" style={{marginBottom:"1.25rem"}}>
        <Grid item xs={2}>
          <Box
            component="img"
            alt="checkamrk"
            src={check}
          />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            {"with "}
            {/* if we have features... */}
            {features.length > 0
              ? //...and there's only 1...
              features.length === 1
                ? //then end the sentence here
                `${features[0]}.`
                : //otherwise, if there are two features...
                features.length === 2
                  ? //...then end the sentence here
                  `${features[0]} and ${features[1]}.`
                  : //otherwise, if there are three or more features...
                  features
                    //filter out the very last feature...
                    .filter(
                      (feature, index) =>
                        index !== features.length - 1
                    )
                    //and for those features return their name...
                    .map((feature, index) => (
                      <span key={index}>{`${feature}, `}</span>
                    ))
              : null}
            {features.length > 0 &&
              features.length !== 1 &&
              features.length !== 2
              ? //...and then finally add the last feature with 'and' in front of it
              ` and ${features[features.length - 1]}.`
              : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container alignItems="center">
        <Grid item sx={2}>
          <Box
            component="img"
            alt="checkamrk"
            src={check}
          />
        </Grid>
        <Grid item sx={10}>
          <Typography variant="body1">
            The custom features will be of {customFeatures.toLowerCase()}
            {`, and the project will be user by about ${users}`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )


  const getCategory = () => {
    if (questions.length === 2) {
      const newCategory = questions.
        filter(question => question.title === "Whic type of website are you waiting?")[0].
        options.filter(option => option.selected)[0].title
      setCategory(newCategory)
    }
  }

  const websiteSelection = (
    <Grid container direction="column" style={{marginTop: "14rem"}}>
      <Grid item container alignItems="center">
        <Grid item sx={2}>
          <Box
            component="img"
            alt="checkamrk"
            src={check}
          />
        </Grid>
        <Grid item sx={10}>
          <Typography variant="body">
            You want {category === "Basic" ? "a Basic Website." : `an ${category} website.`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )

  return (
    <Grid container direction="row">
      <Grid item container direction="column" lg 
        alignItems={matchesMD ? "center" : undefined}>
        <Grid item style={{ 
            marginTop: "2rem", 
            marginLeft: matchesMD ? 0 :"5rem" 
            }}>
          <Typography variant="h2" align={matchesMD ? "center" : undefined}>
            Estimate
          </Typography>
        </Grid>
      </Grid>
      <Grid item container direction="column" lg
        alignItems="center"
        style={{
          marginRight: matchesMD ? 0 : "2rem",
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
                      lineHeight: 1.25,
                      marginLeft: matchesSM ? "1rem" : 0,
                      marginRight: matchesSM ? "1rem" : 0
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
                  {question.options.map((option,index) => (
                    <Grid item container direction="column"
                      md
                      key={index}
                      component={Button}
                      onClick={() => handleSelect(option.id)}
                      style={{
                        display: "grid",
                        textTransform: "none",
                        borderRadius: 0,
                        marginBottom:matchesSM ? "1.5rem" : 0,
                        backgroundColor: option.selected ? theme.palette.common.orange : null
                      }}>
                      <Grid item style={{ width: "14rem" }}>
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
            disabled={estimateDisabled()}
            onClick={() => { 
              setDialogOpen(true); 
              getTotal(); 
              getPlatforms(); 
              getFeatures(); 
              getCustomFeatures(); 
              getCategory(); }}>
            Get Estimate
          </Button>
        </Grid>
      </Grid>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} 
          fullwidth
          maxWidth="lg"
          fullScreen={matchesSM}
          style={{zIndex:1302}}
        >
        <Grid container justifyContent="center">
          <Grid item style={{marginTop:"1rem",marginBottom:"1rem"}}>
            <Typography variant="h2" alignContent="center">
              Estimate
            </Typography>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid container 
            justify="space-around" 
            direction={matchesSM ? "column" : "row"}
            alignItems={matchesSM ? "center" : undefined}
            >
            <Grid item container direction="column" md={7} style={{maxWidth:"20rem"}}>
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
              <Grid item style={{ width: "20rem" }}>
                <TextField fullWidth rows={10} value={message}
                  id="message" multiline variant="standard"
                  placeholder='Tell us more about your project'
                  InputProps={{ disableUnderline: true }}
                  sx={useStyles.message}
                  onChange={event => setMessage(event.target.value)} />
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{lineHeight:1.25}}
                  align={matchesSM ? "center" : undefined} paragraph>
                  We can create this digital solution for an estimated
                  <Box
                    component="span"
                    sx={useStyles.specialText}
                  >
                    ${total.toFixed(2)}
                  </Box>
                </Typography>
                <Typography variant="body1" align={matchesSM ? "center" : undefined} paragraph>
                  Fill out your name, phone, number and email, place your request, and we'll get back
                  yo you with details moving forward and a final price
                </Typography>
              </Grid>
            </Grid>
            <Grid item container 
              direction="column" 
              alignItem={matchesSM ? "center" : undefined}
              md={5} 
              style={{maxWidth:"30rem"}}>
              {/* sustitucion del hidden */}
              <Grid item sx={[useStyles.arrowContainer,{ display: { xs: 'none', sm: 'block' } }]}>
                {questions.length > 2 ? softwareSelection : websiteSelection}
              </Grid>
              <Grid item>
                <Button variant="contained" 
                  disabled={name.length === 0 || message.length === 0 ||
                  phone.length === 0 || email.length === 0}
                  sx={useStyles.estimateButton}
                  onClick={sendEstimate}
                  >
                    {loading ? 
                      <CircularProgress/> :
                      <>
                        Place Request
                        <Box
                          component="img"
                          alt="paper airplane"
                          src={send}
                          style={{ marginLeft: "0.5rem" }}
                        />
                      </>}
                </Button>
              </Grid>
              {hiddenmdUp ? null : 
                <Grid item style={{marginBottom: matchesSM ? "5rem" : 0}}>
                  <Button style={{fontWeight:300}} 
                    color="primary" onClick={() => setDialogOpen(false)}>
                    Cancel
                  </Button>
                </Grid>
              }
              
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar open={alert.open} message={alert.message} 
                ContentProps={{
                    style:{
                        backgroundColor:alert.backgroundColor
                    }
                }}
                anchorOrigin={{vertical:"top",horizontal:"center"}}
                onClose={() => setAlert({...alert,open:false})}
                autoHideDuration={4000}
            />
    </Grid>
  )
}
