import skySkillHub from '../../assets/skyskill5.webp'
import skySkillHub1 from '../../assets/skyskill1.webp'
import skySkillHub2 from '../../assets/skyskill2.webp'
import skySkillHub3 from '../../assets/skyskill3.webp'
import onicon1 from '../../assets/onicon1.webp'
import onicon2 from '../../assets/onicon2.webp'
import onicon3 from '../../assets/onicon3.webp'
import onicon4 from '../../assets/onicon4.webp'
import uacc1 from '../../assets/mom1.webp'
import uacc2 from '../../assets/mom2.webp'
import uacc3 from '../../assets/mom3.webp'
import uacc4 from '../../assets/mom4.webp'
import flo from '../../assets/flo.gif'
import flo1 from '../../assets/flo3.webp'
import flo2 from '../../assets/flo4.webp'
import flo3 from '../../assets/flo5.webp'
import flo4 from '../../assets/flo6.webp'
import nhutch1 from '../../assets/ntuchi1.webp'
import nhutch2 from '../../assets/ntuchi2.webp'
import nhutch3 from '../../assets/ntuchi1.webp'
import nhutch4 from '../../assets/ntuchi1.webp'
import kma1 from '../../assets/kma.webp'
import kma2 from '../../assets/kma2.webp'
import kma3 from '../../assets/kma.webp'
import bikes from '../../assets/bikes1.webp'
import bikes1 from '../../assets/bikes2.webp'
import bikes3 from '../../assets/bikes4.webp'
import skystudio1 from '../../assets/skystudio1.webp'
import skystudio2 from '../../assets/skystudio2.webp'
import skystudio3 from '../../assets/skystudio3.webp'
import binarybloggy1 from '../../assets/bloggy1.webp'
import binarybloggy2 from '../../assets/bloggy2.webp'
import binarybloggy3 from '../../assets/bloggy3.webp'
import infifteen1 from '../../assets/infifteen.webp'
import infifteen2 from '../../assets/infifteen2.webp'
import infifteen3 from '../../assets/infifteen3.webp'
import infifteen4 from '../../assets/infifteen4.webp'
import resumevantage from '../../assets/resume.webp'
import resumevantage1 from '../../assets/resume1.webp'
import resumevantage2 from '../../assets/resume.webp'
import optimize from '../../assets/optimize.webp'
import optimize1 from '../../assets/optimize1.webp'
import optimize2 from '../../assets/optimize.webp'




