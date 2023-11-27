import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";  // Import Facebook icon
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Nav2 from "./navbar2";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home2.css';

export default function Home2() {
  const ProductCard = styled('div')({
    position: 'relative',
    width: 300,
    height: 400,
    border: '1px solid #ddd',
    borderRadius: 8,
    overflow: 'hidden',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  });
  
  const HoverOverlay = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    opacity: 0,
    transition: 'opacity 0.3s',
    '&:hover': {
      opacity: 1,
    },
  });
  
  const ProductImage = styled('img')({
    width: '100%',
    height: '80%',
    objectFit: 'cover',
  });
  
  const ProductInfo = styled('div')({
    padding: 16,
    textAlign: 'center',
  });
  
  const QuickAddButton = styled('button')({
    padding: '8px 16px',
    background: 'none',
    border: '1px solid #fff',
    color: '#fff',
    cursor: 'pointer',
    '&:hover': {
      background: '#fff',
      color: '#000',
    },
  });






  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Nav2 />
        </Grid>
        <Grid item xs={12} md={12} style={{marginTop:"80px",marginLeft:"15px",border:"1px solid black"}}>
          <Slider {...settings}>
            <Grid items xs={12} md={12}  className="box" style={{cursor:"pointer"}}>
              <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/11/23/28088_Quote_A1_50SelectBooks_11-23.jpg" style={{ height:"100vh", width:"100%",cursor: "pointer"}} alt="slide1" />
            </Grid>
            <Grid items xs={12} md={12} className="box" style={{cursor:"pointer"}}>
              <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/11/23/28088_Quote_A2_SignedBooks_11-23.jpg" style={{ height:"100vh", width:"100vw",cursor: "pointer" }} alt="slide1"></img>
            </Grid>
            <Grid items xs={12} md={12}  className="box" style={{cursor:"pointer"}}>
              <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/11/17/28041_Quote_B1_AOTY_2023_11-17.jpg" style={{ height:"100vh", width:"100vw",cursor: "pointer"}}></img>
            </Grid>
            <Grid items xs={12} md={12}  className="box" style={{cursor:"pointer"}}>
              <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/10/30/27926_Quote_A1_DiscoverWinner_10-30.jpg" style={{ height:"100vh", width:"100vw",cursor: "pointer" }}></img>
            </Grid>
            <Grid items xs={12} md={12}  className="box" style={{cursor:"pointer"}}>
            <img src="https://i.ytimg.com/vi/3EsNqHY7mQU/maxresdefault.jpg" style={{ height:"100vh", width:"100vw",cursor:"pointer"}}></img>
            </Grid>
          </Slider>
        </Grid>
        <Grid xs={12} md={12}><h1 style={{fontFamily:"serif",marginLeft:"25px"}}>50% Off the Criterion Collection</h1></Grid>



      <Grid item xs={12} md={3} style={{marginTop:"70px",marginBottom:"15px"}}>
      <ProductCard style={{backgroundSize:"cover"}}>
      <ProductImage 
        src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250095268_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
        style={{backgroundSize:"cover"}}/>
      <HoverOverlay>
        <ProductInfo>
          {/* <h3>Product Name</h3>
          <p>Product Description</p> */}
          <QuickAddButton>Add to Cart</QuickAddButton>
        </ProductInfo>
      </HoverOverlay>
    </ProductCard>
      </Grid>
      <Grid item xs={12} md={3} style={{marginTop:"70px",marginBottom:"15px"}}>
      <ProductCard style={{backgroundSize:"cover"}}>
      <ProductImage 
        src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250308979_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
        style={{backgroundSize:"cover"}}/>
      <HoverOverlay>
        <ProductInfo>
          {/* <h3>Product Name</h3>
          <p>Product Description</p> */}
          <QuickAddButton>Add to Cart</QuickAddButton>
        </ProductInfo>
      </HoverOverlay>
    </ProductCard>
      </Grid>


      <Grid item xs={12} md={3} style={{marginTop:"70px",marginBottom:"15px"}}>
      <ProductCard style={{backgroundSize:"cover"}}>
      <ProductImage 
        src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250095329_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
        style={{backgroundSize:"cover"}}/>
      <HoverOverlay>
        <ProductInfo>
          {/* <h3>Product Name</h3>
          <p>Product Description</p> */}
          <QuickAddButton>Add to Cart</QuickAddButton>
        </ProductInfo>
      </HoverOverlay>
    </ProductCard>
      </Grid>


      <Grid item xs={12} md={3} style={{marginTop:"70px",marginBottom:"15px"}}>
      <ProductCard style={{backgroundSize:"cover"}}>
      <ProductImage 
        src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780316428453_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
        style={{backgroundSize:"cover"}}/>
      <HoverOverlay>
        <ProductInfo>
          {/* <h3>Product Name</h3>
          <p>Product Description</p> */}
          <QuickAddButton>Add to Cart</QuickAddButton>
        </ProductInfo>
      </HoverOverlay>
      </ProductCard>
      </Grid>
        {/* <h1 style={{fontFamily:"serif",marginLeft:"25px"}}>50% Off the Criterion Collection</h1>
        <div className="page">
          <div className="bigdiv1" style={{marginTop:"30px"}}>
            <div>
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/nytbestseller/Childrens-Thematic-Tile-1-Rev.jpg"></img>
            </div>
            <div>
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/nytbestseller/Childrens-Thematic-Tile-3-_Rev.jpg"></img>
            </div>
            <div>
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/nytbestseller/Childrens-Thematic-Tile-2-_Rev.jpg"></img>
            </div>
          </div>
          </div> */}

