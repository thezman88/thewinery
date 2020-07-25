import React from 'react';
import Header from './components/Header';
import './style.css';
import Nav from './components/Nav';
import Carosel from './components/Carosel';
import CardSection from './components/CardSection';
import RecentNews from './components/RecentNews';
import Events from './components/Events'
import AboutSection from './components/AboutSection';
import Footer from './components/Footer'


const App = ()=>{
    return(
        <div className=''>
            <Header className='container-fluid' />
            <Nav className='container-fluid' />
            <Carosel />
            <CardSection  />
            <RecentNews />
            <Events />
            <AboutSection />
            <Footer />
        </div>
       
       
    )
}

export default App;