export let allProjects = [
    {
        images:[skySkillHub,skySkillHub1,skySkillHub2,skySkillHub3],
        title:"SkySkillHub",
        date:2023,
        about:"A learning Management system",
        role:"Fullstack(Backend Heavy)",
        paragraphs:[
            "I worked as a full-stack engineer, focusing heavily on the backend, at SkySkillHub, an innovative learning management system (LMS). The platform allowed users to register for courses and make payments to learn various tech skills. My role involved ensuring seamless user registration, secure payment handling, and the overall scalability of the system.",
            "The stack I worked with included a mix of modern web technologies. On the backend, I used Node.js for the api, python for the server-side logic, Redis for the in-memory caching although for cache files where I/O latency is better than the latency gotten from connecting to redis-cloud, I utilized disk caching and for the database, MongoDB was used. For the frontend, we built the application using Next.js, ensuring a fast and SEO-friendly user experience. Payment integrations were a crucial part of the project, and we successfully integrated Paystack and Stripe to handle payments from users across different regions.",
            "My development process was highly structured, following agile methodologies to ensure efficient and timely delivery. I maintained detailed API documentation using SwaggerDocs, which facilitated collaboration between the front-end and back-end teams. This documentation also helped in streamlining the process of onboarding new developers and ensuring that the API endpoints were well-documented and easy to understand."
        ],
        tags:['NodeJS','Backend','MongoDB','Python','Paystack','SwaggerDocs'],  
        link:"https://skyskillhub.com"  
    },
    {
        images: [onicon1, onicon2, onicon3,onicon4],
        title: "Onicon",
        date:2023,
        about:"A Nigerian engineering firm portfolio",
        role: "Frontend Engineer",
        paragraphs: [
            "I worked as a frontend engineer on Onicon, a website designed for a construction firm. The project focused on creating a visually appealing and user-friendly interface to showcase the firm's services and projects. My role involved implementing responsive designs and ensuring a seamless user experience across various devices.",
            "The technology stack for Onicon included React.js for building the dynamic user interface and Tailwind CSS for styling. React.js allowed for the creation of reusable components and efficient updates to the user interface, while Tailwind CSS provided a flexible and modern approach to design. This combination enabled rapid development and a consistent look and feel throughout the site.",
            "Throughout the development process, I collaborated closely with the designer to bring their vision to life. I ensured that the design was implemented accurately and performed thorough testing to guarantee a polished, responsive, and cross-browser compatible website."
        ],
        tags: ['React.js', 'Frontend', 'Tailwind CSS', 'Responsive Design'],
        link:"https://onicon.com.ng"
    },
    {
        images: [uacc1, uacc2, uacc3, uacc4],
        title: "UACC",
        date: 2023,
        about: "A church website for managing articles, messages, and payments.",
        role: "Fullstack Engineer",
        paragraphs: [
            "I worked as a fullstack engineer on UACC, a website designed for a church organization. The project involved building a platform where articles and messages are summarized and easily accessible to the congregation. My role encompassed both frontend and backend development, ensuring a seamless and efficient user experience across the site.",
            "On the frontend, I utilized React.js to create dynamic and interactive user interfaces. The responsive design ensured that users could easily navigate the site on any device. For the backend, I implemented Express.js and MongoDB to manage the data and handle user interactions effectively. The admin dashboard, equipped with a separate login system, allows church staff to manage content and view payment records securely.",
            "One of the key features of the UACC site is the integration with Paystack for processing offerings and tithes. I set up the payment gateway to ensure smooth and secure transactions, allowing users to make donations online with ease. Throughout the development, I focused on creating a robust, scalable solution that meets the church's needs while providing an intuitive experience for both the congregation and the administrators."
        ],
        tags: ['React.js', 'Express.js', 'MongoDB', 'Paystack', 'Fullstack Development'],
        link: "https://uaccwebsite.com"
    },{
        images: [flo,flo1, flo2, flo3, flo4],
        title: "FLO",
        date: 2023,
        about: "A portfolio website for a product designer.",
        role: "Frontend Developer",
        paragraphs: [
            "I worked as a frontend developer on FLO, a portfolio website designed to showcase the work of a product designer. The project aimed to create a visually stunning and highly functional platform where the designer's work could be easily accessed by potential clients.",
            "The website was built using React.js, which allowed for the creation of a dynamic and responsive user interface. The design focused on minimalism and ease of navigation, ensuring that the user's attention remained on the designer's portfolio. I collaborated closely with the designer to ensure that the visual elements were implemented accurately and the site was optimized for performance.",
            "Throughout the development process, I focused on implementing clean and efficient code, ensuring that the website was not only beautiful but also performant across all devices and browsers."
        ],
        tags: ['React.js', 'Frontend Development', 'Responsive Design', 'UI/UX'],
        link: "https://flodesigner.com"
    },
    {
        images: [nhutch1, nhutch2, nhutch3],
        title: "Nhutch",
        date: 2023,
        about: "A Mozambique fintech company for loan and payment processing.",
        role: "Fullstack Developer",
        paragraphs: [
            "I worked as a fullstack developer on Nhutch, a fintech platform based in Mozambique. The project involved developing a robust system for processing loans and payments, ensuring security, efficiency, and scalability.",
            "On the frontend, React.js was used to create an intuitive and responsive user interface. The backend was powered by Django Rest Framework, which provided a solid foundation for handling complex financial transactions and integrations with multiple payment gateways.",
            "The platform required integration with various payment tools, including mobile money services and traditional banking systems, to facilitate seamless transactions for users. My role also involved implementing security measures to protect user data and financial information, making the platform both user-friendly and secure."
        ],
        tags: ['React.js', 'Django Rest Framework', 'Fullstack Development', 'Payment Processing', 'Fintech'],
        link: "https://nhutchfinance.com"
    },
    {
        images: [kma1, kma2, kma3],
        title: "KMA",
        date: 2023,
        about: "A betting analysis platform delivering predictions to premium subscribers.",
        role: "Backend Engineer",
        paragraphs: [
            "I worked as a backend engineer on KMA, a betting analysis platform designed to provide premium subscribers with accurate betting predictions. The project required a system to automate the delivery of predictions and insights to users' emails.",
            "The backend was built using Django Rest Framework, with Celery and Celery Beat used for task scheduling and automation. This allowed the platform to handle the regular updates and distribution of betting predictions efficiently.",
            "In addition to email delivery, I also implemented a Telegram bot to provide subscribers with real-time notifications. This multi-channel approach ensured that users received timely updates through their preferred method of communication."
        ],
        tags: ['Django Rest Framework', 'Celery', 'Celery Beat', 'Backend Development', 'Telegram Bot'],
        link: "https://kma-betting.com"
    },
    {
        images: [bikes1, bikes3, bikes],
        title: "Bikes of Lagos",
        date: 2023,
        about: "An ecommerce platform for buying and selling bikes in Lagos.",
        role: "Fullstack Engineer",
        paragraphs: [
            "I worked as a fullstack engineer on Bikes of Lagos, an ecommerce platform dedicated to the sale and purchase of bikes in Lagos, Nigeria. The project aimed to provide a seamless and user-friendly online shopping experience for both buyers and sellers.",
            "The frontend was developed using Next.js and React.js, allowing for server-side rendering and a highly responsive user interface. The backend was designed to manage user accounts, product listings, and transactions efficiently.",
            "I collaborated closely with Austin from Astrosoft to ensure that the platform met the business requirements and provided a smooth shopping experience. My role involved integrating payment gateways, managing database interactions, and ensuring that the platform was secure and scalable."
        ],
        tags: ['Next.js', 'React.js', 'Fullstack Development', 'Ecommerce', 'Collaboration'],
        link: "https://bikesoflagos.com"
    },
    {
        images: [skystudio1, skystudio2, skystudio3],
        title: "Skystudio",
        date: 2023,
        about: "A web platform for photo and video editing, where users can create designs or use pre-made templates.",
        role: "Fullstack Engineer",
        paragraphs: [
            "I worked as a fullstack engineer on Skystudio, a platform designed for photo and video editing directly in the browser. The project allows both designers and non-designers to create or use existing designs for their personal or professional needs.",
            "The frontend was built using a combination of React.js for the graphic editor workspace, Next.js for the video editor workspace, Vue.js for the client entry point, and Fabric.js, enabling dynamic and flexible user interactions. The backend was powered by Node.js with TypeScript, and task automation was handled using Celery and Celery Beat for background processing.",
            "Skystudio's complex architecture required careful planning and integration of various technologies to ensure a seamless and responsive user experience. My role involved developing and optimizing both frontend and backend components to handle the diverse needs of users."
        ],
        tags: ['React.js', 'Next.js', 'Vue.js', 'Fabric.js', 'Node.js', 'TypeScript', 'Celery', 'Fullstack Development'],
        link: "https://skystudio.com"
    },
    {
        images: [binarybloggy1, binarybloggy2, binarybloggy3],
        title: "BinaryBloggy",
        date: 2023,
        about: "A personal blog focused on programming and software design.",
        role: "Fullstack Developer",
        paragraphs: [
            "BinaryBloggy is my personal blog where I write about various topics related to programming and software design. The blog is a platform to share insights, tutorials, and experiences with the broader developer community.",
            "The blog was built using Django for the backend and PostgreSQL for the database. The combination of these technologies provided a robust and scalable foundation for managing content and user interactions.",
            "In developing BinaryBloggy, I focused on creating a clean and user-friendly interface, ensuring that readers could easily navigate through articles and access the content they are interested in."
        ],
        tags: ['Django', 'PostgreSQL', 'Fullstack Development', 'Blogging', 'Software Design'],
        link: "https://binarybloggy.com"
    },
    {
        images: [infifteen1, infifteen2, infifteen3, infifteen4],
        title: "InFifteen",
        date: 2023,
        about: "A community-driven quiz app for programmers.",
        role: "Fullstack Developer",
        paragraphs: [
            "InFifteen is a quiz app designed to challenge programmers with multiple-choice questions contributed by the community. The app covers a wide range of topics, including React, JavaScript, Spring Boot, SQL, Django, and Laravel.",
            "The platform was built using Django and PostgreSQL, providing a strong backend to manage user submissions and quiz content. I also implemented Python scripting to efficiently load questions from a JSON file, allowing for easy updates and expansions to the quiz database.",
            "InFifteen currently hosts over 100 questions, making it a valuable resource for developers looking to test and improve their knowledge across various programming languages and frameworks."
        ],
        tags: ['Django', 'PostgreSQL', 'Python Scripting', 'Fullstack Development', 'Quiz App'],
        link: "https://infifteen.com"
    },
    {
        images: [resumevantage1, resumevantage2, resumevantage1],
        title: "Resume Vantage",
        date: 2023,
        about: "An AI-driven platform for creating professional resumes.",
        role: "Backend Engineer",
        paragraphs: [
            "Resume Vantage is a platform that helps users create professional resumes with the assistance of AI. The project is designed to simplify the resume creation process, providing users with tailored suggestions and formatting options.",
            "As a backend engineer, I am responsible for developing and maintaining the server-side logic using Node.js and TypeScript. The backend handles user data, integrates with AI models, and ensures a smooth and responsive experience for users.",
            "The project is still ongoing, with a focus on implementing new features and optimizing the platform's performance to meet the needs of job seekers."
        ],
        tags: ['Node.js', 'TypeScript', 'Backend Development', 'AI Integration', 'Resume Creation'],
        link: "https://resumevantage.com"
    },
    {
        images: [optimize1, optimize2,optimize1],
        title: "Optimize",
        date: 2023,
        about: "A platform for converting high-quality images to WebP format.",
        role: "Fullstack Developer",
        paragraphs: [
            "Optimize is a platform designed to convert high-quality JPEG and PNG images to WebP format, optimizing them for web use. The platform ensures that images are processed efficiently and maintains their quality while reducing file sizes.",
            "I used BullMQ and Redis to handle background processing tasks, allowing for scalable and reliable image conversion. The backend was developed with Node.js, and the frontend was built to provide users with an intuitive interface for uploading and managing their images.",
            "Optimize's architecture focuses on speed and efficiency, making it a valuable tool for developers and designers looking to optimize their web content."
        ],
        tags: ['Node.js', 'BullMQ', 'Redis', 'Fullstack Development', 'Image Conversion', 'WebP'],
        link: "https://optimize.com"
    }
    
    
    
    
    
    
    
    
    
    
       
]




// 1//Skyskillhub/FU=====
// 2//Onicon/FE====
// 7//Mt. OM/FU====
// 3//Flo/FE====
// 4/Austin2===
// 5/Austin1===
// 6//Bloggy/FU===
// 8//Infifteen/FU===
// 9//Resume Vantage/BE===
// 10//nanovestapi/BE===
// 11/Optimize/FS===


// pictures*3
// title
// role
// p1:intro
// p2:stack
// p3:process
// [tags]
// [links] 
