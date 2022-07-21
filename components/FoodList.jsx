import styles from "../styles/FoodList.module.css";
import FoodCard from "./FoodCard.jsx";

const FoodList = ({ foodlist }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST FOOD IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {foodlist.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
