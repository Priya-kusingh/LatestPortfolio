// import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { PiLinkSimple } from "react-icons/pi";
import SingleContactSocial from "./SingleContactSocial";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Link } from "react-scroll";
const ContactSocial = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex gap-4 "
    >
       {/* <link to="https://github.com/Priya-kusingh"> */}
        <SingleContactSocial Link="https://github.com/Priya-kusingh" Icon={FaGithub} />
      {/* </link> */}
      {/* <link to="https://www.linkedin.com/in/priya-kushwaha-901786232"> */}
        <SingleContactSocial Link="https://www.linkedin.com/in/priya-kushwaha-901786232" Icon={FaLinkedinIn} />
      {/* </link> */}
      {/* <link to="https://kushwahapriya.netlify.app/"> */}
        <SingleContactSocial Link="https://kushwahapriya.netlify.app/" Icon={PiLinkSimple} />
      {/* </link> */}
    </motion.div>
  );
};

export default ContactSocial;
