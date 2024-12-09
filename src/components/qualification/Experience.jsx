import React from 'react';
import '../services/services.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkIcon from '@mui/icons-material/Work';

const Experience = ({ item }) => {

    return (
        <div className="project__card" key={item.id}>
            <h3 className="qualification__title">{item.title}</h3>
            <div style={{ display: 'flex', position: 'relative' }}>
                <WorkIcon sx={{ fontSize: '12px' }} />
                <span className="qualification__subtitle" style={{ paddingLeft: '2px' }}>{item.subTitle}</span>
            </div>
            <div className="qualification__calendar" style={{ display: "flex", gap: "2px" }}>
                <CalendarMonthIcon sx={{ fontSize: '12px' }} />
                <span>{item.duration}</span>
            </div>
        </div>
    );
};

export default Experience;