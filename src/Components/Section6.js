import React from 'react'

//import components
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';

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

const Section6 = () => {
  return (
    <ThemeProvider theme={theme}>
        <Container  maxWidth={false} disableGutters>
            <Box sx={outerBox}>
                <Typography sx={heading} variant='h1' component='h2'>Testimonials</Typography>
                <Paper sx={mainContent} elevation={3}>
                    <Box sx={leftBox}>
                        <Box sx={imgBox}>
                            <Image src='/images/man.jpg' alt=''></Image>
                        </Box>
                    </Box>
                    <Box sx={rightBox}>
                        <Typography sx={testimonial} variant='h3' component='h3'>“Working with Extensive is great” </Typography>
                        <Box sx={line}></Box>
                        <Box sx={personBox}>
                            <Typography sx={personName} variant='h4' component='h5'>Hershel</Typography>
                            <Typography sx={title}>Head of director</Typography>
                            <Typography sx={company}>GGPL PVT LTD.  </Typography>
                        </Box>
                    </Box>
                    <Box sx={iconBox}>
                        <Box sx={icon}></Box>
                    </Box>
                </Paper>

                {/* only for mobile view */}
                <Box sx={mobileIconBox}>
                        <Box sx={mobileIcon}></Box>
                </Box>
            </Box>
        </Container>
    </ThemeProvider>
  )
}

export default Section6

const outerBox = {
    // bgcolor: '#cfe8fc', 
    height: '120vh', 
    // border: '1px solid #000',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.between('sm','md')]: {
        height: '100vh',
    },
    [theme.breakpoints.down('sm')]: {
        height: '80vh',
    },
}

const heading = {
    color: '#301E4E',
    fontWeight: 600,
    position: 'absolute',
    top: '10%',
    left: '5%',
    [theme.breakpoints.between('sm','md')]: {
        fontSize: '3.5rem',
    },
    [theme.breakpoints.down('sm')]: {
       fontSize: '2.5rem',
    },
}

const mainContent = {
    height: '60%',
    width: '90%',
    position: 'absolute',
    top: '35%',
    borderRadius: '10px',
    display: 'flex',
    [theme.breakpoints.between('sm','md')]: {
        top: '30%',
    },
    [theme.breakpoints.down('sm')]: {
        top: '25%',
        flexDirection: 'column',
    },

}

const leftBox = {
    height: '100%',
    width: '25%',
    // border: '1px solid #000',
    display: 'flex',
    justifyContent: 'center',

    [theme.breakpoints.down('sm')]: {
       width: '100%',
       height: '50%',
    },
    
}

const imgBox = {
    height: '200px',
    width: '200px',
    // border: '1px solid #000',
    position: 'absolute',
    top: '10%',
    [theme.breakpoints.between('sm','md')]: {
        width: '120px',
        height: '120px',
    },
    [theme.breakpoints.down('sm')]: {
        width: '100px',
        height: '100px',
        alignItems: 'center',
        justifyContent: 'center',
        top: '5%',
    },
}

const Image = styled('img')(({ theme }) => ({
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
}))

const rightBox = {
    height: '100%',
    width: '75%',
    // border: '1px solid #000',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
       width: '100%',
       height: '50%',
    },
}

const testimonial = {
    color: '#301E4E',
    fontWeight: 600,
    position: 'absolute',
    top: '10%',
    [theme.breakpoints.between('sm','md')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
    },
  
}

const personBox = {
    height: '30%',
    width: '25%',
    // border: '1px solid #000',
    position: 'absolute',
    top: '50%',
    right: '8%',
    display: 'flex',
    justifyContent: 'center',
    
    [theme.breakpoints.down('sm')]: {
        width: '90%',
        height: '50%',
        right: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        top: '40%',
    },
    
}

const personName = {
    color: '#301E4E',
    fontWeight: 600,
    fontSize: '2.5rem',
    position: 'absolute',
    top: '10%',
    [theme.breakpoints.between('sm','md')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.down('sm')]: {
       fontSize: '1rem',
    },
    
}

const title = {
    color: '#FF6E6C',
    position: 'absolute',
    top: '50%',
    fontSize: '1.2rem',
    [theme.breakpoints.between('sm','md')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
       fontSize: '0.8rem',
       top: '40%',
    },
}

const company = {
    color: '#FF6E6C',
    position: 'absolute',
    top: '60%',
    marginTop: '10px',
    fontSize: '1.2rem',
    [theme.breakpoints.between('sm','md')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
       fontSize: '0.8rem',
       marginTop: '5px',
    },
}

const line = {
    height: '5px',
    width: '200px',
    bgcolor: '#301E4E',
    borderRadius: '10px',
    position: 'absolute',
    top: '60%',
    right: '35%',
    [theme.breakpoints.between('sm','md')]: {
        width: '100px',
    },
    [theme.breakpoints.down('sm')]: {
       display: 'none',
    },

}

const iconBox = {
    width: '200px',
    height: '20px',
    // border: '1px solid #000',
    borderRadius: '25px',
    boxShadow: '0px 0px 10px 0px #c9c6c5',
    position: 'absolute',
    bottom: '10%',
    left: '40%',
    [theme.breakpoints.between('sm','md')]: {
        width: '100px',
        height: '10px',
    },
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },  
}

const icon = {
    height: '20px',
    width: '40%',
    bgcolor: '#301E4E',
    borderRadius: '25px 0 0 25px',
    [theme.breakpoints.between('sm','md')]: {
       height: '10px',
    },
    [theme.breakpoints.down('sm')]: {
       
    },
}

//-----------------
// MOBILE ONLY ICON
//-----------------

const mobileIconBox = {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'flex',
        width: '80px',
        height: '10px',
        // border: '1px solid #000',
        borderRadius: '25px',
        boxShadow: '0px 0px 10px 0px #c9c6c5',
        position: 'absolute',
        bottom: '10%',
        left: '40%',
    },
}

const mobileIcon = {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'flex',
        height: '10px',
        width: '40%',
        bgcolor: '#301E4E',
        borderRadius: '25px 0 0 25px',
    },
}