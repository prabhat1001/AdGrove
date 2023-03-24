import React from "react";

//import components
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";

const theme = createTheme({
  palette: {
    primary: {
      main: "#301E4E",
    },
    secondary: {
      main: "#B7364A",
    },
  },
  typography: {
    fontFamily: "Playfair Display",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
});

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} disableGutters>
        <Box sx={outerBox}>
          <Box sx={main}>
            <Box sx={left}>
              <Typography sx={Logo} variant="h3" component="h2">
                Logo
              </Typography>
            </Box>
            <Box sx={middle}>
              <Box sx={innerLeft}>
                <Box sx={item}>
                  <Link sx={textLink} href="#">
                    Home Page
                  </Link>
                  <Link sx={textLink} href="#">
                    About Us
                  </Link>
                  <Link sx={textLink} href="#">
                    Book Audit
                  </Link>
                </Box>
              </Box>
              <Box sx={innerRight}>
                <Box sx={item}>
                  <Link sx={textLink} href="#">
                    Contact Us
                  </Link>
                  <Link sx={textLink} href="#">
                    Our Services
                  </Link>
                  <Link sx={textLink} href="#">
                    Blogs
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box sx={right}>
              <Box sx={iconsCont}>
                <Box sx={icons}>
                  <Image src="/images/insta.png"></Image>
                </Box>
                <Box sx={icons}>
                  <Image src="/images/fb.png"></Image>
                </Box>
                <Box sx={icons}>
                  <Image src="/images/twt.png"></Image>
                </Box>
              </Box>
            </Box>
            <Box sx={copyright}>Copyright 2023</Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Footer;

const outerBox = {
  bgcolor: "#301E4E",
  height: "30vh",
  // border: '1px solid #000',
  display: "flex",
  position: "relative",
  marginTop: "10px",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.between("sm", "md")]: {
    height: "30vh",
  },
  [theme.breakpoints.down("sm")]: {
    height: "60vh",
  },
};

const main = {
  width: "100%",
  height: "90%",
  // border: '1px solid #fff',
  display: "flex",
  position: "absolute",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
};

const left = {
  // border: '1px solid #fff',
  width: "20%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {
    width: "30%",
    height: "50%",
    justifyContent: "flex-start",
    marginLeft: "5%",
  },
};

const Logo = {
  color: "#fff",
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
};

const middle = {
  // border: '1px solid #fff',
  width: "80%",
  height: "100%",
  display: "flex",
  // bgcolor: 'red',

  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    height: "50%",
    flexDirection: "column",
    marginTop: "3%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    height: "100%",
  },
};

const right = {
  // border: '1px solid #fff',
  width: "20%",
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    width: "20%",
    height: "40%",
  },
};

const innerLeft = {
  // border: '1px solid #fff',
  width: "50%",
  height: "100%",
  [theme.breakpoints.between("sm", "md")]: {
    width: "60%",
    height: "50%",
    marginLeft: "20%",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
};

const innerRight = {
  // border: '1px solid #fff',
  width: "50%",
  height: "100%",

  [theme.breakpoints.between("sm", "md")]: {
    width: "60%",
    height: "50%",
    marginLeft: "20%",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
};

const iconsCont = {
  // border: '1px solid #fff',
  width: "80%",
  height: "30%",
  marginTop: "25%",
  marginLeft: "10%",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.between("sm", "md")]: {
    marginTop: "45%",
  },
  [theme.breakpoints.down("sm")]: {
    height: "30%",
    width: "100%",
  },
};

const icons = {
  // border: '1px solid #fff',
  width: "33%",
  height: "100%",
};

const Image = styled("img")(({ theme }) => ({
  height: "100%",
  width: "100%",
  objectFit: "contain",
}));

const textLink = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "1.2rem",
  // bgcolor: 'blue',
  // border: '1px solid #fff',
  width: "120px",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "5%",
  },
};

const item = {
  // border: '1px solid #fff',
  width: "100%",
  height: "40%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: "10%",
  [theme.breakpoints.between("sm", "md")]: {
    justifyContent: "space-evenly",
    marginTop: "0%",
    height: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "80%",
    width: "80%",
  },
};

const copyright = {
  // border: '1px solid #fff',
  width: "100%",
  color: "#fff",
  height: "10%",
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  bottom: "10%",
  [theme.breakpoints.down("sm")]: {
    bottom: "0",
    fontSize: "0.7rem",
  },
};
