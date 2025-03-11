import React from 'react';
import styles from './Testimonial.module.css';

function Testimonial({ heading, description, para }) {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>{heading}</p>
      <h2 className={styles.description}>{description}</h2>
      <p className={styles.para}>{para}</p>
      <div className={styles.circleDiv}></div>
    </div>
  );
}

export default Testimonial;
