import React from 'react';
import img from "../../assets/Images/team_header_img.avif";
import styles from './Team.module.css';
import TeamInfo from '../../components/TeamComponents/TeamInfo/TeamInfo';
import TeamData from '../../DataFiles/TeamData';
import VolunteerInfo from '../../components/TeamComponents/VolunterrInfo/VolunteerInfo';
import VData from '../../DataFiles/VolunteerData';

function Team() {
  return (
    <div className={styles}>
      <div className={styles.TeamHeaderImage}>
        <img src={img}></img>
      </div>
      <div className={styles.heading}>
        <h1>Our Team</h1>
      </div>
      <p className={styles.para}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
      <div className={styles.TeamInfo}>
        {TeamData.map((Team, index) => (
          <TeamInfo
            key={index}
            image={Team.image}
            name={Team.name}
            description={Team.description}
            email={Team.email}
          />
        ))}
      </div>

      <div className={styles.Vinformation}>
        <h1 className={styles.Vheading}>Our Volunteer's</h1>
        <p className={styles.Vbreifinfo}> 
        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
           </p>
        <div className={styles.VolunteerData}>
          {
            VData.map((Volunteer, index) => (
              <VolunteerInfo
                key={index}
                name={Volunteer.name}
                description={Volunteer.description}
                mail={Volunteer.mail}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Team
