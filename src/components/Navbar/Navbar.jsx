import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import { FaCircle,FaEquals } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Navbar() {
  return (
    <nav className={styles.navLink_container}>
      <ul className={styles.u_list}>
        <div className={styles.navbar_content}>
          <div className={styles.navbar_info}>
            <div className={styles.iconDiv}>
            <FaCircle className={styles.icon}/>
            <FaEquals className={styles.icon}/>
            <ImCross className={styles.icon}/>
            </div>
            <div className={styles.navbar_headings}>
            <h3 className={styles.navbar_heading}>Choose Equality</h3>
            <p>Education for All</p>
            </div>
          </div>
        <li>
          <NavLink to="/" className={styles.about_navlink}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/Projects' className={styles.project_navlink}>Projects</NavLink>
        </li>
        <li>
          <NavLink to="/events" className={styles.event_navlink}>
            Event
          </NavLink>
        </li>
        <li>
          <NavLink to='/team' className={styles.team_navlink}>Team</NavLink>
        </li>
        <li>
          <NavLink to='/news' className={styles.news_navlink}>News</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={styles.contact_navlink}>
             Contact
           </NavLink>
        </li>
        <li>
          <NavLink to='/login' className={styles.login_navlink}>
          <div className={styles.user_login}>
            <FaCircleUser className={styles.user_icon}/>
          Login </div></NavLink>
        </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;