import React, { useState } from "react";
import styles from "./ContactForm.module.css";

function ContactForm({ heading, firstname, lastname, email, phone, address, btntext }) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleUserChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  // ✅ Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation Check
    if (!formData.firstname || !formData.lastname || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Form Submitted Successfully:", formData);
    alert("Application submitted successfully!");

    // Reset form
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{heading}</h1>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="firstname">{firstname} </label>
              <input 
                type="text" 
                id="firstname" 
                name="firstname" 
                value={formData.firstname} 
                onChange={handleUserChange} 
                required 
              />
            </div>

            {/* Last Name */}
            <div className={styles.inputGroup}>
              <label htmlFor="lastname">{lastname} </label>
              <input 
                type="text" 
                id="lastname" 
                name="lastname" 
                value={formData.lastname} 
                onChange={handleUserChange} 
                required 
              />
            </div>
          </div>

          <div className={styles.row}>
            {/* Email */}
            <div className={styles.inputGroup}>
              <label htmlFor="email">{email} </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleUserChange} 
                required 
              />
            </div>

            {/* Phone */}
            <div className={styles.inputGroup}>
              <label htmlFor="phone">{phone}</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleUserChange} 
              />
            </div>
          </div>

          {/* Address */}
          <div className={styles.inputGroup}>
            <label htmlFor="address">{address}</label>
            <input 
              type="text" 
              id="address" 
              name="address" 
              value={formData.address} 
              onChange={handleUserChange} 
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className={styles.button}>{btntext}</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
