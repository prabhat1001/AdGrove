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

const Section5 = () => {
  return (
    <ThemeProvider theme={theme}>
        <Container  maxWidth={false} disableGutters>
            <Box sx={outerBox}>
                <Box sx={headingBox}>
                    <Typography sx={mainHeading} variant='h1' component='h2'>Our Partners.</Typography>
                    <Typography sx={subHeading} variant='h6' component='h3'>Your success is our success.</Typography>
                </Box>
                <Box sx={brandBox}>
                    <Box sx={upperBox}>
                        <Box sx={brandCard}>
                            <Box sx={cardImg}>
                                <Image src='/images/brand1.png' alt=''></Image>
                            </Box>
                            <Typography sx={brandName}>Pintrest</Typography>
                        </Box>
                        <Box sx={brandCard}>
                            <Box sx={cardImg}>
                                <Image src='/images/brand2.png' alt=''></Image>
                            </Box>
                            <Typography sx={brandName}>Snapchat</Typography>
                        </Box>
                        <Box sx={brandCard}>
                            <Box sx={cardImg}>
                                <Image src='/images/brand3.png' alt=''></Image>
                            </Box>
                            <Typography sx={brandName}>Prime</Typography>
                        </Box>
                        <Box sx={brandCard}>
                            <Box sx={cardImg}>
                                <Image src='/images/brand4.png' alt=''></Image>
                            </Box>
                            <Typography sx={brandName}>Brave</Typography>
                        </Box>
                        <Box sx={brandCard}>
                            <Box sx={cardImg}>
                                <Image src='/images/brand5.png' alt=''></Image>
                            </Box>
                            <Typography sx={brandName}>Salesforce</Typography>
                        </Box>
                    </Box>
                    <Box sx={lowerBox}>
                    <Box sx={brandCard}>
                            <Box sx={cardImg}>
                                <Image src='/images/brand6.png' alt=''></Image>
                            </Box>
                            <Typography sx={brandName}>Sass</Typography>
                        </Box>
                        <Box sx={brandCard}>
                            <Box sx={cardImg}>
                                <Image src='/images/brand7.png' alt=''></Image>
                            </Box>
                            <Typography sx={brandName}>Twitch</Typography>
                        </Box>
                        <Box sx={brandCard}>
                            <Box sx={cardImg}>
                                <Image src='/images/brand8.png' alt=''></Image>
                            </Box>
                            <Typography sx={brandName}>Vue</Typography>
                        </Box>
                        <Box sx={brandCard}>
                            <Box sx={cardImg}>
                                <Image src='/images/brand9.png' alt=''></Image>
                            </Box>
                            <Typography sx={brandName}>Dribble</Typography>
                        </Box>
                        <Box sx={brandCard}>
                            <Box sx={cardImg}>
                                <Image src='/images/brand10.png' alt=''></Image>
                            </Box>
                            <Typography sx={brandName}>ticktok</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    </ThemeProvider>
  )
}

export default Section5

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

const headingBox = {
    // bgcolor: '#fff',
    height: '35%',
    width: '35%',
    // border: '1px solid #000',
    position: 'absolute',
    top: '5%',
    left: '5%',
    [theme.breakpoints.between('sm','md')]: {
        height: '30%',
    },
    [theme.breakpoints.down('sm')]: {
        height: '25%',
        width: '55%',
        top: '10%',
    },
}

const mainHeading = {
    color:'#301E4E',
    // border: '1px solid #000',
    // position: 'absolute',
    width: '35%',
    fontFamily: 'Playfair Display',
    fontWeight: 600,
    lineHeight: 1,
    [theme.breakpoints.between('sm','md')]: {
        fontSize: '3.5rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '2.5rem',
    },
}

const subHeading = {
    fontFamily: 'Source Sans Pro',
    fontSize: '1.7rem',
    color: '#FF6E6C',
    marginTop: '0.5rem',
    [theme.breakpoints.between('sm','md')]: {
        fontSize: '0.8rem',
        marginTop: '0.5rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.7rem',
        marginTop: '0.2rem',
    }
}

const brandBox = {
    // border: '1px solid #000',
    width: '90%',
    height: '50%',
    position: 'absolute',
    bottom: '5%',
    [theme.breakpoints.between('sm','md')]: {
        bottom: '8%',
    },
    [theme.breakpoints.down('sm')]: {
        height: '40%',
        top: '45%',
    },
}

const upperBox = {
    // border: '1px solid #000',
    width: '100%',
    height: '50%',
    display: 'flex',
    justifyContent: 'space-between',
}

const lowerBox = {
    // border: '1px solid #000',
    width: '100%',
    height: '50%',
    display: 'flex',
    justifyContent: 'space-between',
    
}

const brandCard = {
    // border: '1px solid #000',
    width: '15%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    '&:hover': {
        cursor: 'pointer',
        boxShadow: '0px 0px 10px 0px #c9c6c5',
        transition : 'all 0.3s ease-in-out',
        borderRadius: '10px',
        transform: 'scale(1.05)',
    },


    [theme.breakpoints.between('sm','md')]: {
        width: '20%',
        '&:hover': {
            borderRadius: '5px',
        },
    },
    [theme.breakpoints.down('sm')]: {
        width: '20%',
        '&:hover': {
            boxShadow: 'none',
            transition : 'none',
            borderRadius: 'none',
            transform: 'none',
        },
    },
}

const cardImg = {
    // border: '1px solid #000',
    width: '70%',
    height: '70%',
    [theme.breakpoints.between('sm','md')]: {
        width: '80%',
    },
    [theme.breakpoints.down('sm')]: {
        width: '90%',
        // height: '90%',
    },
}

const Image = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    [theme.breakpoints.between('sm','md')]: {
        
    },
    [theme.breakpoints.down('sm')]: {
        
    },
});

const brandName = {
    fontSize: '1.5rem',
    [theme.breakpoints.between('sm','md')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem',
    },
}