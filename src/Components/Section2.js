import React from "react";

//import components
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

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

const Page2 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} disableGutters>
        <Box sx={innerBox}>
          <Typography
            sx={smallHeading}
            variant="h6"
            component="h2"
            color="primary"
          >
            WHO WE ARE
          </Typography>
          <Typography sx={mainHeading} variant="h1" component="h2">
            {" "}
            We are Extensive.
          </Typography>
          <Typography sx={para}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Typography>
          <Button sx={button} variant="contained">
            Book an free marketing Aduit
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Page2;

const innerBox = {
  // bgcolor: '#cfe8fc',
  height: "100vh",
  // border: '1px solid #000',
  [theme.breakpoints.between("sm", "md")]: {
    height: "80vh",
  },
  [theme.breakpoints.down("sm")]: {
    height: "60vh",
  },
};

const smallHeading = {
  position: "relative",
  fontWeight: "bold",
  top: "20%",
  left: "5%",
  width: "90%",
  // border: '1px solid #000',
  [theme.breakpoints.between("sm", "md")]: {
    top: "25%",
  },
  [theme.breakpoints.down("sm")]: {
    top: "20%",
    fontSize: "1rem",
  },
};

const mainHeading = {
  color: "#463366",
  // border: '1px solid #000',
  position: "relative",
  top: "30%",
  left: "5%",
  width: "90%",
  fontFamily: "Playfair Display",
  fontWeight: 600,
  [theme.breakpoints.between("sm", "md")]: {
    top: "30%",
    fontSize: "3.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    top: "25%",
    fontSize: "2rem",
  },
};

const para = {
  fontFamily: "Source Sans Pro",
  position: "relative",
  top: "35%",
  left: "5%",
  // border: '1px solid #000',
  width: "90%",
  fontSize: "1.8rem",
  lineHeight: "2.4rem",
  color: "#494949",
  textAlign: "justify",
  [theme.breakpoints.between("sm", "md")]: {
    width: "90%",
    top: "35%",
    fontSize: "1.3rem",
    lineHeight: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    top: "30%",
    fontSize: "0.9rem",
    lineHeight: "1.2rem",
  },
};

const button = {
  position: "relative",
  fontFamily: "Source Sans Pro",
  fontSize: "1rem",
  borderRadius: "0.5rem",
  top: "40%",
  left: "5%",
  "&:hover": { backgroundColor: "#57358f" },
  color: "primary",
  padding: "0.8rem 2rem",
  [theme.breakpoints.between("sm", "md")]: {
    padding: "0.5rem 1.5rem",
    borderRadius: "0.3rem",
  },
  [theme.breakpoints.down("sm")]: {
    top: "35%",
    padding: "0.3rem 1rem",
    fontSize: "0.8rem",
    borderRadius: "0.2rem",
  },
};
