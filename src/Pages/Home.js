import React from 'react'

// import components
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import LandingPage from '../Components/LandingPage';
import Page2 from '../Components/Section2';
import Page3 from '../Components/Section3';
import Page4 from '../Components/Section4';
import Page5 from '../Components/Section5';
import Page6 from '../Components/Section6';
import Page7 from '../Components/Section7';

const Home = () => {
  return (
    <>
       <ResponsiveAppBar /> 
       <LandingPage />
       <Page2 />
       <Page3 />
       <Page4 />
       <Page5 />
       <Page6 />
       <Page7 />
    </>
  )
}

export default Home