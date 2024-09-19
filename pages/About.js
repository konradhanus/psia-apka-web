import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css'; // Ensure this file exists and is correctly imported

const About = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>About Us</h1>
                <p>This is the About page.</p>
            </main>
            <Footer />
        </div>
    );
};

export default About;
