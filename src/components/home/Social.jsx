import React from "react";
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.linkedin.com/in/vijay-sharma-227b5a124" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
            <a href="https://github.com/clubofdevelopers" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.instagram.com/melodicdeveloper/#" className="home__social-icon" target="_blank">
                <FiInstagram />
            </a>
        </div> 
    ); 
}

export default Social;