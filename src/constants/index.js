import {cpp, html,postman, css, express, frontend, backend, creator, web, docker, git, javascript,
  mongodb, nodejs, reactjs, harmony ,blogging, sbms,kalisio, elevate} from '../assets'

export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'work', title: 'Work' },
  { id: 'contact', title: 'Contact' }
]

export const skills = [
  { title: 'Web Developer', icon: web },
  { title: 'Backend Developer', icon: backend },
  { title: 'Frontend Developer', icon: frontend },
  { title: 'DevOps Engineer', icon: creator }
]

export const experiences = [
  {
    title: 'Core Subjects',
    // company_name: '09.01',
    icon: kalisio,
    iconBg: '#fff',
    date: 'March 2023 - December 2023',
    points: [
      'Solid grasp of core computer science fundamentals, including Data Structures and Algorithms, Operating Systems, Computer Networks, Database Management Systems, and Object-Oriented Programming',
    ]
  },
  {
    title: 'OpenSource',
    company_name: '10+ Projects',
    icon: kalisio,
    iconBg: '#fff',
    date: 'January 2024 - Present',
    points: [
      'I have contributed to over ten projects in open-source development, all of which are based on MERN stack technology.',
    ]
  },
  {
    title: 'Cloud Computing',
    company_name: 'AWS',
    icon: kalisio,
    iconBg: '#fff',
    date: 'January 2024 - Present',
    points: [
      'Architecting robust cloud environments on AWS, leveraging EC2 instances, S3 storage, serverless Lambda functions, and RDS databases to enhance operational performance while balancing security, reliability, and budget considerations.',
    ]
  }
]

export const technologies = [
  { name: 'HTML', icon: html },
  { name: 'CSS 3', icon: css },
  { name: 'JavaScript', icon: javascript },
  { name: 'React JS', icon: reactjs },
  { name: 'Express', icon: express },
  { name: 'Node JS', icon: nodejs },
  { name: 'MongoDB', icon: mongodb },
  { name: 'Git', icon: git },
  { name: 'Docker', icon: docker },
  { name: 'Postman', icon: postman },
  { name: 'Cpp', icon: cpp },
]

export const projects = [
  {
    name: 'Harmony',
    description: 'Harmony focuse on mental health, where users can book appointments with doctors if they feel depressed and also check their mental health using AI.',
    tags: [
      { name: 'MentalHealth', color: 'blue-text-gradient' },
      { name: 'AI', color: 'green-text-gradient' },
      { name: 'Mern', color: 'pink-text-gradient' },
    ],
    image: harmony,
    source_code_link: 'https://github.com/ayushkamboj18/Soul-Care',
    demo_link: 'https://soul-care.vercel.app/'
  },
  {
    name: 'Bloggy',
    description: 'Bloggy is a MERN-based blogging website where users can create their own blogs, read others blogs, and have the ability to update, delete, and comment on posts.',
    tags: [
      { name: 'CRUD', color: 'blue-text-gradient' },
      { name: 'Blog', color: 'green-text-gradient' },
      { name: 'Mongodb', color: 'pink-text-gradient' },
    ],
    image: blogging,
    source_code_link: 'https://github.com/ayushkamboj18/blog-application',
    demo_link: 'https://blog-application-iota-nine.vercel.app/'
  },
  {
    name: 'Elev8',
    description: 'Elev8 is a streamlined event management platform that helps organizations efficiently plan and execute events and hackathons',
    tags: [
      { name: 'Management', color: 'blue-text-gradient' },
      { name: 'Mern', color: 'pink-text-gradient' },
    ],
    image: elevate,
    source_code_link: ''
  }
]
