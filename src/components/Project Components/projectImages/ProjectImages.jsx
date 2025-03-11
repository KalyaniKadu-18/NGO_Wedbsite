import React from 'react';
import styles from './ProjectImages.module.css';

function ProjectImages({ image, title, description, moveBriefInfo }) {
    return (
        <div className={styles.container}>
            <div className={styles.imageText}>
                <img src={image} className={styles.projectImage} alt={title} />

                <div className={styles.projectText}>
                    <h3 className={styles.projectHeading}>{title}</h3>
                </div>

                <p className={styles.para}>{description}</p>

                <h4 className={styles.readMore} onClick={moveBriefInfo}>READ MORE</h4>
            </div>
        </div>
    );
}

export default ProjectImages;