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