import React from 'react';
import { RxCross1 } from "react-icons/rx";
import styles from './LoginComp.module.css';

function LoginComp() {

  const redirectMainPage = () => {
    window.location.href = '/';
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Demo Mode</h1>
      <p className={styles.para}>To make this template yours, start editing it.</p>
      <button className={styles.button}
        onClick={redirectMainPage}
      >OK</button>
      <div className={styles.icondiv}>
        <RxCross1 className={styles.crossIcon}
          onClick={redirectMainPage}
        />
      </div>
    </div>
  )
}

export default LoginComp