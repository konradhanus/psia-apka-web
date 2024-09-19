import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Contact.css'; // We'll create this file next

const Contact = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Contact Us</h1>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit">Send</button>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
