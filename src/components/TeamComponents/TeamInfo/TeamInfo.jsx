import React from 'react';
import styles from './TeamInfo.module.css';

function TeamInfo({ image, name, description, email }) {
  return (
    <div className={styles.container}>
      <div className={styles.image_div}>
        <img src={image} alt={name} className={styles.image} />
        <div className={styles.name}>
          <h3>{name}</h3>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      <h4 className={styles.email}>{email}</h4>
    </div>
  );
}

export default TeamInfo;
