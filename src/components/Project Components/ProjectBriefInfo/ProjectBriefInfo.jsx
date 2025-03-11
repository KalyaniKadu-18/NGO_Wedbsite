import React from 'react';
import styles from './ProjectBrief.module.css';

function ProjectBriefInfo({ image, title, description, imagerow, goBack }) {
    const newPage = () => {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    };

    return (
        <div className={styles.container}>
            <div className={styles.imageText}>
                <img src={image} className={styles.briefInfoImage} alt={title} />
                <div className={styles.briefText}>
                    <h3>{title}</h3>
                    <p className={styles.para}>{description}</p>
                    <button onClick={newPage}>Donate</button>
                    <div>
                        {imagerow.map((img, index) => (
                            <img src={img} key={index} className={styles.briefRowImages} alt={`Project ${index + 1}`} />
                        ))}
                    </div>
                    <h3 onClick={goBack} className={styles.backButton}>Back</h3>
                </div>
            </div>
        </div>
    );
}

export default ProjectBriefInfo;