import React from "react";
import styles from "./ProjectHero.module.css";
import img from "../../../assets/Images/project_header_img.avif";
import ProjectImages from "../projectImages/ProjectImages";
import projectData from "../../../DataFiles/ProjectData";

function ProjectHero() {
  return (
    <div className={styles.container}>
      <div className={styles.headerImage}>
        <img src={img} alt="Project Header" />
      </div>
       <div className={styles.heading}>
          <h1>Our Projects</h1>
       </div>
       <p className={styles.para}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
      <div className={styles.container2}>
        {projectData.map((project) => (
          <ProjectImages
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            moveBriefInfo={() => console.log("Read More clicked:", project)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectHero;
