import styles from "../styles/Contact.module.css";
import React from 'react'

const contact = () => {
  return (
    <div className={styles.contactCntainer}>
        <h1>Contact Us</h1>
        <div className={styles.contactus}>
            <h2>Mobile : </h2>
            <h3>+91 985-958-5985</h3>
            <h3>+91 985-985-9859</h3>
            <br />
            <h2>Email :</h2>
            <h3>foodfeed985@feed.com</h3>
        </div>
    </div>
  )
}

export default contact