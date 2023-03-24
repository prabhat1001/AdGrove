import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { styled, alpha } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

export default function Slider() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={sideDrawer}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <IconButton
        sx={closeIcon}
        size="normal"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
      >
        <CloseIcon sx={{ color: "#1F1235" }} />
      </IconButton>

      <UL>
        <LI>Services</LI>
        <LI>About Us</LI>
        <LI>Blogs</LI>
        <LI>Contact Us</LI>
      </UL>

      <Button sx={buttonStyle} variant="contained">
        Book an free marketing Aduit
      </Button>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <div>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <IconButton
              sx={{ bgcolor: "#E7D7F6" }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(anchor, true)}
              color="inherit"
            >
              <MenuIcon sx={{ color: "#1F1235" }} />
            </IconButton>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              elevation={3}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </ThemeProvider>
  );
}

const sideDrawer = {
  width: 450,
  bgcolor: "#301E4E",
  height: "100%",
  [theme.breakpoints.between("sm", "md")]: {
    width: 350,
  },
  [theme.breakpoints.down("sm")]: {
    width: 320,
  },
};

const closeIcon = {
  bgcolor: "#E7D7F6",
  "&:hover": { backgroundColor: "#FF6E6C" },
  position: "absolute",
  right: "9%",
  top: "3%",
};

const ListStyle = {
  paddingLeft: 2,
  fontFamily: "Playfair Display",
  color: "#000",
  fontSize: "5.2rem",
  // bgcolor: '#301E4E',
};

const listItem = {};

//---------------------

const UL = styled("ul")(({ theme }) => ({
  width: "80%",
  height: "60vh",
  // border: "1px solid #fff",
  marginTop: "20%",
  marginLeft: "10%",
  // bgcolor: "#301E4E",
  [theme.breakpoints.between("sm", "md")]: {
    height: "50vh",
  },
  [theme.breakpoints.down("sm")]: {
    height: "30vh",
  },
}));

const LI = styled("li")(({ theme }) => ({
  fontFamily: "Playfair Display",
  // border: "1px solid #fff",
  cursor: "pointer",
  height: "25%",
  listStyle: "none",
  display: "flex",
  fontSize: "3rem",
  fontWeight: "400",
  color: "#fff",
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
  },
}));

const buttonStyle = {
  "&:hover": { backgroundColor: "#ff3072" },
  marginLeft: "10%",
  bgcolor: "#FF6E6C",
  fontFamily: "Source Sans Pro",
  padding: "1rem 4rem",
  marginTop: "5%",
  borderRadius: "10px",
  fontSize: "1rem",
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "0.8rem",
    padding: "1rem 3rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.6rem",
    padding: "0.5rem 1rem",
    borderRadius: "7px",
  },
};
