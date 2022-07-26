import Head from "next/head";
import Featured from "../components/Featured";
import styles from "../styles/Home.module.css";
import FoodList from "../components/FoodList";
import axios from "axios";
import AddButton from "../components/AddButton.jsx";
import Add from "../components/Add.jsx";
import { useEffect, useState } from "react";

export default function Home({ foodlist,admin }) {
  const [close, setClose] = useState(true);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>FoodFeed --Delivery At Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <FoodList foodlist={foodlist} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx,req) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      foodlist: res.data,
      admin,
    },
  };
};
