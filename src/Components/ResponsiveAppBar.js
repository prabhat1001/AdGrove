import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import Slider from "./Slider";

const pages = ["Contact", "Work"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ zIndex: 4, bgcolor: "#fff" }}>
        <Toolbar disableGutters>
          <AutoAwesomeMosaicIcon
            sx={{
              color: "#1F1235",
              display: { xs: "none", md: "flex" },
              mr: 1,
            }}
          />
          <AutoAwesomeMosaicIcon
            sx={{
              color: "#1F1235",
              display: { xs: "flex", md: "none" },
              mr: 1,
            }}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          ></Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  mx: 1,
                  my: 2,
                  color: "#301E4E",
                  display: "block",
                  fontFamily: "Playfair Display",
                  textTransform: "capitalize",
                  fontSize: "1.2rem",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Slider />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
