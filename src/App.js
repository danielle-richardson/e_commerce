import React, {useState, useEffect} from 'react';
import Products from './components/Products/Products';
import NavBar from './components/NavBar/NavBar';
import {commerce } from './lib/commerce';

function App() {

  // fetching products by creating a new state. 
  const [products, setProducts] = useState([]);  
  
  const fetchProducts = async () => {
    const data = await commerce.products.list();

    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []); 

  return (
    <div>
        <NavBar /> 
        <Products products={products}/> 
    </div>
  );
}

export default App;