<Grid xs={12} md={12}><h1 style={{fontFamily:"serif",marginLeft:"25px"}}>Teens & YA: Buy One, Get One 50% Off</h1></Grid>
<Grid item xs={12} md={3} style={{marginTop:"70px",marginBottom:"15px"}}>
      <ProductCard style={{backgroundSize:"cover"}}>
      <ProductImage 
        src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250820617_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
        style={{backgroundSize:"cover"}}/>
      <HoverOverlay>
        <ProductInfo>
          {/* <h3>Product Name</h3>
          <p>Product Description</p> */}
          <QuickAddButton>Add to Cart</QuickAddButton>
        </ProductInfo>
      </HoverOverlay>
    </ProductCard>
      </Grid>
      <Grid item xs={12} md={3} style={{marginTop:"70px",marginBottom:"15px"}}>
      <ProductCard style={{backgroundSize:"cover"}}>
      <ProductImage 
        src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250618979_p0_v7%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
        style={{backgroundSize:"cover"}}/>
      <HoverOverlay>
        <ProductInfo>
          {/* <h3>Product Name</h3>
          <p>Product Description</p> */}
          <QuickAddButton>Add to Cart</QuickAddButton>
        </ProductInfo>
      </HoverOverlay>
    </ProductCard>
      </Grid>


      <Grid item xs={12} md={3} style={{marginTop:"70px",marginBottom:"15px"}}>
      <ProductCard style={{backgroundSize:"cover"}}>
      <ProductImage 
        src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780062310644_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
        style={{backgroundSize:"cover"}}/>
      <HoverOverlay>
        <ProductInfo>
          {/* <h3>Product Name</h3>
          <p>Product Description</p> */}
          <QuickAddButton>Add to Cart</QuickAddButton>
        </ProductInfo>
      </HoverOverlay>
    </ProductCard>
      </Grid>


      <Grid item xs={12} md={3} style={{marginTop:"70px",marginBottom:"15px"}}>
      <ProductCard style={{backgroundSize:"cover"}}>
      <ProductImage 
        src="https://prodimage.images-bn.com/pimages/9780062676436_p0_v1_s192x300.jpg"
        style={{backgroundSize:"cover"}}/>
      <HoverOverlay>
        <ProductInfo>
          {/* <h3>Product Name</h3>
          <p>Product Description</p> */}
          <QuickAddButton>Add to Cart</QuickAddButton>
        </ProductInfo>
      </HoverOverlay>
      </ProductCard>
      </Grid>





      <Grid item xs={12} md={12}>
          <div>
            <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/10/06/27634_BB_D_HGG_10-06.jpg" style={{width:"100vw"}}></img>
          </div>
      </Grid>
      <Grid xs={12} md={12}>
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are XYZ company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
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
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
      </Box>
      </Grid>
   
      </Grid>

    </Box>
  );
}
