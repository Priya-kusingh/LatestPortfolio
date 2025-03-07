// import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import SkillText from "./SkillText";
import AllSkills from "./AllSkills";
import AllSkillSm from "./AllSkillSm";


const SkillMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
     <motion.div 
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}>
<SkillText />
     </motion.div>
      <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden">
        <motion.div
           variants={fadeIn("down", 0.3)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: false, amount: 0.7 }}
        >
      <AllSkills />
        </motion.div>
      </div>
      <div className=" sm:block lg:hidden">
        <AllSkillSm />
      </div>
      
      </div>
      
    </div>
  );
};

export default SkillMain;
