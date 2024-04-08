import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Menu } from '@mui/material';

export default (props) => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    window.location = '/';
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        sx={{
          width: `100%`,
        }}
      >
        <Toolbar style={{ backgroundColor: '#57c7cb' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                sx={{
                  marginTop: '30px',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <a href='/home'><MenuItem>Home</MenuItem></a>
                <a href='/aboutus'><MenuItem>About Us</MenuItem></a>
                <a href='/jobPosts'><MenuItem>Job Posts</MenuItem></a>
                <a href='/contact'><MenuItem>Contact</MenuItem></a>
                <a href='/companyshowcase'><MenuItem>Company Showcase</MenuItem></a>
              </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.name}
          </Typography>
          <Button 
            color="inherit"
            onClick={() => logout()}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}