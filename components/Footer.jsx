import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Oh Yeahh ! We Have The Best Food Service And Delivery At Your Door .
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            189 , B.M Road
            <br /> Mumbai, 400004
            <br /> +91 958-859-5898
          </p>
          <p className={styles.text}>
            23 , S.P Road
            <br /> Ahmedabad, 380004
            <br /> +91 859-998-5885
          </p>
          <p className={styles.text}>
            16 , G.M Nagar
            <br /> Delhi, 110005
            <br /> +91 859-895-9859
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 A.M – 10:00 P.M
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 9:00 A.M - 11:30 P.M
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
