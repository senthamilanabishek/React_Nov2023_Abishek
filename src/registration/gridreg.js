import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from './button.js';
import './registration.css';
export default function Rbrid() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} className='regbox1'>
           <h1 style={{marginLeft:"30px"}}>Sign Up</h1>
        <Grid item xs={8} md={1} className='regbox2' style={{marginTop:"80px"}}>
            <form className='regform'> 
               <lable className='reglable'>Name</lable>
            <TextField style={{border:  "white"}}
                 className='name'
                 placeholder="name"
                 sx={{backgroundColor:'white',borderRadius:'15px'}}
                 InputProps={{
                 endAdornment: (
               <InputAdornment position="end">
              </InputAdornment>
               ),
               }}
            />
               <lable className='reglable'>Email</lable>
               <TextField style={{border:  "white"}}
                 className='name'
                 type='email'
                 placeholder="email"
                 sx={{backgroundColor:'white',borderRadius:'15px'}}
                 InputProps={{
                 endAdornment: (
               <InputAdornment position="end">
              </InputAdornment>
               ),
            }}
         />
               <label className='reglable'>Password</label>
               <TextField style={{border:  "white",width:"250px"}}
                 className='name'
                 type='password'
                 placeholder="Password"
                 sx={{backgroundColor:'white',borderRadius:'15px'}}
                 InputProps={{
                 endAdornment: (
               <InputAdornment position="end">
              </InputAdornment>
               ),
            }}
         />
               <label className='reglable'>ConforimPassword</label>
               <TextField style={{border:  "white"}}
                 className='name'
                 placeholder="password"
                 type='password'
                 sx={{backgroundColor:'white',borderRadius:'15px'}}
                 InputProps={{
                 endAdornment: (
               <InputAdornment position="end">
              </InputAdornment>
               ),
            }}
         />
         <Button sx={{backgroundColor:"white"}}/>
         </form>
        </Grid>
      </Grid>
    </Box>
  );
}
