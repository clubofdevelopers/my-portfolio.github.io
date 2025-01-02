import React, { useState } from "react";
import "./qualification.css";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar, HiOutlineClipboardList } from "react-icons/hi";
import QualPopup from "./QualPopup";
import Education, { TimeLineComponent } from "./Education";
import Experience from "./Experience";
import { certificateData, educationData, experienceData } from "./Data";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

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

                <div className={toggleState !== 1 ? "qualification__sections" : undefined}>
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        {/* <div className="qualification__data">
                            <Education item={educationData[0]} key={educationData[0].id} />
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
                            <Education item={educationData[1]} key={educationData[1].id} />
                        </div>
                        <div className="qualification__data">
                            <Education item={educationData[2]} key={educationData[2].id} />
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div> */}

                        <TimeLineComponent item={educationData} />
                    </div>
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">
                            <Experience item={experienceData[0]} key={experienceData[0].id} />
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
                            <Experience item={experienceData[1]} key={experienceData[1].id} />
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
                            <QualPopup item={certificateData[0]} key={certificateData[0].id} />
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
                            <QualPopup item={certificateData[1]} key={certificateData[1].id} />
                        </div>
                        <div className="qualification__data">
                            <QualPopup item={certificateData[2]} key={certificateData[2].id} />
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
                            <QualPopup item={certificateData[3]} key={certificateData[3].id} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualification;