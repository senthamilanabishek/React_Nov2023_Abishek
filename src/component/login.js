import React from 'react';
import {useState} from 'react';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import './login.css';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email'; // Corrected import statement
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Grid } from '@mui/material';
const Login=()=>
{
    const [visibile,setVisible]=useState(false);
    const[type,setType]=useState(false);
    const onchange=()=>
    {
           setVisible(!visibile);
           setType(!type);
    }
    return(
    <Grid className='mainbox'>
        <div className='box1'></div>
        <div className='box'>
            <h1  style={{color:"white"}} className='heading'>Member Login</h1>
            <TextField style={{border:  "white"}}
            className='name'
            placeholder="username/email"
            // style={{backgroundColor:'lightgrey'}}
            sx={{color:'white'}}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                <EmailIcon className="icon" style={{color:"white"}} />
              </InputAdornment>
            ),
        }}
        />
            <br></br>
            <br/>
            <TextField
            className='name'
          placeholder='password'
          type={type ? ('text'):('password')}
          InputProps={{
              endAdornment: (
              <InputAdornment position="end" onClick={onchange} style={{cursor:'pointer'}}>
                {visibile ? (<VisibilityIcon style={{color:'white'}}/>):(<VisibilityOffIcon style={{color:'white'}}/>)}
              </InputAdornment>

              
            ),
        }}
     />

            <br></br>
            <br/>
            <p className='forgot'>Forgot  <a href='#' className='anchor1'>  Username/Password</a></p>
            {/* <br></br> */}
            <button type='submit' className='button'>Sign in</button>
            <br></br>
            <br/>
            <a className='anchor2' href='#' >Create your Account --></a>
            
        </div>
    </Grid>
    );
}
export default Login;