import React from 'react';
import "../assets/styles.css";
import NavBar from './NavBar';
import { AiOutlineGithub } from "react-icons/ai";
import logo from '../assets/logo.png'; // Import your logo image

function Hero() {
    return (
        <section className='hero'>
            <NavBar />
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="caption">
                <p className='text-center' style={{ color: "#fff", fontSize: "20px" }}>MaxxDoge</p>

                <div className="caption-inner">
                    <a href="https://twitter.com/MaxxdogeToken">
                        <button className="btn btn-danger" style={{ color: "#000" }}>
                          Twitter
                        </button>
                    </a>
                    <a href="https://t.me/maxxdoge" target="_blank" rel="noreferrer">
                        <button className="btn btn-info">
                            Telegram
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
