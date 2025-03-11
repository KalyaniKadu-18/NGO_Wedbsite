import React from 'react';
import styles from './EventHeader.module.css';
import img from '../../../assets/Images/event_header_img.avif';

function EventHeader() {
  return (
    <div>
      <div className={styles.container}>
        <img src={img}
        className={styles.image}
        ></img>
        <div className={styles.imageText}>
            <h2 className={styles.heading1}>FREE & ACCESSIBLE</h2>
            <h1 className={styles.heading2}>EDUCATION FOR ALL</h1>
        </div>
        <div className={styles.heading}>
            <h2>Take action to help us grow</h2>
            <button>DONATE</button>
        </div>
      </div>
    </div>
  )
}

export default EventHeader
