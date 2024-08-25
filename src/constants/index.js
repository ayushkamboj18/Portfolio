import {cpp, html,postman, css, express, frontend, backend, creator, web, docker, git, javascript,
  mongodb, nodejs, reactjs, harmony ,blogging, sbms,kalisio} from '../assets'

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
    title: 'CGPA',
    company_name: '09.01',
    icon: kalisio,
    iconBg: '#fff',
    date: 'March 2023 - December 2023',
    points: [
      'I am a third year student and i have acheived 9.01 CGPA till now.',
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
    source_code_link: 'https://github.com/ayushkamboj18/Soul-Care'
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
    source_code_link: 'https://github.com/ayushkamboj18/blog-application'
  },
  {
    name: 'Smart Billing Management System',
    description: 'This project manages billing and inventory system smartly and efficiently.',
    tags: [
      { name: 'Invoice', color: 'blue-text-gradient' },
      { name: 'Inventory', color: 'green-text-gradient' },
      { name: 'Mern', color: 'pink-text-gradient' },
    ],
    image: sbms,
    source_code_link: ''
  }
]
