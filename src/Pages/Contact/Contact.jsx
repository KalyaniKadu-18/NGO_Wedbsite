import React from 'react';
import styles from './Contact.module.css';
import ContactHero from '../../components/ContactComponents/ContactHero/ContactHero';
import ContactForm from '../../components/ContactComponents/ContactForm/ContactForm';
import ContactData from '../../DataFiles/ContactData';
import ContactContributeData from '../../DataFiles/ContactContributeData';
import ContributeForm from '../../components/ContactComponents/ContactContributeForm/ContributeForm';

function Contact() {
  return (
    <div>
    <ContactHero/>
    <div className={styles.Contactdata}>
      {
        ContactData.map((data,index) => (
          <ContactForm
           key={index}
           heading={data.heading}
           firstname={data.firstname}
           lastname={data.lastname}
           email={data.email}
           phone={data.phone}
           address={data.address}
           btntext={data.btntext}
          />
        ))
      }
    </div>
    <div className={styles.Contactdata}>
      {
        ContactContributeData.map((data,index) => (
          <ContributeForm
           key={index}
           heading={data.heading}
           donation={data.donation}
           para={data.para}
           Frequencyheading={data.Frequencyheading}
           frequencyBtnText1={data.frequencyBtnText1}
           frequencyBtnText2={data.frequencyBtnText2}
           Amount={data.Amount}
           amountBtnText1={data.amountBtnText1}
           amountBtnText2={data.amountBtnText2}
           amountBtnText3={data.amountBtnText3}
           amountBtnText4={data.amountBtnText4}
           amountBtnText5={data.amountBtnText5}
           Enteramount={data.Enteramount}
           Btntext={data.Btntext}
          />
        ))
      }
    </div>
    </div>
  )
}
export default Contact
