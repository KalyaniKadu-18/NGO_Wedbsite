import React, { useState } from 'react';
import styles from './ContributeForm.module.css';

function ContributeForm({
    heading, donation, para, Frequencyheading,
    frequencyBtnText1, frequencyBtnText2, Amount,
    amountBtnText1, amountBtnText2, amountBtnText3,
    amountBtnText4, amountBtnText5, Enteramount, Btntext
}) {

    const [selectedAmount, setSelectedAmount] = useState(amountBtnText1);
    const [customAmount, setCustomAmount] = useState("");

    const handleCustomAmountChange = (event) => {
        setCustomAmount(event.target.value);
        setSelectedAmount(event.target.value);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>{heading}</h1>
            <div className={styles.formContainer}>
                <h1 className={styles.donation}>{donation}</h1>
                <p className={styles.para}>{para}</p>

                <div className={styles.frequencyDiv}>
                    <h3 className={styles.frequencyheading}>{Frequencyheading}</h3>
                    <div className={styles.btnDiv}>
                        <button className={styles.frequencyBtn1}>{frequencyBtnText1}</button>
                        <button className={styles.frequencyBtn2}>{frequencyBtnText2}</button>
                    </div>
                </div>

                <div className={styles.amountDiv}>
                    <h3 className={styles.amountheading}>{Amount}</h3>
                    <div className={styles.amountBtnDiv}>
                        {[amountBtnText1, amountBtnText2, amountBtnText3, amountBtnText4, amountBtnText5].map((btn, index) => (
                            <button
                                key={index}
                                className={`${styles.amountBtn} ${selectedAmount === btn ? styles.active : ""}`}
                                onClick={() => setSelectedAmount(btn)}
                            >
                                {btn}
                            </button>
                        ))}
                    </div>
                    <input
                        type="number"
                        className={styles.Enteramount}
                        placeholder={Enteramount}
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                    />
                </div>
                <button className={styles.donateBtn}>{`DONATE ${selectedAmount}`}</button>
            </div>
        </div>
    );
}

export default ContributeForm;
