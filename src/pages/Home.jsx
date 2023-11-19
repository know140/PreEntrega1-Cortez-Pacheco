import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemListConteinerComponent from '../components/itemListConteinerComponent/itemListConteinerComponent';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://dummyjson.com/products/?limit=10")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return <ItemListConteinerComponent products={products} />;
}

export default Home;
