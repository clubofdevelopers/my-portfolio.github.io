import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import EducationPopUp from './EducationPopUp';
import { useState } from 'react';
import "./qualification.css";
import { educationPopUpData } from './Data';

export default function CustomTimeLine({ id, duration, title, subTitle, Icon, timeLineColor = undefined, timeLineVarient = undefined }) {


    const [openDialog, setOpenDialog] = useState(false)
    // const [iId, setId] = useState(id);

    const handleClick = (e) => {
        debugger
        setOpenDialog(true);
        // setId(e.target.id);
    }

    return (
        <>
            <TimelineItem onClick={handleClick}>
                <TimelineOppositeContent
                    sx={{
                        m: 'auto 0',
                        fontFamily: 'Nunito, sans-serif',
                    }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    {duration}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector sx={timeLineColor ? { bgcolor: `${timeLineColor}.main` } : ""} />
                    <TimelineDot color={timeLineColor} variant={timeLineVarient}>
                        {Icon && <Icon />}
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography
                        variant="h6"
                        component="span"
                        sx={{
                            fontFamily: 'Nunito, sans-serif',
                        }}
                        className='qualification__button button--flex qualification__active'
                        id={id}
                        
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Nunito, sans-serif',
                        }}
                    >
                        {subTitle}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            {openDialog && (
                <EducationPopUp
                    openDialog={openDialog}
                    id={id}
                    item={educationPopUpData}
                    onClose={() => setOpenDialog(false)}
                />
            )}
        </>
    )
}