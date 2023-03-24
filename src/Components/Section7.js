import React from 'react'


//import components
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const theme = createTheme ({
    palette: {
      primary: {
        main: '#301E4E',
      },
      secondary: {
        main: '#B7364A',
      },
    },
    typography: {
      fontFamily: 'Playfair Display',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
    },

});

const Section7 = () => {
  return (
    <ThemeProvider theme={theme}>
        <Container  maxWidth={false} disableGutters>
            <Box sx={outerBox}>
                <Box sx={content}>
                    <Typography sx={text} variant="h1" component="h2">Looking to drive results?
                        <Link sx={textLink} href="#">Let's Chat.</Link>
                    </Typography>
                </Box>
            </Box>
        </Container>
    </ThemeProvider>
  )
}

export default Section7

const outerBox = {
    bgcolor: '#301E4E',
    height: '50vh', 
    // border: '1px solid #000',
    display: 'flex',
    position: 'relative',
    

    [theme.breakpoints.between('sm','md')]: {
        height: '40vh',
    },
    [theme.breakpoints.down('sm')]: {
        height: '25vh',
    },
}

const content = {
    width: '80%',
    height: '90%',
    // bgcolor: '#fff',
    // border: '1px solid #000',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    top:'5%',
    left: '5%',
    [theme.breakpoints.between('sm','md')]: {
        width: '80%',
    },
    [theme.breakpoints.down('sm')]: {
       width: '90%',
    },
}

const text = {
    color: '#A17FC9',
    fontWeight: 'bold',
    [theme.breakpoints.between('sm','md')]: {
        fontSize: '3.5rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    },

}

const textLink = {
    color: '#FF6E6C',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderBottom: '4px solid #FF6E6C',
    paddingLeft: '10px',
    [theme.breakpoints.between('sm','md')]: {
        fontSize: '3.5rem',
        borderBottom: '3px solid #FF6E6C',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
        borderBottom: '2px solid #FF6E6C',
    },
}