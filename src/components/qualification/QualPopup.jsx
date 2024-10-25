import React, { useState } from 'react';
import '../services/services.css';
import { HiOutlineArrowSmRight, HiOutlineCalendar, HiX } from "react-icons/hi";

const QualPopup = ({ item }) => {
    const [dialogOpen, setDialogOpen] = useState(false); // Manage dialog open/close state

    const handleClickEvent = () => {
        setDialogOpen(true); // Open the dialog when the project card is clicked
    };

    const closeDialog = () => {
        setDialogOpen(false); // Close the dialog
    };

    return (
        <>
            <div className="project__card" key={item.id} onClick={handleClickEvent}>
                <h3 className="project__title"> {item.title}</h3>
                <div className="qualification__calendar">
                    <HiOutlineCalendar className="qualification__calendar-icon" />
                    {item.IssuedOn}
                </div>
                <a href={item.href} className="project__button" target="_blank" rel="noreferrer">
                    Demo <HiOutlineArrowSmRight className="project__button-icon" />
                </a>
            </div>

            {/* Dialog box */}
            <div className={dialogOpen ? "services__modal active-modal" : "services__modal"}>
                <div className="project__modal-content">
                    <HiX onClick={closeDialog} className="services__modal-close" />
                    <h2 className="project__modal-title">{item.title}</h2>
                    <div className='project__modal-headings'>
                        <h3>Overview :</h3>
                        <p>{item.overview}</p>
                    </div>
                    {
                        item.issuedBy && (
                            <div className='project__modal-headings'>
                                <h3>Issued by :</h3>
                                <p>{item.issuedBy}</p>
                            </div>
                        )
                    }
                    {
                        item.IssuedOn && (
                            <div className='project__modal-headings'>
                                <h3>Issued on :</h3>
                                <p>{item.IssuedOn}</p>
                            </div>
                        )
                    }
                    {
                        item.CertificateId && (
                            <div className='project__modal-headings'>
                                <h3>Certificate ID :</h3>
                                <p>{item.CertificateId}</p>
                            </div>
                        )
                    }
                    {/* <div className='project__modal-headings'>
                        <h3>Skills Acquired :</h3>
                        <ul>
                            {item.SkillsAcquired.map((itms) => {
                                return <li><b>{itms.title} :</b> {itms.technology}</li>
                            })}
                        </ul>
                    </div> */}
                    {item?.link && (
                        <div className='project__modal-headings'>
                            <h3>Link :</h3>
                            <a href={item.link} target="_blank" rel="noreferrer">
                                {item.link}
                            </a>
                        </div>
                    )}
                    {item?.duration && (
                        <div className='project__modal-headings'>
                            <h3>Duration :</h3>
                            <p>{item.duration}</p>
                        </div>
                    )}
                    {item?.image && (
                        <img className="project__img" src={item.image} alt="Certificate" />
                    )}
                </div>
            </div>
        </>
    );
};

export default QualPopup;
