import axios from 'axios'
import React from 'react'
import FoodList from '../components/FoodList';

const products = ({foodlist}) => {
  return (
    <>
    <FoodList foodlist={foodlist}/>
    </>
  )
}



export const getServerSideProps = async () => {
    
    const res = await axios.get("http://localhost:3000/api/products");
    return {
        props: {
            foodlist: res.data
        },
    };
};

export default products