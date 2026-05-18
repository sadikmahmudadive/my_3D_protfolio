import {
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  motion,
  nextjs,
  nodejs,
  react,
  tailwindcss,
  typescript,
  contact,
} from "../assets/icons";

import {
  car,
  estate,
  snapgram,
  summiz,
  threads,
  pricewise,
} from "../assets/icons";

export const skills = [
  { imageUrl: html, name: "HTML", type: "Frontend" },
  { imageUrl: css, name: "CSS", type: "Frontend" },
  { imageUrl: javascript, name: "JavaScript", type: "Frontend" },
  { imageUrl: typescript, name: "TypeScript", type: "Frontend" },
  { imageUrl: react, name: "React", type: "Frontend" },
  { imageUrl: nextjs, name: "Next.js", type: "Frontend" },
  { imageUrl: tailwindcss, name: "Tailwind CSS", type: "Frontend" },
  { imageUrl: nodejs, name: "Node.js", type: "Backend" },
  { imageUrl: motion, name: "Framer Motion", type: "Animation" },
  { imageUrl: git, name: "Git", type: "Version Control" },
  { imageUrl: github, name: "GitHub", type: "Version Control" },
];

export const experiences = [
  {
    title: "Chairperson, IEEE RAS BUBT SB",
    company_name: "IEEE BUBT Student Branch",
    icon: github,
    iconBg: "#dbeafe",
    date: "2025",
    points: [
      "Led the Robotics and Automation Society chapter activities and team coordination.",
      "Planned technical events, workshops, and member engagement initiatives.",
      "Collaborated with branch leadership to execute student-focused engineering programs.",
      "Supported strategic planning and operational execution for chapter growth.",
    ],
  },
  {
    title: "General Secretary (GS), IEEE BUBT SB",
    company_name: "IEEE BUBT Student Branch",
    icon: github,
    iconBg: "#dcfce7",
    date: "2025",
    points: [
      "Managed branch administration, communication, and event documentation.",
      "Coordinated between executive members, volunteers, and participants.",
      "Organized timelines, meeting records, and cross-team execution workflows.",
      "Helped ensure smooth delivery of branch programs and student activities.",
    ],
  },
  {
    title: "Graphics Designer (In-charge)",
    company_name: "IEEE BUBT Student Branch",
    icon: github,
    iconBg: "#fee2e2",
    date: "2024",
    points: [
      "Led visual content creation for IEEE events, campaigns, and communications.",
      "Managed design quality, branding consistency, and delivery timelines.",
      "Created social media creatives, posters, and promotional assets.",
      "Mentored design contributors and reviewed output before publication.",
    ],
  },
  {
    title: "ICT & Biology Teacher",
    company_name: "SM Science Academy, Mirpur-1, Dhaka",
    icon: github,
    iconBg: "#fef3c7",
    date: "2019 - Present",
    points: [
      "6 years of teaching experience in ICT and Biology at coaching level.",
      "Prepared structured lesson plans, assessments, and student progress tracking.",
      "Guided students in conceptual learning and practical problem solving.",
      "Supported academic mentoring with focus on consistency and confidence building.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/sadikmahmudadive",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/sadikmahmudadive",
  },
];

export const projects = [
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Temporal Explainable GNN for Intrusion Detection",
    description:
      "Research + implementation project for real-time intrusion detection on dynamic network graphs using temporal GNN and explainability methods.",
    link: "https://github.com/sadikmahmudadive/Temporal-Explainable-GNN-for-Real-Time-Intrusion-Detection-on-Dynamic-Network-Graphs",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "SM Science Group",
    description:
      "Full-stack Next.js platform with Firebase integration, modern UI workflow, and scalable project structure.",
    link: "https://github.com/sadikmahmudadive/SM-Science-Group",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Bismillah Accessories",
    description:
      "Modern e-commerce-focused web application built with Next.js and TypeScript, designed for real product deployment and iteration.",
    link: "https://github.com/sadikmahmudadive/Bismillah-Accessories",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "IEEE Connect Android",
    description:
      "Android app focused on community and organization workflows, developed with Java and Material-based UI architecture.",
    link: "https://github.com/sadikmahmudadive/Ieee_Connect",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "EnvoTracker",
    description:
      "Python desktop app for environmental tracking with Firebase sync and analytics-oriented user insights.",
    link: "https://github.com/sadikmahmudadive/EnvoTracker",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "ESP32 MPU6050 Air Mouse",
    description:
      "IoT prototype combining ESP32 and MPU6050 for motion-based interaction, bridging embedded systems and software control.",
    link: "https://github.com/sadikmahmudadive/ESP32_MPU6050_Air_Mouse",
  },
];
