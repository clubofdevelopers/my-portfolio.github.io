import Project1 from "../../assets/project1.webp";
import Project2 from "../../assets/project2.webp";
import Project3 from "../../assets/project3.webp";


export const projectsData = [
    {
        id: 4,
        category: "B",
        image: Project2,
        title: "Town of Apex Utility",
        overview: "The Town of Apex Utility v11 project is focused on providing an enhanced, user-friendly platform for managing electric & water utilities services. The system allows residents & commercial users to efficiently manage their electric & water usage, pay bills online, and access critical service-related information.",
        technologies: [
            {
                title: "Frontend",
                technology: "React, JavaScript, HTML, CSS, Material UI"
            },
            {
                title: "Backend",
                technology: "NET Core for the backend APIs"
            },
            {
                title: "Database",
                technology: "SQL Server, PostgreSQL, MongoDB, Cassandra"
            },
            {
                title: "Other",
                technology: "APIs for utility data management"
            }
        ],
        keyFeatures: [
            {
                featureTitle: "Online Bill Payment",
                description: "Residents can securely pay their electric & water utility bills online with multiple payment options."
            },
            {
                featureTitle: "Billing History",
                description: "Users can view detailed billing history and track their utility expenses over time."
            },
            {
                featureTitle: "Electric & Water Usage Tracking",
                description: "Provides detailed analytics on electric & water consumption to help users monitor and reduce their usage."
            },
            {
                featureTitle: "Service Requests",
                description: "Users can easily raise service requests for electric & water related issues, such as repairs or maintenance."
            },
            {
                featureTitle: "Notification System",
                description: "Sends automated notifications and reminders about bill payments, usage and outage service interruptions."
            },
            {
                featureTitle: "Account Management",
                description: "Allows users to update account details, view billing history, and manage their services through a simple dashboard."
            }
        ],
        rolesAndResponsibilities: "I am involved in both frontend and backend development, focusing on user interface improvements, API integration, and ensuring smooth data flow between services. I also work on optimizing performance and enhancing the overall user experience. Additionally, I integrated VaultService for Very Good Security (VGS) to securely handle users' personal identification information, Payment Integration for Utility Deposit residential & commercial users and implemented Google Map integration for Utility Connect, Disconnect, and Leak Adjustment services. I have also developed new Service Engagement Forms & integrate Ticket Management API to streamline customer interactions.",
        impact: "The V11 version has made the system more robust and user-friendly, improving resident satisfaction by making utility management more accessible and convenient. It has also streamlined the town’s utility billing process."
    },
    {
        id: 1,
        category: "A",
        image: Project3,
        title: "Club Of Developers (Blog)",
        href: "https://clubofdevelopers.blogspot.com/",
        overview: "Club Of Developers is a Google-powered blog aimed at fostering a community of developers by sharing knowledge, tutorials, and insights on various programming languages, frameworks, and development practices. The blog serves as a hub for developers to learn, exchange ideas, and stay updated on the latest in tech.",
        keyTopics: ["Web Development (React, Javascript, C#, .Net, etc.)", "Latest Trends and Tools in the Developer Community"],
        technologies: [
            {
                title: "Platform",
                technology: "Blogger (Google)"
            },
            {
                title: "Frontend Customization",
                technology: "HTML, CSS, JavaScript"
            },
            {
                title: "SEO Tools",
                technology: "Google Analytics, Google Search Console"
            }
        ],
        keyFeatures: [
            {
                featureTitle: "Developer Tutorials",
                description: "In-depth tutorials that guide developers from beginner to advanced levels."
            },
            {
                featureTitle: "Community Engagement",
                description: "Comment sections and discussion forums for developers to interact and share their experiences."
            },
            {
                featureTitle: "Frequent Updates",
                description: "Regular posts on the latest technologies, tools, and best practices in software development."
            },
            {
                featureTitle: "Mobile-Friendly Layout",
                description: "Fully responsive design ensuring a seamless experience on all devices."
            }
        ],
        rolesAndResponsibilities: "As the creator and primary author of the blog, I focus on writing high-quality content and managing the blog’s layout and SEO strategies to ensure visibility and engagement. I also interact with the developer community through comments and social media.",
        impact: "The blog has grown into a valuable resource for developers, helping them enhance their skills and stay current with industry trends. It has also contributed to building a strong developer community."
    },
    {
        id: 2,
        category: "B",
        image: Project1,
        title: "City of Norco Utilities Portal",
        overview: "City of Norco Utilities Portal is designed to provide a seamless and user-friendly experience for residents to manage their utility services. This web-based platform allows users to pay utility bills online, monitor their water usage, view billing history, and access various services related to trash, recycling, and hazardous waste.rview",
        technologies: [
            {
                title: "Frontend",
                technology: "Asp.Net, HTML, CSS, JavaScript, Jquery"
            },
            {
                title: "Backend",
                technology: ".Net Core, C#, .NET API"
            },
            {
                title: "Database",
                technology: "SQL Server, MongoDB, Cassandra"
            },
            {
                title: "Other",
                technology: "Toastr for notifications, Google Maps API for payment locations"
            }
        ],
        keyFeatures: [
            {
                featureTitle: "Online Bill Payment",
                description: "Customers can securely pay their utility bills online using various payment methods."
            },
            {
                featureTitle: "Billing History",
                description: "Users can view detailed billing history and track their utility expenses over time."
            },
            {
                featureTitle: "Water Usage Tracking",
                description: "The platform provides insights into water usage to help users monitor consumption."
            },
            {
                featureTitle: "Report Water Waste and Theft",
                description: "Users can report water waste and theft directly through the portal."
            },
            {
                featureTitle: "Contact Us Module",
                description: "Customers can raise support queries using an integrated contact module. (Can Track Request & Saved Form)"
            },
            {
                featureTitle: "Physical Payment Locations",
                description: "A feature that allows users to locate physical payment locations using Google Maps."
            },
            {
                featureTitle: "Service Navigation",
                description: "Users can navigate to different service modules for trash, recycling, bulky item pick-up, and hazardous waste."
            }
        ],
        rolesAndResponsibilities: "As a key contributor, I was responsible for the development of the customer portal which is called SCM ( Smart Customer Mobile ) platform. This included designing the frontend user experience, implementing some custom backend APIs as per the requirement of client in our product.",
        impact: "This portal simplifies utility ( Water ) management for the City of Norco's residents by providing easy access to essential services, improving customer satisfaction, and reducing the need for physical office visits."
    },
    {
        id: 3,
        category: "C",
        image: Project2,
        title: "Learning Management System (LMS)",
        overview: "The Learning Management System (LMS) is an online platform developed to deliver educational content to employees in a remote learning environment. The system enables employees to access course materials, engage with instructors, submit assignments, and track their progress. Upon course completion, users can receive certificates that are accessible through a dedicated certificate module.",
        technologies: [
            {
                title: "Frontend",
                technology: "Vue.js, Razor Pages, HTML, CSS, JavaScript, Jquery, Bootstrap"
            },
            {
                title: "Backend",
                technology: ".Net Core, C#, .NET API"
            },
            {
                title: "Database",
                technology: "MySQL"
            }
        ],
        keyFeatures: [
            {
                featureTitle: "Course Access and Management",
                description: "Employees can easily browse and access various courses with a simple, user-friendly interface.."
            },
            {
                featureTitle: "Instructor Engagement",
                description: "The platform allows user to send to communicate between employees and instructors after completion of course."
            },
            {
                featureTitle: "Assignment Submission",
                description: "Employees can submit assignments digitally, with the platform tracking deadlines and providing feedback, which is configured from the admin panel based on the requirement."
            },
            {
                featureTitle: "Progress Tracking",
                description: "Users can track their course completion, see grades, and receive notifications for upcoming deadlines."
            },
            {
                featureTitle: "Mobile Responsiveness",
                description: "The system is designed to be accessible on both desktop and mobile devices, ensuring flexibility for users on the go."
            }
        ],
        rolesAndResponsibilities: "As a full-stack developer on the project, I worked on both the frontend and backend, ensuring seamless integration between the UI/UX and the backend APIs. I also handled the implementation of real-time features and the assignment tracking system.",
        impact: "The LMS has streamlined remote learning for employees, providing a more engaging and accessible platform for professional development. The platform has been instrumental in increasing employee course completion rates and improving communication between learners and instructors."
    },

];

export const projectsNav = [
    {
        name: "All",
    },
    {
        name: "A",
    },
    {
        name: "B",
    },
    {
        name: "C",
    }
];