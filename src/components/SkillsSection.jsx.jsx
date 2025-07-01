import React, { useEffect, useState } from "react";
import "../styles/SkillsSection.css";
import { AiOutlineApi } from "react-icons/ai";
import { IoMdGitBranch } from "react-icons/io";
import { FaHtml5, FaBootstrap, FaReact, FaCss3, FaSass, FaNode } from "react-icons/fa";
import { SiJquery, SiMongodb, SiExpress, SiVite  } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { MdHttp } from "react-icons/md";


const skills = [
  { name: "HTML", icon: <FaHtml5 /> },  
  { name: "CSS", icon: <FaCss3 /> },
  { name: "Bootstrap", icon: <FaBootstrap/> }, 
  { name: "Jquery", icon: <SiJquery /> },
  { name: "Sass", icon: <FaSass /> },
  { name: "Javascript", icon: <IoLogoJavascript /> }, 
  { name: "React", icon: <FaReact /> },
  { name: "RESTful API", icon: <AiOutlineApi /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "Git", icon: <IoMdGitBranch /> },
//   { name: "Node JS", icon: <FaNode /> },
//   { name: "Express JS", icon: <SiExpress /> },
//   { name: "HTTP", icon: <MdHttp /> },
//   { name: "MongoDB", icon: <SiMongodb /> },

];

function SkillsSection() {
  const [showAll, setShowAll] = useState(false);
  const [themeClass, setThemeClass] = useState("dark");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (document.body.classList.contains("light-theme")) {
        setThemeClass("light");
      } else {
        setThemeClass("dark");
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Set initial theme
    if (document.body.classList.contains("light-theme")) {
      setThemeClass("light");
    }

    return () => observer.disconnect();
  }, []);

  const visibleSkills = showAll ? skills : skills.slice(0, 12);

  return (
    <section id="skills" className={`skills-section ${themeClass}`}>
      <h2 className="skills-title">Skills Acquired</h2>
      <div className="skills-grid">
        {visibleSkills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
