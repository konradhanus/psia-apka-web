import React from 'react';
import Hero from '../components/Hero';
import './Home.css'; // Ensure this file exists and is correctly imported

const Home = () => {
    return (
        <div>
            <Hero />
            {/* Remove Footer from here */}
        </div>
    );
};

export default Home;
