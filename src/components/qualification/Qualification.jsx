import React, { useState } from "react";
import "./qualification.css";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar, HiOutlineClipboardList } from "react-icons/hi";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button button--flex qualification__active"
                        : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <HiOutlineAcademicCap className="qualification__icon" />
                        Education
                    </div>
                    <div className={toggleState === 2 ? "qualification__button button--flex qualification__active"
                        : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <HiOutlineBriefcase className="qualification__icon" />
                        Experience
                    </div>
                    <div className={toggleState === 3 ? "qualification__button button--flex qualification__active"
                        : "qualification__button button--flex"} onClick={() => toggleTab(3)}>
                        <HiOutlineClipboardList className="qualification__icon" />
                        Certificates
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Senior Secondary</h3>
                                <span className="qualification__subtitle">Christian Inter College, Farrukhabad</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2013-2015
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Diploma</h3>
                                <span className="qualification__subtitle">Govt. Polytechnic Mainpuri</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2015-2018
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelor of Techology</h3>
                                <span className="qualification__subtitle">Bundelkhand Institute of Engineering & Technology, Jhansi</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2018-2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Product Engineer (.Net)</h3>
                                <span className="qualification__subtitle">Smart Energy Water (SEW.AI)</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    Nov 2023-Ongoing
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">.Net Developer</h3>
                                <span className="qualification__subtitle">VitSoft Solutions Pvt. Ltd</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2021-2023
                                </div>
                            </div>
                        </div>
                        {/*<div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">UX Designer</h3>
                            <span className="qualification__subtitle">Apple Inc</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2016-2022
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Senior Developer</h3>
                            <span className="qualification__subtitle">Freelance - Remote</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2019-Present
                            </div>
                        </div>
                    </div> */}
                    </div>
                    <div className={toggleState === 3 ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Programming with Python</h3>
                                <span className="qualification__subtitle">INTERNSHALA</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    June 24, 2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Programming for Everybody</h3>
                                <span className="qualification__subtitle">COURSERA</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    June 28, 2020
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Python (Basics)</h3>
                            <span className="qualification__subtitle">HAKERANK</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                July 07, 2020
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Coding Event</h3>
                            <span className="qualification__subtitle">CODING NINZA</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                Dec 1, 2020
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualification;