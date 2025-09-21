import Hakerank from "../../assets/Hakerank.png";
import Python from "../../assets/Python.jpg";
import CodingNinza from "../../assets/CodingNinza.jpg";
import Coursera from "../../assets/Coursera.jpg";
import SchoolIcon from '@mui/icons-material/SchoolRounded';
import AssignmentIcon from '@mui/icons-material/AssignmentRounded';
import EngineeringIcon from '@mui/icons-material/EngineeringRounded';

export const certificateData = [
    {
        id: 1,
        image: Python,
        title: "Programming with Python",
        issuedBy: "INTERNSHALA",
        IssuedOn: "June 2024",
        CertificateId: "19084B88-F183-0258-0A7E-7D15613C0F82",
        overview: "The training consisted of Introduction to Python, Using Variables in Python, Basics of Programming in Python, Principles of Object-oriented Programming (OOP), Connecting to SQLite Database, Developing a GUI with PyQT and Application of Python in Various Disciplines modules",
        SkillsAcquired: [
            {
                title: "Platform",
                technology: "Variables, data types, and operators"
            },
            {
                title: "Control Structures",
                technology: "Conditional statements and loops"
            },
            {
                title: "Functions",
                technology: "Defining and using functions, lambda expressions"
            },
            {
                title: "Data Structures",
                technology: "Lists, tuples, dictionaries, and sets"
            },
            {
                title: "File Handling",
                technology: "Reading from and writing to files"
            },
            {
                title: "Object-Oriented Programming",
                technology: "Classes, objects, inheritance, and polymorphism"
            },
            {
                title: "Libraries",
                technology: "pandas, numpy, matplotlib for data manipulation and visualization"
            },
            {
                title: "Error Handling",
                technology: "Exception handling and debugging"
            },
        ],
        link: "https://trainings.internshala.com/verify-certificate/",
        duration: "6-week course, 60 hours of learning"
    },
    {
        id: 2,
        // category: "A",
        image: Coursera,
        title: "Programming for Everybody (Getting Started with Python)",
        issuedBy: "COURSERA ( Offered by the University of Michigan )",
        IssuedOn: "June 2020",
        CertificateId: "Q3ZSBUJMR64E",
        overview: "This certification covers the fundamentals of programming using Python. It includes concepts such as data structures, control flow, functions, modules, file handling, and object-oriented programming. The course also introduces libraries like Pandas and Matplotlib for data analysis and visualization.",
        SkillsAcquired: [
            {
                title: "Platform",
                technology: "Variables, data types, and operators"
            },
            {
                title: "Control Structures",
                technology: "Conditional statements and loops"
            },
            {
                title: "Functions",
                technology: "Defining and using functions, lambda expressions"
            },
            {
                title: "Data Structures",
                technology: "Lists, tuples, dictionaries, and sets"
            },
            {
                title: "File Handling",
                technology: "Reading from and writing to files"
            },
            {
                title: "Object-Oriented Programming",
                technology: "Classes, objects, inheritance, and polymorphism"
            },
            {
                title: "Libraries",
                technology: "pandas, numpy, matplotlib for data manipulation and visualization"
            },
            {
                title: "Error Handling",
                technology: "Exception handling and debugging"
            },
        ],
        link: "https://www.coursera.org/account/accomplishments/verify/Q3ZSBUJMR64E",
        duration: "4-week course, 40 hours of learning"
    },
    {
        id: 3,
        // category: "A",
        image: Hakerank,
        title: "Python (Basics)",
        issuedBy: "HAKERRANK",
        IssuedOn: "July 2020",
        CertificateId: "0D8FFB2ABFD7",
        overview: "This certification validates the ability to write basic Python code, including understanding data types, control flow, functions, and basic data structures. It assesses problem-solving skills through coding challenges. It covers topics like Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes.",
        SkillsAcquired: [
            {
                title: "Platform",
                technology: "Variables, data types, and operators"
            },
            {
                title: "Control Structures",
                technology: "Conditional statements and loops"
            },
            {
                title: "Functions",
                technology: "Defining and using functions, lambda expressions"
            },
            {
                title: "Data Structures",
                technology: "Lists, tuples, dictionaries, and sets"
            },
            {
                title: "File Handling",
                technology: "Reading from and writing to files"
            },
            {
                title: "Object-Oriented Programming",
                technology: "Classes, objects, inheritance, and polymorphism"
            },
            {
                title: "Libraries",
                technology: "pandas, numpy, matplotlib for data manipulation and visualization"
            },
            {
                title: "Error Handling",
                technology: "Exception handling and debugging"
            },
        ],
        link: "https://www.hackerrank.com/certificates/iframe/0d8ffb2abfd7",
        duration: "Self-paced"
    },
    {
        id: 3,
        // category: "A",
        image: CodingNinza,
        title: "Coding Event",
        issuedBy: "CODING NINZA",
        IssuedOn: "December 2020",
        CertificateId: "84398",
        overview: "This certification recognizes advanced programming and problem-solving skills, demonstrating expertise in key areas such as data structures, algorithms, and coding efficiency. It is designed for senior-level students to assess and showcase their technical competencies.",
        SkillsAcquired: [
            {
                title: "Platform",
                technology: "Variables, data types, and operators"
            },
            {
                title: "Control Structures",
                technology: "Conditional statements and loops"
            },
            {
                title: "Functions",
                technology: "Defining and using functions, lambda expressions"
            },
            {
                title: "Data Structures",
                technology: "Lists, tuples, dictionaries, and sets"
            },
            {
                title: "File Handling",
                technology: "Reading from and writing to files"
            },
            {
                title: "Object-Oriented Programming",
                technology: "Classes, objects, inheritance, and polymorphism"
            },
            {
                title: "Libraries",
                technology: "pandas, numpy, matplotlib for data manipulation and visualization"
            },
            {
                title: "Error Handling",
                technology: "Exception handling and debugging"
            },
        ],
        link: "",
        duration: "Self-paced"
    }
];

export const educationData = [
    {
        id: 1,
        title: "Higher Secondary",
        subTitle: "A J Inter College, Farrukhabad",
        duration: "2012-2013",
        Icon: SchoolIcon,
        timeLineColor: undefined
    },
    {
        id: 2,
        title: "Senior Secondary",
        subTitle: "Christian Inter College, Farrukhabad",
        duration: "2013-2015",
        Icon: SchoolIcon,
        timeLineColor: "primary"
    },
    {
        id: 3,
        title: "Diploma",
        subTitle: "Govt. Polytechnic Mainpuri",
        duration: "2015-2018",
        Icon: AssignmentIcon,
        timeLineColor: "success"
    },
    {
        id: 4,
        title: "Bachelor of Techology",
        subTitle: "Bundelkhand Institute of Engineering & Technology, Jhansi ( BIET )",
        duration: "2018-2021",
        Icon: EngineeringIcon,
        timeLineColor: "secondary"
    },
];

export const experienceData = [
    {
        id: 1,
        title: "Product Engineer (.Net)",
        subTitle: "Smart Energy Water (SEW.AI)",
        duration: "Nov 2023-Ongoing"
    },
    {
        id: 2,
        title: ".Net Developer",
        subTitle: "VitSoft Solutions Pvt. Ltd",
        duration: "2021-2023"
    }
];

