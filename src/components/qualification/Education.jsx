import React from 'react';
import '../services/services.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

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

import SchoolIcon from '@mui/icons-material/SchoolRounded';
import AssignmentIcon from '@mui/icons-material/AssignmentRounded';
import EngineeringIcon from '@mui/icons-material/EngineeringRounded';

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

export function TimeLineComponent({ item }) {
    return (
        <Timeline position="alternate" style={{ fontFamily: 'Nunito' }}>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0', fontFamily: 'Nunito' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    {item[0].duration}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" style={{ fontFamily: 'Nunito' }}>
                        {item[0].title}
                    </Typography>
                    <Typography>{item[0].subTitle}</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    {item[1].duration}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <AssignmentIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        {item[1].title}
                    </Typography>
                    <Typography>{item[1].subTitle}</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0',fontFamily: 'Nunito' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    {item[2].duration}
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                        <EngineeringIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        {item[2].title}
                    </Typography>
                    <Typography>{item[2].subTitle}</Typography>
                </TimelineContent>
            </TimelineItem>

            {/* <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    <TimelineDot color="secondary">
                        <RepeatIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Repeat
                    </Typography>
                    <Typography>Because this is the life you love!</Typography>
                </TimelineContent>
            </TimelineItem> */}
        </Timeline>
    )
}
