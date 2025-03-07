// import React from 'react'


import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import SingleSkill from "./SingleSkill";

const skills = [
  {
    skill: "HTML/HTML5",
    icon: FaHtml5,
  },
  {
    skill: "CSS/CSS3",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript with (ES6)",
    icon: IoLogoJavascript,
  },
  {
    skill: "React.JS",
    icon: FaReact,
  },
  {
    skill: "Redux Toolkit",
    icon: SiRedux,
  },
  {
    skill: "Tailwind CSS",
    icon: SiTailwindcss,
  },

  {
    skill: "MYSQL",
    icon: SiMysql,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "BootStrap",
    icon: FaBootstrap,
  },
  {
    skill: "Node.JS",
    icon: FaNode,
  },
  
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
