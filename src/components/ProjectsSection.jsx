import React, { useEffect, useState } from "react";
import "../styles/ProjectsSection.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import MSICS from "../assets/MSICS-LandingPage.png";
import Brookstone from "../assets/Brookstone Landing Page.png";
import Cuda from "../assets/Cuda-Landing Page.png";
import Flipkart from "../assets/Flipkart-Landing Page.png"
import Lenskart from "../assets/Lenskart Landing Page.png";
import Herschel from "../assets/Herschel Web Landing Page.png";

const projects = [
  {
    title: "Lenskart Web",
    description: "Lenskart Web is a responsive e-commerce website clone built with HTML, CSS, and JavaScript. It features a clean design, user-friendly navigation, and showcases products effectively, demonstrating strong web development skills.",
    techStack: "HTML/CSS, JavaScript, React.js",
    image: Lenskart,
    liveLink: "https://lenskart-clone-fe.vercel.app/",
    codeLink: "https://github.com/ChetanSapkale/Lenskart_clone.fe",
  },
  {
    title: "MSICE Pharma",
    description: "MSICE Pharma is a responsive single-page website built with HTML5 and CSS3. It showcases clean design, mobile-first layout, and cross-device compatibility, highlighting strong fundamentals in static web development.",
    techStack: "HTML, CSS",
    image: MSICS,
    liveLink: "https://msics-html-css-website.vercel.app/",
    codeLink: "https://github.com/ChetanSapkale/MSICS_HtmlCss_Website",
  },
  {
    title: "Brookstone Clone Website",
    description: "This is a clone website of Brookstone website. It was built using HTML/CSS, Bootstrap, and JavaScript. I created to practice web development skills and to showcase my ability to create responsive websites.",
    techStack: "HTML, CSS, Bootstrap, JavaScript",
    image: Brookstone,
    liveLink: "https://brookstone-clone-web-twkp.vercel.app/",
    codeLink: "https://github.com/ChetanSapkale/Brookstone_Clone_web",
  },
  {
    title: "Herschel E-commerce Website",
    description: "This is a e-commerce website clone. It was built using HTML/CSS, React-Bootstrap, JavaScript, and React.js. Built to practice web development skills and added features to showcase my foundation and knowledge in web development.",
    techStack: "HTML/CSS, React-Bootstrap, JavaScript, React.js",
    image: Herschel,
    liveLink: "https://herschel-clone-fe.vercel.app/",
    codeLink: "https://github.com/ChetanSapkale/Herschel_Clone.fe",
  },
  {
    title: "Cuda Portfolio Website",
    description: "Cuda is a portfolio website designed to showcase projects and skills. It features a clean, modern design with responsive layout, built using HTML and CSS, ensuring compatibility across devices.npm run dev",
    techStack: "HTML, CSS",
    image: Cuda,
    liveLink: "https://cuda-html-css-web.vercel.app/",
    codeLink: "https://github.com/ChetanSapkale/Cuda_HtmlCss_Web",
  },
  {
    title: "Flipkart Clone",
    description: "A fully responsive Flipkart clone built with HTML, CSS, and JavaScript, replicating core UI features of the original site, including homepage layout, product listings, and navigation.",
    techStack: "HTML, CSS, JavaScript",
    image: Flipkart,
    liveLink: "https://flipkart-clone-fe.vercel.app/",
    codeLink: "https://github.com/ChetanSapkale/Flipkart_Clone.fe.git",
  },
];

function ProjectsSection() {
  const [themeClass, setThemeClass] = useState("dark");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setThemeClass(document.body.classList.contains("light-theme") ? "light" : "dark");
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    // Initial theme set
    setThemeClass(document.body.classList.contains("light-theme") ? "light" : "dark");

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className={`projects-section ${themeClass}`}>
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-content">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <p><strong>Tech Stack :</strong> {project.techStack}</p>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="me-1" /> Live Preview
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="me-1" /> View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
