import React from 'react';
import { styled } from '@mui/system';
import { Container, Typography, TextField, Button, Grow, Slide } from '@mui/material';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import './registration.css';
import axios from 'axios';
const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
}));

const StyledFormContainer = styled('div')(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: 10,
  padding: theme.spacing(3),
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const Registration = () => {
   const[fname,setFName]=useState("");
   const[lname,setLName]=useState("");
   const[email,setEmail]=useState("");
   const[password,setPassword]=useState("");
   const handleFname=(event)=>
   {
       setFName(event.target.value);
   }
   const handleLname=(event)=>
   {
       setLName(event.target.value);
   }
   const handleEmail=(event)=>
   {
       setEmail(event.target.value);
   }
   const handlePassword=(event)=>
   {
       setPassword(event.target.value);
   }
   const handleSubmit=(event)=>
   {
       event.preventDefault();
       axios.
       post("http://localhost:3001/users",{"fname":fname,"lname":lname,"email":email,"password":password})
       .then((res)=>
       {
           console.log(res.data);
       })
       .catch((error)=>
       {
           console.log("Error: "+error);
       })
   }
  return (
    <body className='bg'>
      <StyledContainer>
        <Grow in={true} timeout={1000}>
          <StyledFormContainer>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Slide direction="down" in={true} timeout={1000}>
              <StyledForm>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="fname"
                  label="FirstName"
                  name="fname"
                  autoFocus
                  onChange={handleFname}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="lname"
                  label="LastName"
                  name="lname"
                  autoFocus
                  onChange={handleLname}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  label="Email Address"
                  type="email"
                  id="email"
                  onChange={handleEmail}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={handlePassword}
                />
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    href="/"
                  >
                    Register
                  </Button>
                </Link>
              </StyledForm>
            </Slide>
          </StyledFormContainer>
        </Grow>
      </StyledContainer>
    </body>
  );
};

export default Registration;
