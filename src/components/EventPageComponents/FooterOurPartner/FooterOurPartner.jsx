import React from 'react';
import styles from './FooterOurPartner.module.css';
import img1 from '../../../assets/Images/event_footer_logo1.avif';
import img2 from '../../../assets/Images/event_footer_logo2.avif';
import img3 from '../../../assets/Images/event_footer_logo3.avif';
import img4 from '../../../assets/Images/event_footer_logo4.avif';
import img5 from '../../../assets/Images/event_footer_logo5.avif';

function FooterOurPartner() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Our Partners</h1>
      <div className={styles.iconsDiv}>
        <div>
            <img src={img1}></img>
            </div>
            <div>
            <img src={img2}></img>
            </div>
             <div>
            <img src={img3}></img>
            </div>
            <div>
            <img src={img4}></img>
            </div>
             <div>
            <img src={img5}></img>
            </div>
      </div>
    </div>
  )
}

export default FooterOurPartner
