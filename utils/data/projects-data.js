import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'SkillMentors',
        description: "Skillmenter is a mobile application designed to help college students enhance their skills and connect with industry professionals. The app provides various learning resources, opportunities for skill development, and a platform to track progress. Built using Flutter for a seamless cross-platform experience, Skillmenter leverages Laravel as its backend framework to ensure a robust and scalable infrastructure. The app utilizes REST APIs for efficient communication between the frontend and backend, providing users with real-time updates and smooth navigation. Whether you're looking to improve your technical skills or gain insights from professionals, Skillmenter is your gateway to personal and professional growth.",
        tools: ['RestApi','Laravel','php'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Shadcn-ui-Form-Builder',
        description: 'This project is an online form builder app that enables users to create custom forms through an intuitive interface. The forms are automatically converted into Next.js code, allowing for seamless integration into web applications. Additionally, the data from the forms is converted into JSON format for easy management and use. The app is developed using Next.js, ShadCN UI, and Tailwind CSS, ensuring a smooth and responsive user experience. This tool streamlines the process of building and deploying forms, making it efficient for developers to integrate dynamic forms into their projects.',
        tools: ['NextJS', 'Tailwind CSS', "Shadcn Ui"],
        role: 'Front-end Developer',
        code: 'https://github.com/thanigaivel0721/Shadcn-ui-Form-Builder.git',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Orphanage Donation Platform',
        description: 'Built a donation platform using HTML, CSS, JS, and PHP to streamline contributions and track impact for orphanages. The platform allows users to donate.',
        tools: ['Html', 'CSS', 'JavaScript', 'PHP', 'MySql'],
        code: 'https://github.com/thanigaivel0721/Orphanage-Donation.git',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Portfolio Website',
        description: "Responsive and interactive personal portfolio website designed using HTML, CSS, and JavaScript to showcase skills, projects, and achievements with modern aesthetics and functionality.",
        tools: ['Html', 'CSS', 'JavaScript'],
        code: 'https://github.com/thanigaivel0721/Portfolio.git',
        demo: 'https://thanigaivel0721.github.io/Portfolio/',
        image: ayla,
        role: 'Front-end Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },