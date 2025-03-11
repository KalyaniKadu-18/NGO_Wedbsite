import React from 'react';
import styles from './NewsHeader.module.css';
import img from '../../../assets/Images/news_header_img.avif';

function NewsHeader() {
  return (
    <div className={styles.container}>
      <img src={img} className={styles.newsImage}></img>
      <h1 className={styles.NewsHeading}>News & Updates</h1>
      <p className={styles.para}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
    </div>
  )
}

export default NewsHeader
