import React from 'react';
import '../services/services.css';
import { HiX } from "react-icons/hi";
import ExampleCarousel from '../common/Carousal';


const EducationPopUp = ({ openDialog, id, item, onClose }) => {

    return (
        <>
            {/* Dialog box */}
            <div className={openDialog ? "services__modal active-modal" : "services__modal"}>
                <div className="project__modal-content">
                    <HiX onClick={onClose} className="services__modal-close" />
                    <h2 className="project__modal-title">{item[id - 1].subTitle}</h2>
                    <ExampleCarousel images={item[id - 1]?.images} />
                    <div className='project__modal-headings'>
                        <h3>🎓 Basic Institute Info :</h3>
                        <p><b>Institute / University name :</b> {item[id - 1].subTitle}</p>
                        <p><b>Location (City, State, Country) :</b> {item[id - 1].location}</p>
                    </div>

                    <div className='project__modal-headings'>
                        <h3>📘 Education Details :</h3>
                        <p><b>Degree / Course Name :</b> {item[id - 1].title}</p>
                        <p><b>Specialization / Major / Minor subjects :</b> {item[id - 1].specialization}</p>
                        <p><b>Duration (Start Year – End Year) :</b> {item[id - 1].duration}</p>
                        <p><b>Mode of Study :</b> {item[id - 1].modeOfStudy}</p>
                    </div>

                    <div className='project__modal-headings'>
                        <h3>🔗 Extra Elements</h3>
                        <p><b>Key Skills Learned :</b> {item[id - 1].skills}</p>
                        <p><b>Certificates earned :</b> {item[id - 1].certificates}</p>
                        <p><b>Internships or Training programs :</b> {item[id - 1].internshipsOrTraining}</p>
                    </div>
                </div>
            </div >
        </>
    );
};

export default EducationPopUp;
