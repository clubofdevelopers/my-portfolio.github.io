import React, { useState } from 'react';
import '../services/services.css';
import { HiOutlineArrowSmRight, HiOutlineCalendar, HiX } from "react-icons/hi";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Typography } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';


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
                <WorkspacePremiumIcon sx={{ position: 'absolute', top: '10px', right: '10px' }} />
                <div className="qualification__calendar" style={{ display: "flex", gap: "2px" }}>
                    <CalendarMonthIcon sx={{ fontSize: '12px' }} />
                    <span>{item.IssuedOn}</span>
                </div>
                <a href={item.href} className="project__button" target="_blank" rel="noreferrer">
                    View <HiOutlineArrowSmRight className="project__button-icon" />
                </a>
            </div>

            {/* Dialog box */}
            <div className={dialogOpen ? "services__modal active-modal" : "services__modal"}>
                <div className="project__modal-content">
                    <HiX onClick={closeDialog} className="services__modal-close" />
                    <h2 className="project__modal-title">{item.title}</h2>
                    <div className='project__modal-headings'>
                        <h3>Overview : <ViewListIcon /></h3>
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
