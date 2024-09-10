import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { DialogContentText } from '@mui/material';
import { AuthService } from '../service/AuthService';
import cookie from "react-cookies";
import { JWT_COOKIE_KEY } from '../constants';

export default function LoginDialog(props) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };


  let username;
  let password;

  const login = () => {
    AuthService.getJWT(username, password)
      .then(res => {
        const jwt = res.data.id_token;  // check @JsonProperty to get the key in response.data
        cookie.save(JWT_COOKIE_KEY, jwt); 
        window.location.reload(); // refresh to activate JWT
      })
      .catch(err => {
        console.error(err);
        setErrorMsg(err.message);
      });
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
    >
      <DialogTitle>Enter your credentials:</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          label="Username"
          type="text"
          fullWidth
          variant="standard"
          onChange={(event) => username = event.target.value}
        />

        <FormControl variant="standard" fullWidth>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={(event) => password = event.target.value}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <DialogContentText id="alert-msg" style={{"color": "red"}}>
          {errorMsg}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>Cancel</Button>
        <Button type="submit" onClick={login}>Login</Button>
      </DialogActions>
    </Dialog>
  );
}
