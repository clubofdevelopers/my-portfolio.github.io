import React, { useState } from "react";
import './header.css';
import { Link } from 'react-router-dom';
import { HiOutlineHome, HiOutlineUser, HiOutlineBadgeCheck, HiOutlineClipboardList, HiOutlinePhotograph, HiOutlineMail, HiX, HiOutlineMenu } from "react-icons/hi";
import HomeMaxRoundedIcon from '@mui/icons-material/HomeMaxRounded';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import DownhillSkiingRoundedIcon from '@mui/icons-material/DownhillSkiingRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import ElectricalServicesRoundedIcon from '@mui/icons-material/ElectricalServicesRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import PermPhoneMsgRoundedIcon from '@mui/icons-material/PermPhoneMsgRounded';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveNav } from '../../redux/actions';

const Header = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });


    const [Toggle, showMenu] = useState(false);
    // const [activeNav, setActiveNav] = useState("#home");
    const dispatch = useDispatch();
    const activeNav = useSelector((state) => state.navigation.activeNav);

    return (
        <header className="header">
            <nav className="nav container">
                <Link to={'/'} className="nav__logo" style={{ fontSize: "x-large", letterSpacing: "1px" }} onClick={() => dispatch(setActiveNav('#home'))}>
                    <h1>Portfolio</h1>
                </Link>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <Link
                                to={'/'}
                                onClick={() => dispatch(setActiveNav('#home'))}
                                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                {/* <HiOutlineHome className="nav__icon" /> */}
                                <HomeMaxRoundedIcon /> Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to={'/about'}
                                onClick={() => dispatch(setActiveNav('#about'))}
                                className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                {/* <HiOutlineUser className="nav__icon" /> */}
                                <ScienceRoundedIcon /> About
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to={'/skills'}
                                onClick={() => dispatch(setActiveNav('#skills'))}
                                className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                {/* <HiOutlineBadgeCheck className="nav__icon" /> */}
                                <DownhillSkiingRoundedIcon /> Skills
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to={'/qualification'}
                                onClick={() => dispatch(setActiveNav('#qualification'))}
                                className={activeNav === "#qualification" ? "nav__link active-link" : "nav__link"}>
                                {/* <HiOutlineBadgeCheck className="nav__icon" /> */}
                                <SchoolRoundedIcon /> Qualification
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to={'/services'}
                                onClick={() => dispatch(setActiveNav('#services'))}
                                className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                                {/* <HiOutlineClipboardList className="nav__icon" /> */}
                                <ElectricalServicesRoundedIcon /> Services
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to={'/projects'}
                                onClick={() => dispatch(setActiveNav('#projects'))}
                                className={activeNav === "#projects" ? "nav__link active-link" : "nav__link"}>
                                {/* <HiOutlinePhotograph className="nav__icon" /> */}
                                <DashboardRoundedIcon />Projects
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to={'https://clubofdevelopers.blogspot.com/search'}
                                target="_blank"
                                onClick={() => dispatch(setActiveNav('#blog'))}
                                className={activeNav === "#blog" ? "nav__link active-link" : "nav__link"}>
                                {/* <HiOutlineMail className="nav__icon" /> */}
                                <BookRoundedIcon /> Blog
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to={'/contact'}
                                onClick={() => dispatch(setActiveNav('#contact'))}
                                className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                {/* <HiOutlineMail className="nav__icon" /> */}
                                <PermPhoneMsgRoundedIcon /> Contact
                            </Link>
                        </li>
                    </ul>
                    <HiX className="nav__close" onClick={() => showMenu(!Toggle)} />
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <HiOutlineMenu />
                </div>
            </nav>
        </header >
    )
}

export default Header