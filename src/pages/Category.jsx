

import React, { useEffect, useState } from "react";
import ItemListConteinerComponent from '../components/itemListConteinerComponent/itemListConteinerComponent'
import axios from 'axios';
import { useParams } from "react-router-dom";




const Category = () => {
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams ();
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






  return <ItemListConteinerComponent products={products}/>;
  
}

export default Category;