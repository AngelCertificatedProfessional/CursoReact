import { useTheme } from '@mui/material/styles';
import { Box, Grid, Button, Typography, useMediaQuery, Card, CardContent } from '@mui/material'
import history from '../assets/history.svg'

export const About = () => {
    const theme = useTheme();
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
    }
    return (
        <Grid container direction="column">
            <Grid item sx={useStyles.rowContainer} style={{ marginTop: "2rem" }}>
                <Typography variant='h2'>
                    About us
                </Typography>
            </Grid>
            <Grid item container justifyContent="center" sx={useStyles.rowContainer}>
                <Typography variant='h4' align='center' sx={useStyles.missionStatement}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia molestias,
                    quasi esse deleniti aliquid a illum consequatur, quo distinctio vitae fugiat
                    pariatur quis maxime minima quam in ad aperiam autem. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ab velit facilis laboriosam ea aut quod esse
                </Typography>
            </Grid>
            <Grid item container sx={useStyles.rowContainer} justifyContent="space-around" >
                <Grid item>
                    <Grid item container direction="column" lg style={{ maxWidth: "35rem" }}>
                        <Grid item>
                            <Typography variant='h2' gutterBottom>
                                History
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1' paragraph style={{ fontWeight: 700, fontStyle: "italic" }}>
                                We're the new Kid on the block
                            </Typography>
                            <Typography variant='body1' paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi in fuga natus veniam
                                asperiores impedit totam vero consequuntur, suscipit exercitationem hic dolor modi, dolorem eos?
                                Minus enim quia magnam!
                            </Typography>
                            <Typography variant='body1' paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum reprehenderit
                                architecto voluptatibus! Aliquam similique vitae assumenda soluta, earum nobis magni
                                rerum doloremque veritatis. Quaerat et sint culpa iure, omnis ab?
                            </Typography>
                            <Typography variant='body1' paragraph>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum excepturi culpa et?
                                Placeat accusantium labore eum impedit eos id odio cumque nam sit error excepturi,
                                aspernatur, aliquam atque, porro odit!
                            </Typography>
                            <Typography variant='body1' paragraph>
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
                            style={{ maxHeight: "22rem" }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
