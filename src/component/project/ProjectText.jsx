// import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ProjectText = () => {
  return (
    <div className="flex items-center mt-[100px] flex-col">
    <motion.h2
       variants={fadeIn("up", 0)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0 }}
    className="text-6xl text-pink mt-10">Projects</motion.h2>
    <motion.p 
       variants={fadeIn("right", 0)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0 }}
    className="text-lg text-center text-white m-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, sequi. At praesentium quae quaerat. Labore atque sapiente ab odio nisi consequatur magnam! Deleniti quis totam quasi at, unde, maxime sed consequuntur explicabo aspernatur ut est dolorum commodi? Cum, non fugit.</motion.p>
    </div>
  )
}

export default ProjectText;
