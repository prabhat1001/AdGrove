import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

export default function Slider() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350, bgcolor: '#301E4E', height: '100vh' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Services', 'About Us', 'Blogs', 'Contact Us'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{bgcolor: '#301E4E'}}>
            <ListItemButton>
              <ListItemText sx={ListStyle} primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Button sx={{"&:hover": {backgroundColor: "#ff3072"}, marginLeft: 4, bgcolor: '#FF6E6C'}} variant="contained">Book an free marketing Aduit</Button>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
            <IconButton sx={{bgcolor:'#E7D7F6'}} size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={toggleDrawer(anchor, true)} color="inherit">
                <MenuIcon sx={{color:'#1F1235'}} />
            </IconButton>
            <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
            >
                {list(anchor)}
            </Drawer>
        </React.Fragment>
      ))}
    </div>
    </ThemeProvider>
  );
}

const ListStyle = {
  paddingLeft:2,
  fontFamily:'Playfair Display',
  color: '#fff',
  // bgcolor: '#301E4E',
}