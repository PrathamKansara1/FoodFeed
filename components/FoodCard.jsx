import Image from "next/image";
import styles from "../styles/FoodCard.module.css";
import Link from "next/link";

const FoodCard = ({ food }) => {
  return (
    <Link href={`/product/${food._id}`} passHref>
      <div className={styles.container}>
        <Image src={food.img} alt="" width="500" height="500" />
        <h1 className={styles.title}>{food.title}</h1>
        <span className={styles.price}>${food.prices[0]}</span>
        <p className={styles.desc}>
          {food.desc.length > 20
            ? food.desc.substring(0, 20) + "..."
            : food.desc}
        </p>
      </div>
    </Link>
  );
};

export default FoodCard;
