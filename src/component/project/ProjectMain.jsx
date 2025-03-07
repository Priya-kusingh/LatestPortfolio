// import React from 'react'

import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";



const projects = [
  {
    name: "Weather Application",
    align: "right",
    image: "../../public/image/weather.png",
    link: "https://github.com/Priya-kusingh/weather-Application",
  },
  {
    name: "Myntra Clone",
    align: "left",
    image: "../../public/image/Myntra.JPG",
    link: "https://github.com/Priya-kusingh/myntra_clone",
  },
  {
    name: "Happy Angry-Sad Game",
    align: "right",
    image: "../../public/image/happysadangry.jpg",
    link: "https://github.com/Priya-kusingh/happy-sad-angry-game",
  },
  {
    name: "Digital Calculator",
    align: "left",
    image: "../../public/image/calcu.png",
    link: "https://github.com/Priya-kusingh/calculator",
  },
  {
    name: "Portfolio_Priya ",
    align: "right",
    image: "../../public/image/portfolio.JPG",
    link: "https://kushwahapriya.netlify.app/",
  },
  {
    name: "Tech mentors Website",
    align: "left",
    image: "../../public/image/TECHMENTOR.JPG",
    link: "https://github.com/Priya-kusingh/Techjobmentors",
  },
  
];

const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <ProjectText />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12 ">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              align={item.align}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
