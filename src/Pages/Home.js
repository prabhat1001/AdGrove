import React from 'react'

// import components
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import LandingPage from '../Components/LandingPage';
import Page2 from '../Components/Page2';
import Page3 from '../Components/Page3';

const Home = () => {
  return (
    <>
       <ResponsiveAppBar /> 
       <LandingPage />
       <Page2 />
       <Page3 />
    </>
  )
}

export default Home