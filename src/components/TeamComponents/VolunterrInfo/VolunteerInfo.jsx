import React from 'react';
import styles from './Volunteer.module.css';

function VolunteerInfo({name,description,mail}) {
  return (
    <div className={styles.container}>
       <div className={styles.Vdata}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.para}>{description}</p>
        <h3 className={styles.mail}>{mail}</h3>
       </div>
    </div>
  )
}

export default VolunteerInfo
