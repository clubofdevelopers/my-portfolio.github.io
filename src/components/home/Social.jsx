import React from "react";
import { FiGithub, FiLinkedin, FiInstagram} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.linkedin.com/in/vijay-sharma-227b5a124" className="home__social-icon linkedin" style={{color:""}} target="_blank" rel="noreferrer">
                <FiLinkedin />
            </a>
            <a href="https://github.com/clubofdevelopers" className="home__social-icon github" target="_blank" rel="noreferrer">
                <FiGithub />
            </a>
            <a href="https://www.instagram.com/melodicdeveloper/#" className="home__social-icon instagram" target="_blank" rel="noreferrer">
                <FiInstagram />
            </a>
        </div> 
    ); 
}

export default Social;