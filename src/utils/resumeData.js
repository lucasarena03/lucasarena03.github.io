import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { AssignmentIndOutlined } from "@mui/icons-material";
import { WebOutlined } from "@mui/icons-material";
import Language from "@mui/icons-material/Language";

import displayImage from "../assets/images/displayImage.jpg";
import sword from "../assets/images/sword.png";
import runescapeGold from "../assets/images/runescapeGold.jpg";
import cppScape from "../assets/images/cppScape.png";
import cppScape2 from "../assets/images/cppScape2.png";
import gptracker from "../assets/images/gptracker.png";

export default {
  name: "Lucas Arena",
  title: "Software Enginner Student",
  birthday: "24th January 2003",
  email: "lucasa4585@gmail.com",
  address: "1120 19th St Sw Naples, FL",
  phone: "239-776-2999",

  socials: {
    LinkedIn: {
      link: "https://www.linkedin.com/in/lucas-arena-0a9239249/",
      text: "MyLinkedIn",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://github.com/lucasarena03",
      text: "MyGithub",
      icon: <GitHubIcon />,
    },
  },
  about:
    "Hello! My name is Lucas Arena, and I am a junior Software Engineering student with a passion for both front-end and back-end development. I thrive on the creative challenge of designing intuitive user interfaces and enjoy the intricate problem-solving aspects of back-end development. As an aspiring engineer, I am constantly seeking opportunities to expand my skills and knowledge in both areas. I have a solid foundation in languages such as HTML, CSS, React, C++ and Python, and I am eager to apply these skills to real-world projects. With a strong attention to detail and a dedication to producing high-quality code, I am excited to contribute my expertise to the world of software development. Let's create innovative and user-centric solutions together!",

  experiences: [
    {
      title: "FSU CS Lab Assistant",
      date: "September 2021 - December 2021",
      description:
        "Provided essential support in managing the lab environment while assisting fellow students with basic computer science problems. I facilitated a smooth workflow, ensuring students received prompt assistance and guidance in resolving their technical challenges.",
    },
  ],

  educations: [
    {
      title: "Florida State University",
      date: "June 2021 - June 2022",
      description:
        "BS in Computer Science, Earned AA, GPA: 3.5",
    },
    {
      title: "Florida Gulf Coast University",
      date: "August 2022 - Present",
      description:
        "BS in Computer Science, GPA: 3.6",
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: ["ReactJS", "Material UI", "Bootstrap", "HTML", "CSS"],
    },
    {
      title: "Back-End",
      description: ["Python", "C++"],
    },
  ],

  projects: [
    {
      tag: "React",
      image: displayImage,
      exampleImage: sword,
      title: "Project 1",
      caption: "A short description",
      description: "This is my project description",
      links: [
        { link: "https://www.google.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <WebOutlined /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
    {
      tag: "C++",
      image: cppScape,
      exampleImage: cppScape2,
      title: "CPPScape",
      caption: "C++ COP 2006 Project",
      description: "In my COP 2006 project, I recreated the formidable Alchemical Hydra boss from Old School RuneScape, capturing its intense combat mechanics and challenging gameplay. Experience the thrill of battling this mythical creature as you strategize, adapt, and aim for victory in this faithful recreation of a beloved boss encounter.",
      links: [
        { link: "https://www.google.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <WebOutlined /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
    {
      tag: "Python",
      image: runescapeGold,
      exampleImage: gptracker,
      title: "Runescape Gold Tracker",
      caption: "Python Hash Table Project",
      description: "In my Python project, I developed a RuneScape GP tracker using hash tables, allowing players to efficiently keep track of their in-game wealth. With this tool, users can easily monitor their gold pieces (GP) balance, track transactions, and gain valuable insights into their financial progress within the game.",
      links: [
        { link: "https://github.com/lucasarena03/CPPScape", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <WebOutlined /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
  ],
};
