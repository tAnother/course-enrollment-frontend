import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import LoginDialog from './LoginDialog';
import { JWT_COOKIE_KEY } from '../constants';
import cookie from "react-cookies"

export default function NavBar() {
  const [loginDialogOpen, setLoginDialogOpen] = React.useState(false);
  const handleOpenLogin = () => {
    if (isLoggedIn) {
      // logout: just remove token and hard refresh
      cookie.remove(JWT_COOKIE_KEY);
      window.location.reload();
    } else {
      setLoginDialogOpen(true);
    }
  };

  const handleCloseLogin = () => {
    setLoginDialogOpen(false);
  };

  let isLoggedIn = !!cookie.load(JWT_COOKIE_KEY);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Course Enrollment
          </Typography>
          <Button color="inherit" component={Link} to="/">All Courses</Button>
          <Button color="inherit" component={Link} to="/enrolled">Enrolled</Button>
          <Button color="inherit" onClick={handleOpenLogin}>{isLoggedIn ? 'Logout' : 'Login'}</Button>
        </Toolbar>
      </AppBar>

      <LoginDialog open={loginDialogOpen} onClose={handleCloseLogin}/>
    </Box>
  );
}