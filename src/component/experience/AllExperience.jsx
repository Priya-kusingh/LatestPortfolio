// import React from 'react'
import { IoArrowForwardCircle } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import SingleExperience from "./SinlgeExperience";

const experiences = [
  {
    job: "Front-End developer",
    responsibilities: [
      "Creating responsive and visually appealing web applications using HTML, CSS, and JavaScript",
      "Write clean, maintainable, and efficient React.js or other frontend frameworks.",
      "Integrating animations and transitions for a better UI experience.",
      "Building mobile-friendly UIs with responsive design techniques.",
      "Consuming RESTful APIs and handling API responses using fetch() ",
    ],
  },
  {
    job: "React.js Developer",
    responsibilities: [
      "Creating responsive and visually appealing web applications using HTML, CSS, and JavaScript",
      "Write clean, maintainable, and efficient React.js or other frontend frameworks.",
      "Integrating animations and transitions for a better UI experience.",
      "Building mobile-friendly UIs with responsive design techniques.",
      "Consuming RESTful APIs and handling API responses using fetch() ",
    ],
  },
  {
    job: "Full Stack Developer",
    responsibilities: [
      "Creating responsive and visually appealing web applications using HTML, CSS, and JavaScript",
      "Write clean, maintainable, and efficient React.js or other frontend frameworks.",
      "Integrating animations and transitions for a better UI experience.",
      "Building mobile-friendly UIs with responsive design techniques.",
      "Consuming RESTful APIs and handling API responses using fetch() ",
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) =>{
        return(
          <>
          <motion.div 
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}>
          <SingleExperience key={index} experience={experience} />
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            >
          {index < 2? <IoArrowForwardCircle  className="text-5xl text-pink lg:block sm:hidden"  /> : ""}
          </motion.div>
      </>  
      );
      })}
    </div>
  )
}

export default AllExperience;
