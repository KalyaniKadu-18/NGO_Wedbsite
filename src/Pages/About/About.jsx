import React from 'react';
import img from '../../assets/Images/about_header_img.avif';
import img1 from '../../assets/Images/project_header_img.avif';
import img2 from '../../assets/Images/news_header_img.avif';
import img3 from '../../assets/Images/team_header_img.avif';
import img4 from '../../assets/Images/contact_header_img.avif';
import styles from './About.module.css';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';

function About() {
  return (
    <div className={styles.container}>
      <img src={img} alt="About Section" className={styles.About_img} />

      <h1 className={styles.about_heading}>About Choose Equality</h1>
      <p className={styles.aboutpara}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
      </p>
      <p className={styles.aboutpara}>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
      <div className={styles.buttonContainer}>
        <Button text="2035 Financial Status" />
        <Button text="Certification Registry" />
      </div>

      <div className={styles.second_part_heading}>
        <h1 className={styles.about_heading}>Our Goals</h1>
        <div className={styles.second_part_images}>
          <div className={styles.images}>
            <img src={img1} className={styles.img_1}></img>
            <img src={img4} className={styles.img_2}></img>
          </div>
          <img src={img2}></img>
          <img src={img3}></img>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
