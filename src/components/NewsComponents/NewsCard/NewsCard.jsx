import React from 'react';
import styles from './NewsCard.module.css';

function NewsCard({image,date,heading,description,moreinfo}) {
  return (
    <div className={styles.container}>
      <div className={styles.NewsCardcontent}>
        <div className={styles.NewsCardImage}>
            <img src={image}></img>
        </div>
        <div className={styles.NewsCardDate}>
            <p>{date}</p>
        </div> 
        <div className={styles.NewsCardHeading}>
            <h1>{heading}</h1>
            <p className={styles.para}>{description}</p>
            <p className={styles.moreinfo}>{moreinfo}</p>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
