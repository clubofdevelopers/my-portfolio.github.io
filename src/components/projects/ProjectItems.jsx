import React, { useState } from 'react';
import '../services/services.css';
import { HiOutlineArrowSmRight, HiOutlineCheckCircle, HiX } from "react-icons/hi";
import DashboardIcon from '@mui/icons-material/Dashboard';

const ProjectItems = ({ item }) => {
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
                <img className="project__img" src={item.image} alt="" />
                <h3 className="project__title"><DashboardIcon sx={{ fontSize: '1.2rem' }} /><span>{item.title}</span></h3>
                <a href={item.href} className="project__button" target="_blank" rel="noreferrer">
                    Detail <HiOutlineArrowSmRight className="project__button-icon" />
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
                        item.keyTopics && (
                            <div className='project__modal-headings'>
                                <h3>Key Topics Covered :</h3>
                                <p>{item.keyTopics}</p>
                            </div>
                        )
                    }
                    <div className='project__modal-headings'>
                        <h3>Technologies Used :</h3>
                        <ul>
                            {item.technologies.map((itms) => {
                                return <li><b>{itms.title} :</b> {itms.technology}</li>
                            })}
                        </ul>
                    </div>
                    <div className='project__modal-headings'>
                        <h3>Key Features :</h3>
                        <ul>
                            {item.keyFeatures.map((itm) => {
                                return <li><b>{itm.featureTitle} :</b> {itm.description}</li>
                            })}
                        </ul>
                    </div>
                    <div className='project__modal-headings'>
                        <h3>Role & Responsibilities :</h3>
                        <p>{item.rolesAndResponsibilities}</p>
                    </div>
                    <div className='project__modal-headings'>
                        <h3>Impact :</h3>
                        <p>{item.impact}</p>
                    </div>
                    {/* <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <HiOutlineCheckCircle className="services__modal-icon" />
                            <p className="services__modal-info">
                                Create a user-friendly interface
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <HiOutlineCheckCircle className="services__modal-icon" />
                            <p className="services__modal-info">
                                Develop with a minimal approach
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <HiOutlineCheckCircle className="services__modal-icon" />
                            <p className="services__modal-info">
                                Design with accessibility in mind
                            </p>
                        </li>
                    </ul> */}
                </div>
            </div>
        </>
    );
};

export default ProjectItems;
