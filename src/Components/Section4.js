import React from 'react'

//import components
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
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


const Page4 = () => {
  return (
    <ThemeProvider theme={theme}>
        <Container  maxWidth={false} disableGutters>
        <Box sx={outerBox}>
            <Typography sx={mainHeading} variant='h1' component='h2'>Our Work.</Typography>
            <Box sx={mobileDisplay}>
                <Box sx={starbucks}>
                    <Box sx={cardImg}>
                        <StarbucksImg src='/images/starbucks.png'></StarbucksImg>
                        <Box sx={descrptBox}>
                            <Typography sx={tiny} variant='h6' component='h3'>DIGITAL MARKETING</Typography>
                            <Typography sx={Brand} variant='h3' component='h3'>STARBUCKS</Typography>
                            <Typography sx={para}>Our ad campaign brought 80% footfall to the company</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={nike}>
                <Box sx={cardImg}>
                        <NikeImg src='/images/nike.png'></NikeImg>
                        <Box sx={descrptBox}>
                            <Typography sx={tiny} variant='h6' component='h3'>DIGITAL MARKETING</Typography>
                            <Typography sx={Brand} variant='h3' component='h3'>Nike</Typography>
                            <Typography sx={para}>Our ad campaign brought 80% footfall to the company</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={starbucks}>
                <Box sx={cardImg}>
                        <StarbucksImg src='/images/starbucks.png'></StarbucksImg>
                        <Box sx={descrptBox}>
                            <Typography sx={tiny} variant='h6' component='h3'>DIGITAL MARKETING</Typography>
                            <Typography sx={Brand} variant='h3' component='h3'>STARBUCKS</Typography>
                            <Typography sx={para}>Our ad campaign brought 80% footfall to the company</Typography>
                        </Box>
                    </Box>
                </Box>

            </Box>
            <Button sx={button} variant="contained">VIEW ALL</Button>
            <Box sx={mainContent}>
                <Box sx={upperCont}>
                    <Box sx={leftUpper}>
                        <Image1 src='/images/starbucks.png'></Image1>
                        <Box sx={descrptBox}>
                            <Typography sx={tiny} variant='h6' component='h3'>DIGITAL MARKETING</Typography>
                            <Typography sx={Brand} variant='h3' component='h3'>STARBUCKS</Typography>
                            <Typography sx={para}>Our ad campaign brought 80% footfall to the company</Typography>
                        </Box>
                    </Box>
                    <Box sx={rightUpper}>
                    <Image2 src='/images/shoe.png'></Image2>
                        <Box sx={descrptBox}>
                            <Typography sx={tiny} variant='h6' component='h3'>DIGITAL MARKETING</Typography>
                            <Typography sx={Brand} variant='h3' component='h3'>Nike</Typography>
                            <Typography sx={para}>Our ad campaign brought 80% footfall to the company</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={lowerCont}>
                    <Box sx={leftLower}>
                            <Image2 src='/images/shoe.png'></Image2>
                            <Box sx={descrptBox}>
                                <Typography sx={tiny} variant='h6' component='h3'>DIGITAL MARKETING</Typography>
                                <Typography sx={Brand} variant='h3' component='h3'>Nike</Typography>
                                <Typography sx={para}>Our ad campaign brought 80% footfall to the company</Typography>
                            </Box>
                    </Box>
                    <Box sx={rightLower}>
                            <Image1 src='/images/starbucks.png'></Image1>
                            <Box sx={descrptBox}>
                                <Typography sx={tiny} variant='h6' component='h3'>DIGITAL MARKETING</Typography>
                                <Typography sx={Brand} variant='h3' component='h3'>STARBUCKS</Typography>
                                <Typography sx={para}>Our ad campaign brought 80% footfall to the company</Typography>
                            </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
        </Container>
    </ThemeProvider>    
  )
}

export default Page4

const outerBox = {
    bgcolor: '#301E4E', 
    height: '380vh', 
    border: '1px solid #000',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.between('sm','md')]: {
        height: '250vh',
    },
    [theme.breakpoints.down('sm')]: {
        height: '250vh',
    },
}

