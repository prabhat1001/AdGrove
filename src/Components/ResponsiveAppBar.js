import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import Slider from './Slider';

const pages = ['Contact', 'Work'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{zIndex:4, bgcolor:'#fff'}}>
        <Toolbar disableGutters>
          <AutoAwesomeMosaicIcon  sx={{ color:'#1F1235', display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <AutoAwesomeMosaicIcon  sx={{ color:'#1F1235', display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent:'flex-end' }}>

               {/* 3 bar button
                <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                  <MenuIcon />
                </IconButton> */}

          </Box>

          

          
          <Box sx={{ flexGrow: 1, display: { xs: 'none',sm:'flex', md: 'flex' },justifyContent:'flex-end'  }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ mx: 1, my: 2, color:'#1F1235', display: 'block' }}
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
