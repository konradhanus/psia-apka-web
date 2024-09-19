import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure this path is correct

const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <Link to="/">
                        <img src="/PsiaApkaLogo.png" alt="." height="70" />
                    </Link>
                </div>
                <div>
                    <Link to="/features">Psia Apka</Link>
                    <Link to="/join">Dołącz do gry</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
