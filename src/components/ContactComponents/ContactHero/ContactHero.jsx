import React from 'react';
import styles from './ContactHero.module.css';
import img from '../../../assets/Images/contact_header_img.avif';
function ContactHero() {
  return (
    <div className={styles.container}>
         <img src={img}></img>  
         <h1 className={styles.contactHeading}>Contact Us</h1>    
    </div>
  )
}

export default ContactHero
