import React, {useState, useEffect} from 'react';
import Products from './components/Products/Products';
import NavBar from './components/NavBar/NavBar';
import {commerce } from './lib/commerce';

const App = () => {

  // Create a new state for products & cart - by deafault = to empty array, then fetch from api 'await commerce.action.action'. const fetch can be created it two diff ways below: 
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  
  const fetchProducts = async () => {
    const {data} = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async ()=> {
    setCart(await commerce.cart.retrieve())

  }

  //add items to cart 
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart); 
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []); 

  console.log(cart)

  return (
    <div>
        <NavBar /> 
        <Products products={products} onAddToCart={handleAddToCart}/> 
    </div>
  );
}

export default App;