export const educationPopUpData = [
    {
        id: 1,
        title: "Higher Secondary",
        subTitle: "A J Inter College, Farrukhabad",
        duration: "2012-2013",
        Icon: SchoolIcon,
        timeLineColor: undefined,
        location: "Awajpur, Farrukhabad",
        specialization: "Maths",
        modeOfStudy: "Full Time",
        skills: "",
        certificates: "",
        internshipsOrTraining: "",
        images: [
            "https://t4.ftcdn.net/jpg/06/29/43/71/240_F_629437143_neDWI3pxQhSY7nixBWr50uxWyI9EF1sm.jpg",
        ]
    },
    {
        id: 2,
        title: "Senior Secondary",
        subTitle: "Christian Inter College, Farrukhabad",
        duration: "2013-2015",
        Icon: SchoolIcon,
        timeLineColor: "primary",
        location: "Bardhpur, Farrukhabad",
        specialization: "Physics, Chemistry & Maths",
        modeOfStudy: "Full Time",
        skills: "",
        certificates: "",
        internshipsOrTraining: "Community Developement Through Polytechnic",
        images: [
            "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrcnk3J0MKTi627pjZi9LO2FatFVQjlymlfb5B1zHdzlGhhkDykq90BGg4E-5PvEb6IF0er6N8tiXKAPKYf2nkC48gSoM6568-pkUJSSAaBv0RcyMIIZcq50OaBukWlTsyC8g=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqsybGkEWodqJ48t2XGw3ABVGtxpL1mOY9s1qd41IY3IYaj9XRtLoh_xhXWM1UaKQHPKEG-iaXTxp8xrdWJePO-N0gaKN_QCgMfoaWlfsuid2rjTUZRSekk28Anrv-pshBhYWmI9g=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AC9h4no70R4X1Gu4qmJIBJdbN3Lija9LMW60QemQON8gfOGb_v934A8J9J1fhqo15gL3VidFHkNjbx0vdyw3aRBnRYYsrcVmGXEd_n73qIiZT6PMoB0zklHOtc1NaUijMGTlVlhRtKpM5w=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npHN1uLMHRLCpdV4Swt8u32JwrAvoBocvHvBmnstR4Jv62WAxrM4LbxZKDR7AZVleept5Pq0ihu8xQ2HCXSIhzplwJ6bupmCMJD4mHaVdEZeIP1q6XINF32dkb6jt2k52-HUQDrBQ=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqs1gCpSpZmwYvu-yTn8jj_uyFN3RVFhLJTr_W0W92TgdLjxIltZDUA2XqQgajlnUpWTpDw13Rx_JCt4PozTfFk4IpobRiZcmWqWM1fDaTgFhY9RPQozTtsQkgO561wZoBiKxLq=s1360-w1360-h1020-rw"
        ]
    },
    {
        id: 3,
        title: "Diploma",
        subTitle: "Govt. Polytechnic Mainpuri",
        duration: "2015-2018",
        Icon: AssignmentIcon,
        timeLineColor: "success",
        location: "Mainpuri, Uttar Pradesh",
        specialization: "Electronics Engineering Advance Microprocessor & Interface",
        modeOfStudy: "Full Time",
        skills: "",
        certificates: "",
        internshipsOrTraining: "Vocational Training, U.P. Power Transmission Corporation Limited, Fatehgarh",
        images: [
            "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npYVMtVuKbgxsJW0L6cFqVnCc4CvczPAoEfJ8wrr31vNgrN11u8IdImpyBkzDLCILfEvzgiSChBSF3TH14TGjDER17bEdt2iSa0ktEuyJYTPLcveT8A4kwai3Xh74P_cSSNsLae9A=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqBAmRBDalMmS-cWyKrysv8XKE0IBfgX7BOql3azNi396TkS-KfTQrIZ111-XhAVkkswbcCX76RJFsEUiXuCA3zrg8dp8wBdagzNXt6oDIuBIKbEf3XHxG5JKKBTYlX92hOWT7YUQ=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npUDBA9KAJGp1u2jAByvwp5qhuz8hNOOMbYO6LiqgSQWVCy1ZM6iplf7Ppg5rND-WHvJ6L0AE3XXTFb-_bG972EGhLbpU_erOgQ5JOxnY9jv66RzK9sdFgxPftzlbF0vfSUlo-Z=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nocDFlVo33GQMkZ7RTvIXYzNjo9HyhTklnrArjGKg1sXDhLKY-RpMzMzap1WL8IBZSrzE_PNwoXeFNDnUk606ykeFXMUDY_DV0GyLPA3UD1HM2r3tOAVsHu65Wt6pu414hmr69O=s1360-w1360-h1020-rw",

        ]
    },
    {
        id: 4,
        title: "Bachelor of Techology",
        subTitle: "Bundelkhand Institute of Engineering & Technology, Jhansi ( BIET )",
        duration: "2018-2021",
        Icon: EngineeringIcon,
        timeLineColor: "secondary",
        location: "Jhanshi, Uttar Pradesh",
        specialization: "Electronics & Communication Engineering",
        modeOfStudy: "Full Time",
        skills: "Bootstrap, jQuery, JavaScript, SQL, Python, HTML, CSS",
        certificates: "Programming for Everybody (Coursera), Python (Basics) (HakerRank)",
        internshipsOrTraining: "Programming with Python (InternShala)",
        images: [
            "https://bietjhs.ac.in/wp-content/uploads/2017/01/banner-5-1300x481.jpg",
            "https://bietjhs.ac.in/wp-content/uploads/2017/01/slider-1-1300x481.jpg",
            "https://bietjhs.ac.in/wp-content/uploads/2017/01/slider-3-1300x481.jpg",
            "https://bietjhs.ac.in/wp-content/uploads/2017/01/slider-2-1300x481.jpg",
            "https://bietjhs.ac.in/wp-content/uploads/2017/01/slider-4-1300x481.jpg",
            "https://bietjhs.ac.in/wp-content/uploads/2017/01/slider-5-1300x481.jpg"
        ]
    },
];