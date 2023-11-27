import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState(false);

  const onChange = () => {
    setVisible(!visible);
    setType(!type);
  };

  return (
    <div className='mainbox'>
      <div className='box1'></div>
      <div className='box'>
        <h1 style={{ color: 'white' }} className='heading'>
          Member Login
        </h1>
        <TextField
          className='name'
          placeholder='username/email'
          sx={{ color: 'white' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <EmailIcon className='icon' style={{ color: 'white' }} />
              </InputAdornment>
            ),
          }}
        />
        <br />
        <br />
        <TextField
          className='name'
          placeholder='password'
          type={type ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end' onClick={onChange} style={{ cursor: 'pointer' }}>
                {visible ? <VisibilityIcon style={{ color: 'white' }} /> : <VisibilityOffIcon style={{ color: 'white' }} />}
              </InputAdornment>
            ),
          }}
        />
        <br />
        <br />
        <p className='forgot'>
          Forgot <a href='#' className='anchor1'> Username/Password</a>
        </p>
        <Button type='submit' className='button' href='/'>
          Sign in
        </Button>
        <br />
        <br />
        <a className='anchor2' href='/Register'>
          Create your Account
        </a>
      </div>
    </div>
  );
};

export default Login;
