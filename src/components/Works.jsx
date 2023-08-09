// components/Projects.jsx

import styles from "./Works.module.css";
import Image from "next/image";

import { projectData } from "./data.js";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className={styles.heading}>Works</h2>
      <p className={styles.lead}>
        コーポレートサイトから一枚物のLPまで、コーディングを中心に幅広く承ってまいりました。
        ワードプレス実装まで可能です。現在は楽天での制作業務に集中しています。
      </p>
      <div className="projects-grid">
        {projectData &&
          projectData.map((project) => (
            <div className="project-card" key={project.id}>
              <a href={project.Link} target="_blank" className={styles.link}>
                <div className="project-header">
                  <div className="small-icons"></div>
                </div>
                <h3 className={styles.title}>{project.title}</h3>
                <img
                  src={project.src}
                  width="100%"
                  className={styles.thumnail}
                />
                <p className={styles.description}>{project.description}</p>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
