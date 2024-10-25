import React from 'react';
import "./footer.css";
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Club of Developers</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/vijay-sharma-227b5a124" className="home__social-icon linkedin" target="_blank" rel="noreferrer" >
                    <FiLinkedin />
                </a>    
                <a href="https://github.com/clubofdevelopers" className="home__social-icon github" target="_blank" rel="noreferrer">
                    <FiGithub />
                </a>
                <a href="https://www.instagram.com/melodicdeveloper/#" className="home__social-icon instagram" target="_blank" rel="noreferrer">
                    <FiInstagram />
                </a>
            </div>
            <span className="footer__copy"></span>  
        </div>
    </footer>
  );
}

export default Footer;