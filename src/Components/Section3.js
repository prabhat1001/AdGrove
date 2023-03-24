import React from "react";

//import components
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/material/styles";

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

const Page3 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} disableGutters>
        <Box sx={outerBox}>
          <Box sx={innerBox}>
            <Box sx={boxLeft}>
              <Image src="/images/blob.png"></Image>
              <Typography sx={heading} variant="h1" color="primary">
                WHAT WE DO.
              </Typography>
              <Typography sx={subHeading} variant="h6" color="primary">
                We do lots of stuffs , basically adding value to your product .
              </Typography>
            </Box>
            <Box sx={boxRight}>
              <UList>
                <ListItem>
                  <Typography sx={listItem} variant="h6" color="primary">
                    Digital Marketing
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography sx={listItem} variant="h6" color="primary">
                    Digital Marketing
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography sx={listItem} variant="h6" color="primary">
                    Digital Marketing
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography sx={listItem} variant="h6" color="primary">
                    Digital Marketing
                  </Typography>
                </ListItem>
              </UList>
              <Button sx={button} variant="contained">
                VIEW ALL
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Page3;

const outerBox = {
  // bgcolor: '#cfe8fc',
  height: "100vh",
  // border: '1px solid #000',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.between("sm", "md")]: {
    height: "80vh",
  },
  [theme.breakpoints.down("sm")]: {
    height: "100vh",
  },
};

const innerBox = {
  // bgcolor: '#ffbc70',
  height: "80vh",
  width: "100vw",
  // border: '1px solid #000',
  display: "flex",

  [theme.breakpoints.between("sm", "md")]: {
    height: "60vh",
  },
  [theme.breakpoints.down("sm")]: {
    height: "100vh",
    flexDirection: "column",
  },
};

const boxLeft = {
  // bgcolor: '#d151d1',
  width: "50%",
  height: "100%",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    bgcolor: "#E7D7F6",
    height: "35%",
  },
};

const Image = styled("img")(({ theme }) => ({
  width: "80%",
  height: "100%",
  [theme.breakpoints.between("sm", "md")]: {},
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const heading = {
  position: "absolute",
  // border: '1px solid #000',
  fontWeight: "bold",
  width: "60%",
  top: "10%",
  left: "10%",
  [theme.breakpoints.between("sm", "md")]: {
    top: "20%",
    fontSize: "3rem",
    width: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    left: "5%",
    top: "5%",
    width: "40%",
    fontSize: "2.02rem",
  },
};

const subHeading = {
  fontFamily: "Source Sans Pro",
  fontWeight: "600",
  position: "absolute",
  fontSize: "1.5rem",
  // border: '1px solid #000',
  width: "50%",
  top: "60%",
  left: "10%",
  [theme.breakpoints.between("sm", "md")]: {
    top: "60%",
    fontSize: "1rem",
    lineHeight: "1.2rem",
    width: "55%",
  },
  [theme.breakpoints.down("sm")]: {
    top: "65%",
    width: "85%",
    left: "5%",
    fontWeight: "normal",
    fontSize: "0.8rem",
  },
};

const boxRight = {
  // bgcolor:'#43faba',
  width: "50%",
  height: "100%",
  position: "relative",
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
};

const UList = styled("ul")(({ theme }) => ({
  // border: '1px solid #000',
  listStyle: "none",
  position: "absolute",
  top: "5%",
  width: "80%",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  marginLeft: "10%",
  [theme.breakpoints.between("sm", "md")]: {
    height: "40vh",
    width: "80%",
  },
  [theme.breakpoints.down("sm")]: {
    height: "50vh",
    width: "90%",
    marginLeft: "5%",
  },
}));

const ListItem = styled("li")(({ theme }) => ({
  // border: '1px solid #000',
  width: "100%",
  height: "10%",
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
  marginBottom: "1rem",
  [theme.breakpoints.between("sm", "md")]: {
    height: "20%",
    width: "100%",
    marginBottom: "0.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "20%",
    marginBottom: "0.5rem",
  },
}));

const listItem = {
  fontWeight: "600",
  fontSize: "3rem",
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
};

const button = {
  position: "relative",
  fontFamily: "Source Sans Pro",
  fontSize: "1rem",
  borderRadius: "0.5rem",
  top: "85%",
  left: "10%",
  "&:hover": { backgroundColor: "#57358f" },
  color: "primary",
  padding: "0.8rem 2rem",
  [theme.breakpoints.between("sm", "md")]: {
    padding: "0.5rem 1.5rem",
    borderRadius: "0.3rem",
  },
  [theme.breakpoints.down("sm")]: {
    top: "80%",
    left: "5%",
    padding: "0.5rem 1.5rem",
    fontSize: "0.8rem",
    borderRadius: "0.2rem",
  },
};
