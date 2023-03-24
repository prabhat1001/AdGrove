import React from "react";

//import components
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { border, boxSizing } from "@mui/system";
import { styled, alpha } from "@mui/material/styles";
import { Typography } from "@mui/material";

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

const LandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} disableGutters>
        <Box sx={innerBox}>
          <Image src="/images/img1.jpg" alt=""></Image>
          <Box sx={TextBox}>
            <Box sx={headingBox}>
              <Typography
                sx={heading1}
                variant="h1"
                component="h2"
                color="primary"
              >
                We are
                <Typography
                  sx={heading2}
                  variant="h1"
                  component="h2"
                  color="secondary"
                >
                  Extensive.
                </Typography>
              </Typography>
            </Box>
            <Box sx={subHeadingBox}>
              <Typography
                sx={heading3}
                variant="h4"
                component="h2"
                color="primary"
              >
                Helping you standout in a crowded market.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LandingPage;

const innerBox = {
  bgcolor: "#cfe8fc",
  height: "100vh",
  display: "relative",
  [theme.breakpoints.down("sm")]: {
    height: "80vh",
  },
};

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "brightness(50%)",
}));

// const TextBox = styled('div')(({ theme }) => ({
//     width: '600px',
//     height: '400px',
//     backgroundColor: 'hsla(0, 100%, 100%, 0.6)',
//     position: 'absolute',
//     top: '30%',
//     border: '1px solid #000',
//     // opacity: '0.5',

// }));

// Sx Styling

const TextBox = {
  width: "600px",
  height: "400px",
  backgroundColor: "hsla(0, 100%, 100%, 0.6)",
  position: "absolute",
  top: "30%",
  // border: '1px solid #000',
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    height: "100px",
    top: "10%",
  },
};

const headingBox = {
  width: "85%",
  alignItems: "left",
  mx: "auto",
  // border: '1px solid #000',
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "space-evenly",
  },
};

const heading1 = {
  // border: '1px solid #000',

  [theme.breakpoints.down("sm")]: {
    // width: '120px',
    fontSize: "2rem",
    display: "flex",
    justifyContent: "center",
  },
};

const heading2 = {
  color: "#B7364A",
  // border: '1px solid #000',
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 1,
    fontSize: "2rem",
    color: "#FF6E6C",
  },
};

const subHeadingBox = {
  width: "84%",
  alignItems: "left",
  my: 2,
  // border: '1px solid #000',
  mx: "auto",
  [theme.breakpoints.down("sm")]: {
    my: 1,
  },
};

const heading3 = {
  // border: '1px solid #000',
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
    display: "flex",
    justifyContent: "center",
  },
};
