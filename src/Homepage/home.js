import SearchAppBar from "./navbar";
import Button from '@mui/material/Button';
import './home.css';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Container, Typography } from '@mui/material';
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
// import { Box } from "@mui/material";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import ImageSlider from "./slider";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Home=()=>{
  return(
    <>
    <div className="buttongrid">
     <Button variant="contained" className="button" style={{marginBottom:"10px",backgroundColor:"green"}}>
              Sign in
     </Button>
     <Button variant="outlined" style={{marginBottom:"10px"}}>
                Sign Up
      </Button>
    </div>
      <SearchAppBar/>
      <div className="page" >
        {/* <div>
          <img src="https://i.pinimg.com/originals/bb/ae/b2/bbaeb2c2a5d425ed3938093fced53e05.png" style={{marginTop:"10px",backgroundSize:"contain"}} 
          width="450"/>
        </div> */}
      </div>
      <div className="bigdiv"  style={{backgroundColor:"violet"}}>
      <div style={{borderRadius:'10px',margin:'10px',border:'1px solid black',height:'700',width:'230px',backgroundColor:"white"}}>
              <div className='cardimg' style={{height:'250px',width:'300px',marginTop:"10p"}}>
              <img style={{marginLeft:'10px',width:'200px',height:'200px',backgroundSize:"cover"}} src="https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY327_FMwebp_QL65_.jpg"/>
              </div>
              <div className='price'>
                <ul >
                  <li><b>Good Habits</b></li>
                  <li>By James</li>
                  <li>Best price*<span style={{color:'red'}}> Rs. 1,950.40</span></li>
                  <Button style={{marginTop:'5px'}} variant="contained">Add to Cart</Button>
                </ul>
                </div>
        </div>
      <div style={{borderRadius:'10px',margin:'10px',border:'1px solid black',height:'700',width:'230px',backgroundColor:"white"}}>
              <div className='cardimg' style={{height:'250px',width:'300px',marginTop:"10p"}}>
              <img style={{marginLeft:'10px',width:'200px',height:'250px',backgroundSize:"cover"}} src="https://m.media-amazon.com/images/I/51xwGSNX-EL._SY445_SX342_.jpg"/>
              </div>
              <div className='price'>
                <ul >
                  <li><b>Happy Life</b></li>
                  <li>By Ikigai</li>
                  <li>Best price*<span style={{color:'red'}}> Rs. 1,000.40</span></li>
                  <Button style={{marginTop:'5px'}} variant="contained">Add to Cart</Button>
                </ul>
                </div>
        </div>
      <div style={{borderRadius:'10px',margin:'10px',border:'1px solid black',height:'700',width:'230px',backgroundColor:"white"}}>
              <div className='cardimg' style={{height:'250px',width:'300px',marginTop:"10p"}}>
              <img style={{marginLeft:'10px',width:'200px',height:'250px',backgroundSize:"cover"}} src="https://m.media-amazon.com/images/I/51QnuLIY2uL._SY445_SX342_.jpg"/>
              </div>
              <div className='price'>
                <ul >
                  <li><b>Power of Mind</b></li>
                  <li>Josephy Murphy</li>
                  <li>Best price*<span style={{color:'red'}}> Rs. 1,999.99</span></li>
                  <Button style={{marginTop:'5px'}} variant="contained">Add to Cart</Button>
                </ul>
                </div>
        </div>
      <div style={{borderRadius:'10px',margin:'10px',border:'1px solid black',height:'700',width:'230px',backgroundColor:"white"}}>
              <div className='cardimg' style={{height:'250px',width:'300px',marginTop:"10p"}}>
              <img style={{marginLeft:'10px',width:'200px',height:'250px',backgroundSize:"cover"}} src="https://m.media-amazon.com/images/I/61MLInWDeJL._AC_UY327_FMwebp_QL65_.jpg"/>
              </div>
              <div className='price'>
                <ul >
                  <li><b>Talk to Any</b></li>
                  <li>Leil Lownder</li>
                  <li>Best price*<span style={{color:'red'}}> Rs. 1,950.40</span></li>
                  <Button style={{marginTop:'5px'}} variant="contained">Add to Cart</Button>
                </ul>
                </div>
        </div>
      </div>

      <Container maxWidth="lg" style={{marginTop:"50px",width:"100%"}}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We are BookScape, dedicated to providing the best service to our
            customers.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" color="text.secondary">
            10 Dowing Street, NY, USA
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: bookscape@example.com
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone: +91 73717 37372
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Follow Us
          </Typography>
          <Link href="https://www.facebook.com/" color="inherit">
            <Facebook />
          </Link>
          <Link
            href="https://www.instagram.com/"
            color="inherit"
            sx={{ pl: 1, pr: 1 }}
          >
            <Instagram />
          </Link>
          <Link href="https://www.twitter.com/" color="inherit">
            <Twitter />
          </Link>
        </Grid>
      </Grid>
      <Box mt={5}>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://your-website.com/">
            BookScape
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
      </Container>

</>
  );
}
export default Home;