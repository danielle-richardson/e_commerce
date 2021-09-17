import React, { useState, useEffect } from 'react';
import Products from './components/Products/Products';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { commerce } from './lib/commerce';

const App = () => {

  // Create a new state for products & cart - by deafault = to empty array, then fetch from api 'await commerce.action.action'. const fetch can be created it two diff ways below: 
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())

  }

  //add items to cart 
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  }

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);


  return (
    <Router>
      <div>
        <NavBar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
          <Products products={products} onAddToCart={handleAddToCart} />
        </Route>
        <Route exact path="/cart">
          <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
