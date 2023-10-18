import { useTheme } from '@mui/material/styles';
import { Avatar,Box, Grid, Typography, useMediaQuery } from '@mui/material'
import history from '../assets/history.svg'
import yearbook from '../assets/yearbook.svg'
import puppy from '../assets/puppy.svg'
import profile from '../assets/founder.jpg'
import { CallToAction } from './ui/CallToAction';

export const About = (props) => {
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const useStyles = {
        missionStatement: {
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "1.5rem",
            maxWidth: "50rem",
            lineHeight: 1.4
        },
        rowContainer: {
            paddingLeft: "5rem",
            paddingRight: "5rem",
            [theme.breakpoints.down("md")]: {
                paddingLeft: '1.5rem',
                paddingRight: '1.5rem'
            }
        },
        avatar:{
            height:"25rem",
            width:"25rem",
            [theme.breakpoints.down("md")]: {
                height: '20rem',
                width: '20rem',
                maxHeight:300,
                maxWidth:300
            }
        }
    }
    return (
        <Grid container direction="column">
            <Grid item sx={useStyles.rowContainer} style={{ marginTop: matchesMD ? "1rem": "2rem" }}>
                <Typography align={matchesMD ? "center" : undefined} variant='h2'>
                    About us
                </Typography>
            </Grid>
            <Grid item container justifyContent="center" sx={useStyles.rowContainer} style={{marginTop: "3rem"}}>
                <Typography variant='h4' align='center' sx={useStyles.missionStatement}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia molestias,
                    quasi esse deleniti aliquid a illum consequatur, quo distinctio vitae fugiat
                    pariatur quis maxime minima quam in ad aperiam autem. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ab velit facilis laboriosam ea aut quod esse
                </Typography>
            </Grid>
            <Grid item container 
                sx={useStyles.rowContainer} 
                style={{marginTop:"10rem",marginBottom:"10rem"}}
                justifyContent="space-around" 
                direction={matchesMD ? "column" : "row"}
                alignItems={matchesMD ? "center" : undefined}
                >
                <Grid item>
                    <Grid item container direction="column" lg style={{ maxWidth: "35rem" }}>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant='h2' gutterBottom>
                                History
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1' align={matchesMD ? "center" : undefined} paragraph style={{ fontWeight: 700, fontStyle: "italic" }}>
                                We're the new Kid on the block
                            </Typography>
                            <Typography variant='body1' align={matchesMD ? "center" : undefined} paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi in fuga natus veniam
                                asperiores impedit totam vero consequuntur, suscipit exercitationem hic dolor modi, dolorem eos?
                                Minus enim quia magnam!
                            </Typography>
                            <Typography variant='body1' align={matchesMD ? "center" : undefined} paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum reprehenderit
                                architecto voluptatibus! Aliquam similique vitae assumenda soluta, earum nobis magni
                                rerum doloremque veritatis. Quaerat et sint culpa iure, omnis ab?
                            </Typography>
                            <Typography variant='body1' align={matchesMD ? "center" : undefined} paragraph>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum excepturi culpa et?
                                Placeat accusantium labore eum impedit eos id odio cumque nam sit error excepturi,
                                aspernatur, aliquam atque, porro odit!
                            </Typography>
                            <Typography variant='body1' align={matchesMD ? "center" : undefined} paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi reiciendis distinctio
                                natus ipsam illum praesentium, ex et sint minus possimus dolorum doloremque,
                                exercitationem, itaque quisquam neque facilis beatae labore corrupti.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid item container justifyContent="center" lg>
                        <Box
                            component="img"
                            // sx={useStyles.icon}
                            alt="quill pem on the top"
                            src={history}
                            style={{ maxHeight: matchesMD ? 200 : "22rem" }}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction="column" 
                style={{marginBottom:"15rem"}}
                alignItems="center" sx={useStyles.rowContainer}>
                <Grid item>
                    <Typography align="center" variant="h4" gutterBottom>
                        Team
                   </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph align="center">
                        Zachary Reece, Founder
                    </Typography>
                    <Typography variant="body1" paragraph align="center">
                        I started codign whe i was 9 uealds old
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar alt="founder" src={profile} sx={useStyles.avatar}/>
                    <Typography variant="body1" paragraph align="center">
                        I started codign whe i was 9 uealds old
                    </Typography>
                </Grid>
                <Grid item container justifyContent={matchesMD ? "center" : undefined}>
                       {/* el display xs:md remplaza al tmano de los hidden lgup que significa que sea visible para las ventanas mobiles*/}
                    <Grid item lg sx={{ display: { xl: 'none', xs: 'block' } }} style={{maxWidth:"45rem",padding:"1.5rem"}}>
                        <Typography variant="body1" align="center" paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic quis 
                            accusamus aut provident inventore aperiam voluptatibus quae nesciunt eos. 
                            Laudantium et eius iure enim nesciunt illo, assumenda nobis quos!
                        </Typography>
                        <Typography variant="body1" align="center" paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic quis 
                            accusamus aut provident inventore aperiam voluptatibus quae nesciunt eos. 
                        </Typography>
                    </Grid>
                    <Grid item container direction="column" 
                        style={{marginBottom: matchesMD ? "2.5rem" : 0}}
                        lg alignItems = {matchesMD ? "center" : undefined}>
                        <Grid item>
                            <Box
                                component="img"
                                // sx={useStyles.icon}
                                alt="quill pem on the top"
                                src={yearbook}
                                style={{maxWidth: matchesMD ? 300 : undefined}}
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">
                                a page from my Sophomore yearbook
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* el display xs:md remplaza al tmano de los hidden mdDown que significa que no sea visible para las ventanas mobiles*/}
                    <Grid item lg sx={[{ display: { xs: 'none', md: 'block' } }]} style={{maxWidth:"45rem",padding:"1.5rem"}}>
                        <Typography variant="body1" align="center" paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic quis 
                            accusamus aut provident inventore aperiam voluptatibus quae nesciunt eos. 
                            Laudantium et eius iure enim nesciunt illo, assumenda nobis quos!
                        </Typography>
                        <Typography variant="body1" align="center" paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic quis 
                            accusamus aut provident inventore aperiam voluptatibus quae nesciunt eos. 
                        </Typography>
                    </Grid>
                    <Grid item container direction="column" lg alignItems = {matchesMD ? "center" : "flex-end"}>
                        <Grid item>
                            <Box
                                component="img"
                                // sx={useStyles.icon}
                                alt="quill pem on the top"
                                src={puppy}
                                style={{maxWidth: matchesMD ? 300 : undefined}}
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">
                                my miniature dapple dachshund,Sterling
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={props.setValue}/>
            </Grid>
        </Grid>
    )
}
