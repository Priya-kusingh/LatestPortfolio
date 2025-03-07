// import React from 'react';
import "./App.css";
import NavbarMain from "./component/Navbar/NavbarMain";
import AboutMain from "./component/aboutSection/AboutMain";
import HeroGradiant from "./component/mainSection/HeroGradiant";
import HeroMain from "./component/mainSection/HeroMain";
import SubHeroSection from "./component/mainSection/SubHeroSection";
import SkillMain from "./component/skills/SkillMain";
import SubSkill from "./component/skills/SubSkill";
import ExperienceMain from "./component/experience/ExperienceMain";
import ProjectMain from "./component/project/ProjectMain";
import ContactMain from "./component/contact/ContactMain";
import FooterMain from "./component/footer/FooterMain";

function App() {
 

  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradiant />
      <SubHeroSection />
      <AboutMain />
      <SkillMain />
      <SubSkill />
      <ExperienceMain />
      <ProjectMain />
      <ContactMain />
      <FooterMain />
      
      
    </main>
  )
}

export default App;
