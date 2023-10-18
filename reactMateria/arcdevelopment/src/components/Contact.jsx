import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Box, Grid, Button, Typography, useMediaQuery, Card, CardContent } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import ButtonArrow from './ui/ButtonArrow';
import background from '../assets/background.jpg'
import phoneIcon from '../assets/phone.svg'
import airplane from '../assets/send.svg'
import emailIcon from '../assets/email.svg'

export const Contact = (props) => {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const useStyles = {
        learnButton: {
            ...theme.typography.learnButton,
            fontSize: "0.7rem",
            height: 30,
            padding: 3,
            [theme.breakpoints.down("sm")]: {
                marginBottom: "2rem"
            }
        },
        background: {
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            bacgroundRepeat: "no-repeat",
            height: "60rem",
            paddingBottom: "10rem"
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
            [theme.breakpoints.down("sm")]: {
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
            <Grid item container direction="column" justifyContent="center" alignItems="center" lg={4} xl={3}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant='h2' style={{ lineHeight: 1 }}>
                                Contact us
                            </Typography>
                            <Typography variant='body1' style={{ color: theme.palette.common.blue }}>
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
                                    (555) 555-5555
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
                                    ZACHARY@GMAIL.COM
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container style={{ maxWidth: "20rem" }}>
                            <Grid item>
                                <TextField label="Name" id="name" value={name} variant="standard" onChange={(event) => setName(event.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField label="Email" id="email" value={email} variant="standard" onChange={(event) => setEmail(event.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField label="Phone" id="phone" value={phone} variant="standard" onChange={(event) => setPhone(event.target.value)} />
                            </Grid>
                        </Grid>
                        <Grid item style={{ maxWidth: "20rem" }}>
                            <TextField rows={10} value={message} id="message" multiline variant="standard" InputProps={{ disableUnderline: true }}
                                sx={useStyles.message}
                                onChange={event => setMessage(event.target.value)} />
                        </Grid>
                        <Grid item container justifyContent="center" style={{ marginTop: "2rem" }}>
                            <Button variant="contained" sx={useStyles.sendButton}>Send Message
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
            <Grid item container sx={useStyles.background} alignItems="center" lg={8} xl={9}>
                <Grid item style={{ marginLeft: matchesSM ? 0 : "3rem", textAlign: matchesSM ? "center" : "inherit" }} >
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h2">
                                Simple Software <br /> Revolutionary
                            </Typography>
                            <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
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
