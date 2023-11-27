import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './login.css';
import {useState} from 'react';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import './login.css';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email'; // Corrected import statement
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Brid() {
  const [visibile,setVisible]=useState(false);
    const[type,setType]=useState(false);
    const onchange=()=>
    {
           setVisible(!visibile);
           setType(!type);
    }
    const[popUp,setPopup]=useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const handleEmail=(event)=>
  {
    setEmail(event.target.value);
  }
  const handlePassword=(event)=>
  {
    setPassword(event.target.value);
  }
  const fetch=async(event)=>{
    event.preventDefault();
    

    const response=await axios.get("http://localhost:3001/users");
    response.data.map((obj)=>{
      
      if(obj.email===email)
      {
       
        if(obj.password===password)
        {
          
          console.log("Success");
          navigate('/')
          
        }
        else
        setPopup(true);
        
        
      }
      else
      setPopup(true);
      
     
      
    })
    
    
  }
  return (
    <body className='bb'>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} className='mainbox'>
        <Grid item xs={8} md={4} className='boxx1'></Grid>
        <Grid item xs={8} md={4} className='boxx'>
        {/* <div className='box'> */}
            <h1  style={{color:"white"}} className='heading'>Member Login</h1>
            <TextField style={{border:  "white"}}
            className='name'
            placeholder="username/email"
            onChange={handleEmail}
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
            onChange={handlePassword}
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
            <Button type='submit' className='button' href='/' onClick={fetch}>Sign in</Button>
            <br></br>
            <br/>
            <a className='anchor2' href='#' >Create your Account --></a>
            
        {/* </div> */}
        </Grid>
      </Grid>
    </Box>
</body>
  );
}
