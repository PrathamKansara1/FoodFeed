import axios from "axios";
import styles from "../styles/Menu.module.css";

const menu = ({ foodlist }) => {
  return (
    <>
      <div className={styles.menuContainer}>
        <div className={styles.menu}>
            <h1>Menu</h1>
          {foodlist.map((food) => (
            <div className={styles.items}>
              <div className={styles.itemName}>
                <h4>{food.title}</h4>
              </div>
              <div className={styles.itemPrice}>
                <h4>${food.prices[0]}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      foodlist: res.data,
    },
  };
};

export default menu;
