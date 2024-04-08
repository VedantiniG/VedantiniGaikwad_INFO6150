import React from 'react';
import rightImage from '../../../assets/background.png';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

export default function HomeCard() {
  const cardStyles = {
    flex: 1,
    //padding: '225px',
  };

  const innerCardStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    fontSize: '110%',
  };

  const rightSideStyles = {
    flex: 1,
    background: `url(${rightImage}) right center no-repeat fixed`,
    backgroundSize: 'cover',
  };

  return (
    <Container style={{ display: 'flex', height: '110vh' }}>
      <Card variant='outlined' sx={{ marginTop: '60px', height: '100vh'}}>
        <CardContent sx={{ flex: 1,
    background: `url(${rightImage}) right center no-repeat fixed`,
    backgroundSize: 'cover',}}>
          <Typography variant='h2'>Jobify Your Application!</Typography>
          <br/>
          <div className="card-text">
          <Card sx={{ backgroundColor: 'rgba(225,225,225,0.8)', height: '50%' }}>
            <p/> 
            <Typography variant='body1'>
              <strong>Welcome to Your Next Career Move!</strong> Discover
              exciting job opportunities tailored to your skills and
              aspirations.
              
            </Typography>

            <Typography variant='body1'>
              <strong>Featured Jobs</strong> Explore our featured jobs and take
              a step towards a fulfilling career:
            </Typography>

            <p/>

            <Typography variant='body1'>
            <ul >
              <li style={{ textAlign: 'left' }}>
                <strong>Software Engineer:</strong> Join a dynamic team working
                on cutting-edge technologies.
              </li>
              <li style={{ textAlign: 'left' }}>
                <strong>Marketing Specialist:</strong> Drive marketing
                strategies for innovative products.
              </li>
              <li style={{ textAlign: 'left' }}>
                <strong>UX/UI Designer:</strong> Shape user experiences and
                create visually stunning designs.
              </li>
            </ul>
            </Typography>

            <p/><p/>

            <Typography variant='body1'>
              More questions?{" "}
              <a href="/contact">Contact us</a>
            </Typography>

            <p/><p/>

            <Typography variant='h6'>
              <strong>How It Works</strong>
            </Typography>

            <p/><p/>

          <Typography variant='body1'>
            <ol>
              <li style={{ textAlign: 'left' }}>
                <strong>Browse Jobs:</strong> Explore a variety of opportunities
                from different industries and locations.
              </li>
              <li style={{ textAlign: 'left' }}>
                <strong>Apply Online:</strong> Submit your application and
                resume directly through our user-friendly platform.
              </li>
              <li style={{ textAlign: 'left' }}>
                <strong>Get Hired:</strong> Connect with employers, attend
                interviews, and secure your dream job.
              </li>
            </ol>
            </Typography>

            <Typography variant='h5'>Your future starts here. Begin your job search now!</Typography>
            <br/>
            <a href="/jobPosts" className="btn btn-primary">
              Search Jobs
            </a>
            <br/><p/>
            </Card>
          </div>
        </CardContent>
      </Card>
      <div style={rightSideStyles}></div>
    </Container>
  );
}

