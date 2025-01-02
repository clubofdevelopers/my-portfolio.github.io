import React from 'react';
import "./footer.css";
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { HiOutlineUser } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setActiveNav } from '../../redux/actions';

const Footer = () => {
    const dispatch = useDispatch();
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Club of Developers</h1>
                <ul className="footer__list">
                    <li>
                        <Link to={'/about'} className="footer__link" onClick={() => dispatch(setActiveNav('#about'))}>About</Link>
                    </li>
                    <li>
                        <Link to={'/projects'} className="footer__link" onClick={() => dispatch(setActiveNav('#projects'))}>Projects</Link>
                    </li>
                    <li>
                        <Link to={'/services'} className="footer__link" onClick={() => dispatch(setActiveNav('#services'))}>Most Proud</Link>
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
                {/* <span className="footer__copy"></span>   */}
            </div>
        </footer>
    );
}

export default Footer;