import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Projects from './Projects';
import Services from './Services';
import Technology from './Technology';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <About></About>
            {/* <Services></Services> */}
            <Technology></Technology>
            <Projects></Projects>
            <Contact></Contact>   
            <Footer></Footer>
        </div>
    );
};

export default Home;