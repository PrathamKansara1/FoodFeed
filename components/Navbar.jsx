import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.jpg" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>+91 985-985-9859</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Homepage</li>
          </Link>
          <Link href="/products" passHref>
            <li className={styles.listItem}>Products</li>
          </Link>
          <Link href="/menu" passHref>
            <li className={styles.listItem}>Menu</li>
          </Link>
          <div className="logoimg">
            <Image src="/img/logo.png" alt="" width="200px" height="69px" />
          </div>
          <Link href="/events" passHref>
            <li className={styles.listItem}>Events</li>
          </Link>
          <Link href="/admin" passHref>
            <li className={styles.listItem}>Admin</li>
          </Link>
          <Link href="/contact" passHref>
            <li className={styles.listItem}>Contact</li>
          </Link>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
