import React from 'react';
import './Hero.css';  // Ensure this CSS file exists and is correctly imported
import appStoreBadge from '../assets/images/app-store-badge.svg';  // Import the image directly

const Hero = () => {
    return (
        <section className="hero">
            <div>
                <h1>Witajcie w Psiej Apce</h1>
                <p>Twój Wirtualny Psi świat</p>
                <div className="cta">
                    <a href="https://testflight.apple.com/join/LzIw4ASS" target="_blank" rel="noopener noreferrer">
                        <button>Zarejestruj się do testów alpha dla iOS</button>
                    </a>
                    <a href="https://apps.apple.com/gb/app/psia-apka/id1534499644" className="download-button">
                        <img src={appStoreBadge} alt="Download on the App Store" />
                    </a>
                </div>
            </div>
            <video id="hero-video" autoPlay muted loop playsInline>
                <source src="/videos/replayvideo1.mp4" type="video/mp4" />
                Twoja przeglądarka nie obsługuje elementu wideo.
            </video>
        </section>
    );
};

export default Hero;
