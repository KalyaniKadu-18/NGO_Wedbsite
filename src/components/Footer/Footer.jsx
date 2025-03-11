import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaCircle,FaEquals } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const contactInfo = [
    "I'm a paragraph. Click here to add your own text and edit me.",
    "Registered Charity: 12345-67",
];

const footerLinks = [
    { text: "500 Terry Francine Street San Francisco, CA 94158" },
    { text: "Phone: 1-800-000-0000" },
    { text: "Terms & Conditions" },
    { text: "Privacy Policy" },
    { text: "Refund Policy" }
];

const socialIcons = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaYoutube />, link: "https://youtube.com" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com" }
];

function Footer() {
    return (
        <div className={styles.main_container}>
            <div className={styles.footer_first_div}>
                <div className={styles.footer_first_div_info}>
                    <h2 className={styles.footer_heading}>CONTACT US</h2>
                    {contactInfo.map((info, index) => (
                        <p key={index}>{info}</p>
                    ))}
                    <hr className={styles.break_tag} />
                    <h3 className={styles.email_text}>info@mysite.com</h3>

                    <div className={styles.footer_icon_div}>
                        {socialIcons.map((item, index) => (
                            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className={styles.footer_second_div_info}>
                    {footerLinks.map((item, index) => (
                        <p key={index}>{item.text}</p>
                    ))}
                </div>

            <div className={styles.footer_second_div}>
                <h1>BE THE FIRST TO KNOW</h1>
                <h2 className={styles.footer_signup}>Sign up to our newsletter to stay informed</h2>
                <input type='email' className={styles.input_field} text="Email"  placeholder='Enter your Email' />
                <p>Yes, subscribe me to your newsletter.*</p>
                <h3 className={styles.subscribe_button}>Subscribe Now</h3>
            </div>
            </div>

            
            <div className={styles.last_text}>
                <div className={styles.iconDiv}>
                            <FaCircle className={styles.icon}/>
                            <FaEquals className={styles.icon}/>
                            <ImCross className={styles.icon}/>
                            </div>
           <p> © 2035 ChoosEquality. Powered and secured by Wix</p>
            </div>
        </div>
    );
}

export default Footer;
