
import { useEffect } from 'react';
import axios from "axios";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarcomponent/NavBarComponent';
import './index.css'
import ItemListConteinerComponent from './components/itemListConteinerComponent/itemListConteinerComponent';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);



  return (
    <div>
      <NavBarComponent />
      <ItemListConteinerComponent products={products} />
    </div>
  );
}

export default App;