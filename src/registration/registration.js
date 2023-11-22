import './registration.css';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from './button.js';
const Registration=()=>
{
    return(
         <div className='regbox1'>
            <h1 style={{marginLeft:"30px"}}>Sign Up</h1>
            <form className='regform'> 
               <lable className='reglable'>Name</lable>
            <TextField style={{border:  "white"}}
                 className='name'
                 placeholder="username/email"
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
                 placeholder="username/email"
                 sx={{backgroundColor:'white',borderRadius:'15px'}}
                 InputProps={{
                 endAdornment: (
               <InputAdornment position="end">
              </InputAdornment>
               ),
            }}
         />
               <label className='reglable'>Password</label>
               <TextField style={{border:  "white"}}
                 className='name'
                 type='password'
                 placeholder="username/email"
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
                 placeholder="username/email"
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
         </div>
    )
}
export default Registration;