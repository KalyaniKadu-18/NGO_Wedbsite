import React from 'react';
import styles from './Upcoming.module.css';

function UpcomingEvent() {
  return (
    <div className={styles.container}>
      <h1>Upcoming Events</h1>
      <div className={styles.eventOneContainer}>
        <div className={styles.content}>
        <h2 className={styles.heading2}>End of The Year Picnic /</h2>
        <p> San Fransicsco</p>
        </div>
        <button className={styles.btn}>RSVP</button>
      </div>
      <div className={styles.eventTwoContainer}>
        <div className={styles.content}>
        <h2 className={styles.heading2}>End of The Year Picnic /</h2>
        <p> San Fransicsco</p>
        </div>
        <button className={styles.btn}>RSVP</button>
      </div>
    </div>
  )
}

export default UpcomingEvent
