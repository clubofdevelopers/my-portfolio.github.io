import React from 'react';
import '../services/services.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';

const Education = ({ item }) => {

    return (
        <div className="project__card" key={item.id}>
            <h3 className="qualification__title">{item.title}</h3>
            <div style={{ display: 'flex', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '-20px', right: '-3px' }}><SchoolIcon /></span>
                <span className="qualification__subtitle">{item.subTitle}</span>
            </div>
            <div className="qualification__calendar" style={{ display: "flex", gap: "2px" }}>
                <CalendarMonthIcon sx={{ fontSize: '12px' }} />
                <span>{item.duration}</span>
            </div>
        </div>
    );
};

export default Education;
