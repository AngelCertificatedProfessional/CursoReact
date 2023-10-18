import { createTheme } from '@mui/material/styles';
const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"
const arcWhite = "#FFFFFF"
const arcBlueSelected = "#0D66A3"
const arcGrey = "#868686"

export const theme = createTheme({
    breakpoints: {
        keys: [
            "xs",
            "sm",
            "md",
            "lg",
            "xl",
        ],
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920
        }
    },
    palette: {
        common: {
            blue: arcBlue,
            orange: arcOrange,
            white: arcWhite,
            blueSelected: arcBlueSelected
        },
        primary: {
            main: arcBlue
        },
        secondary: {
            main: arcOrange
        }
    },
    typography: {
        tab: {
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: "1rem",
            color: "white",
            indicatorColor: "white"
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white"
        },
        "h2": {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: arcBlue,
            lineHeight: 1.5
        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",
            color: arcBlue
        },
        h4: {
            fontFamily: "Raleway",
            fontSize: "1.75rem",
            color: arcBlue,
            fontWeight: 700
        },
        subtitle1: {
            fontSize: "1.25rem",
            fontWeight: 300,
            color: arcGrey
        },
        subtitle2: {
            color: "white",
            fontSize: "1.25rem",
            fontWeight: 300
        },
        body1: {
            fontSize: "1.25rem",
            color: arcGrey,
            fontWeight: 300
        },
        caption: {
            fontSize: "1rem",
            fontWeight: 300,
            color: arcGrey
        },
        learnButton: {
            borderColor: arcBlue,
            color: arcBlue,
            borderWidth: 2,
            textTransform: "none",
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold",
        },
    },
    components: {
        "MuiInputLabel": {
            styleOverrides: {
                root: {
                    color: arcBlue,
                    fontSize: "1rem"
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                underline: {
                    "&:before": {
                        borderBottom: `2px solid ${arcBlue}`
                    },
                    "&:hover:not($disabled):not($focused):not($error):before": {
                        borderBottom: `2px solid ${arcBlue}`
                    }
                }
            }
        }
    }
});