import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Box, Grid, Button, Typography, useMediaQuery, Dialog,DialogContent } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import ButtonArrow from './ui/ButtonArrow';
import background from '../assets/background.jpg'
import phoneIcon from '../assets/phone.svg'
import airplane from '../assets/send.svg'
import emailIcon from '../assets/email.svg'
import mobileBackground from '../assets/mobileBackground.jpg'

export const Contact = (props) => {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [emailHelper,setEmailHelper] = useState("")
    const [phone, setPhone] = useState('')
    const [phoneHelper,setPhoneHelper] = useState("")
    const [message, setMessage] = useState('')

    const [open,setOpen] = useState(false)

    const onChange = event => {
        let valid;
        switch(event.target.id){
            case "email":
                setEmail(event.target.value);
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
                if(!valid){
                    setEmailHelper("Invalid Email")
                }else{
                    setEmailHelper("")
                }
                break;
            case "phone":
                setPhone(event.target.value);
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)
                if(!valid){
                    setPhoneHelper("Invalid Phone")
                }else{
                    setPhoneHelper("")
                }
                break;
            default:
                break;
        }
    }

    const useStyles = {
        learnButton: {
            ...theme.typography.learnButton,
            fontSize: "0.7rem",
            height: 30,
            padding: 3,
            [theme.breakpoints.down("md")]: {
                marginBottom: "2rem"
            }
        },
        background: {
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            bacgroundRepeat: "no-repeat",
            height: "60rem",
            paddingBottom: "10rem",
            [theme.breakpoints.down("md")]: {
                backgroundImage: `url(${mobileBackground})`
            }
        },
        estimateButton: {
            ...theme.typography.estimate,
            borderRadius: 50,
            height: 80,
            width: 205,
            backgroundColor: theme.palette.common.orange,
            fontSize: "1.5rem",
            marginRight: "5rem",
            marginLeft: "2rem",
            "&:hover": {
                backgroundColor: theme.palette.secondary.light
            },
            [theme.breakpoints.down("md")]: {
                marginRight: 0,
                marginLeft: 0,
            }
        },
        message: {
            borderBottom: `2px solid ${theme.palette.common.blue}`,
            marginTop: "5rem",
            borderRadius: 5
        },
        sendButton: {
            ...theme.typography.estimate,
            borderRadius: 50,
            height: 45,
            width: 245,
            fontSize: "1rem",
            backgroundColor: theme.palette.common.orange,
            "&:hover": {
                backgroundColor: theme.palette.secondary.light
            },
        }
    }
    return (
        <Grid container direction="row">
            <Grid item container direction="column" 
                style={{marginBottom: matchesMD ? "5rem" : 0,marginTop: matchesSM ? "1rem" : matchesMD ? "5rem" : 0}}
                justifyContent="center" alignItems="center" lg={4} xl={3}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} 
                                variant='h2' style={{ lineHeight: 1 }}>
                                Contact us
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined} 
                                variant='body1' style={{ color: theme.palette.common.blue }}>
                                We're waiting
                            </Typography>
                        </Grid>
                        <Grid item container style={{ marginTop: "2rem" }}>
                            <Grid item>
                                <Box
                                    component="img"
                                    // sx={useStyles.icon}
                                    alt="landing page"
                                    src={phoneIcon}
                                    style={{ marginRight: "0.5rem" }}
                                />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{ color: theme.palette.common.blue, fontSize: "1rem" }}>
                                    <a href="tel55555555555" style={{textDecoration:"none",color:"inherit"}}>(555) 555-5555 </a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container style={{ marginBottom: "2rem" }}>
                            <Grid item>
                                <Box
                                    component="img"
                                    // sx={useStyles.icon}
                                    alt="ENVELOPE"
                                    src={emailIcon}
                                    style={{ marginRight: "0.5rem", verticalAlign: "bottom" }}
                                />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{ color: theme.palette.common.blue, fontSize: "1rem" }}>
                                    <a href="" style={{textDecoration:"none",color:"inherit"}}>ZACHARY@GMAIL.COM</a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" style={{ maxWidth: "20rem" }}>
                            <Grid item style={{marginBottom:"0.5rem"}}>
                                <TextField
                                fullWidth label="Name" id="name" value={name} variant="standard" 
                                onChange={(event) => setName(event.target.value)} />
                            </Grid>
                            <Grid item style={{marginBottom:"0.5rem"}}>
                                <TextField error={emailHelper.length !== 0} 
                                helperText={emailHelper}
                                fullWidth label="Email" id="email" 
                                value={email} variant="standard" 
                                onChange={onChange} />
                            </Grid>
                            <Grid item style={{marginBottom:"0.5rem"}}>
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
                        <Grid item container justifyContent="center" style={{ marginTop: "2rem" }}>
                            <Button disabled={name.length === 0 || message.length === 0 ||
                                phone.length === 0 || email.length === 0} variant="contained"
                                sx={useStyles.sendButton} onClick={() => setOpen(true)}>Send Message
                                <Box
                                    component="img"
                                    // sx={useStyles.icon}
                                    alt="paper airplane"
                                    src={airplane}
                                    style={{ marginLeft: "1rem" }}
                                />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4" gutterBottom>
                                Confirm Message
                            </Typography>
                        </Grid>
                        <Grid item style={{marginBottom:"0.5rem"}}>
                            <TextField
                            fullWidth label="Name" id="name" value={name} variant="standard" 
                            onChange={(event) => setName(event.target.value)} />
                        </Grid>
                        <Grid item style={{marginBottom:"0.5rem"}}>
                            <TextField error={emailHelper.length !== 0} 
                            helperText={emailHelper}
                            fullWidth label="Email" id="email" 
                            value={email} variant="standard" 
                            onChange={onChange} />
                        </Grid>
                        <Grid item style={{marginBottom:"0.5rem"}}>
                            <TextField error={phoneHelper.length !== 0} 
                            helperText={phoneHelper}
                            fullWidth label="Phone" id="phone" 
                            value={phone} variant="standard" 
                            onChange={onChange} />
                        </Grid>
                        <Grid item style={{ maxWidth: "20rem" }}>
                            <TextField fullWidth rows={10} value={message}
                                id="message" multiline variant="standard" 
                                InputProps={{ disableUnderline: true }}
                                sx={useStyles.message}
                                onChange={event => setMessage(event.target.value)} />
                        </Grid>
                    </Grid>
                    <Grid item container>
                        <Grid item>
                            <Button color="primary" onClick={() => setOpen(false)} >
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button disabled={name.length === 0 || message.length === 0 ||
                                phone.length === 0 || email.length === 0} variant="contained"
                                sx={useStyles.sendButton} onClick={() => setOpen(true)}>Send Message
                                <Box
                                    component="img"
                                    // sx={useStyles.icon}
                                    alt="paper airplane"
                                    src={airplane}
                                    style={{ marginLeft: "1rem" }}
                                />
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
            <Grid item container sx={useStyles.background} alignItems="center" justify={matchesMD ? "center" : undefined} direction={matchesMD ? "column" : "row"} lg={8} xl={9}>
                <Grid item style={{ marginLeft: matchesMD ? 0 : "3rem", textAlign: matchesMD ? "center" : "inherit" }} >
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant="h2">
                                Simple Software <br /> Revolutionary
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined} variant="subtitle2" style={{ fontSize: "1.5rem" }}>
                                Take advantage of the 21st Century
                            </Typography>
                            <Grid container justifyContent={matchesSM ? "center" : undefined} item>
                                <Button component={Link} to="/revolution" variant="outlined" sx={useStyles.learnButton} onClick={() => { props.setValue(2); }}>
                                    <span style={{ marginRight: 10 }}>
                                        Learn More
                                    </span>
                                    <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item >
                    <Button component={Link} to="/estimate" variant="contained" sx={useStyles.estimateButton} onClick={() => { props.setValue(5); }}>
                        Free estimate
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}