const mainHeading = {
    color:'#E2DAEB',
    // border: '1px solid #fff',
    position: 'absolute',
    top: '1%',
    left: '5%',
    width: '25%',
    fontFamily: 'Playfair Display',
    fontWeight: 600,
    [theme.breakpoints.between('sm','md')]: {
        fontSize: '3.5rem',
    },
    [theme.breakpoints.down('sm')]: {
        top: '1%',
        width: '35%',
        fontSize: '2.5rem',
    },
}

const button = {
    position: 'absolute',
    fontFamily: 'Source Sans Pro',
    fontSize: '1rem',
    borderRadius: '0.5rem',
    top: '12%',
    left: '5%',
    "&:hover": {backgroundColor: "#ff3072"}, 
    bgcolor: '#FF6E6C',
    padding: '0.8rem 2rem',
    [theme.breakpoints.between('sm','md')]: {
        padding: '0.5rem 1.8rem',
        borderRadius: '0.3rem',
        top: '12%',
    },
    [theme.breakpoints.down('sm')]: {
        top: '95%',
        width: '90%',
        height: '3%',
        borderRadius: '0.3rem',
    }
}


// -----------------------------
//       MAIN CONTENT
//------------------------------

const mainContent = {
    width: '90%',
    height: '300vh',
    // border: '1px solid #fff',
    position: 'absolute',
    top: '18%',
    [theme.breakpoints.between('sm','md')]: {
        top: '18%',
        height: '200vh',
    },
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    }
}

const upperCont = {
    width: '100%',
    height: '50%',
    // border: '1px solid #fff',
    display: 'flex',
    justifyContent: 'space-between',

}

// -----------------------------
//       UPPER CONTENT
//------------------------------

const leftUpper = {
    width: '48%',
    height: '100%',
    // border: '1px solid #fff',
}

const Image1= styled('img')(({ theme }) => ({
    width: '100%',
    height: '67%',
    objectFit: 'cover',
}));

const descrptBox = {
    width: '100%',
    height: '33%',
    // border: '1px solid #fff',
}

const tiny = {
    fontFamily: 'Source Sans Pro',
    fontSize: '1rem',
    color: '#B7364A',
    marginTop: '1rem',
    [theme.breakpoints.between('sm','md')]: {
        fontSize: '0.8rem',
        marginTop: '0.5rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.7rem',
        marginTop: '0.2rem',
    }
}

const Brand = {
    color: '#E7D7F6',
    fontSize: '3.5rem',
    [theme.breakpoints.between('sm','md')]: {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    }
}

const para = {
    color: '#E7D7F6',
    width: '90%',
    fontFamily: 'Source Sans Pro',
    fontSize: '1.8rem',
    marginTop: '1rem',
    [theme.breakpoints.between('sm','md')]: {
        fontSize: '1rem',
        marginTop: '0.2rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.7rem',
        marginTop: '0.2rem',
        width: '100%',
    }
}

const Image2= styled('img')(({ theme }) => ({
    width: '100%',
    height: '45%',
    // objectFit: 'cover',
}));


const rightUpper = {
    width: '50%',
    height: '100%',
    // border: '1px solid #fff',
}

// -----------------------------
//       LOWER CONTENT
//------------------------------


const lowerCont = {
    width: '100%',
    height: '50%',
    // border: '1px solid #fff',
    display: 'flex',
    justifyContent: 'space-between',
}

const leftLower = {
    width: '48%',
    height: '100%',
    // border: '1px solid #fff',
}

const rightLower = {
    width: '50%',
    height: '100%',
    // border: '1px solid #fff',
}



//------------------------
//  MOBILE DISPLAY - only present in mobile view
//------------------------

const mobileDisplay = {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'flex',
        width: '90%',
        height: '80%',
        // border: '1px solid #fff',
        position: 'absolute',
        top: '12%',
        left: '5%',
        flexDirection: 'column',
        justifyContent: 'space-around',

    }
}

const starbucks = {
    width: '100%',
    height: '33%',
    // border: '1px solid #fff',
}

const StarbucksImg = styled('img')(({ theme }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',

}));

const cardImg = {
    width: '100%',
    height: '70%',
    // border: '1px solid #fff',
}

const nike = {
    width: '100%',
    height: '33%',
    // border: '1px solid #fff',
}

const NikeImg = styled('img')(({ theme }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',

}));