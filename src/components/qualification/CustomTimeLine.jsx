import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

export default function CustomTimeLine({ duration, title, subTitle, Icon, timeLineColor = undefined, timeLineVarient = undefined }) {
    return (
        <TimelineItem>
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
    )
}