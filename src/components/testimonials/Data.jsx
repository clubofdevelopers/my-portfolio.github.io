import Image1 from "../../assets/woman1.png";
import Image2 from "../../assets/man.png";
import Image3 from "../../assets/woman2.png";
import { WorkspacePremium } from "@mui/icons-material";
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export const Data = [
    {
        id: 1,
        image: Image1,
        title: 'Certification of honour',
        description: 'By "Dainik Jagran" (News Paper)',
        icon: <WorkspacePremium />
    },
    {
        id: 2,
        image: Image2,
        title: "Chegg India (Online Tutor)",
        description: "Helps the students all over the world solving their doubts and helping them easily to learning.",
        icon: <HeadsetMicIcon />
    },
    {
        id: 3,
        image: Image3,
        title: "Hakerank",
        description: "4 Star on Hakerank.",
        icon: <EmojiEventsIcon />
    },
];