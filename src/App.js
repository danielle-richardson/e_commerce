import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar, Products, Cart, Checkout, Home } from './components';
import { commerce } from './lib/commerce';

const App = () => {

   // Create a new state, ex: products & cart - by deafault = to empty array, then fetch from api 'await commerce.action.action'. const fetch can be created it two diff ways below: 
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  //async arrow function similar to .then/.catch 
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    //populates products 
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())

  }

  //add items to cart, pass params over to api, setCart, add prop (onAddToCart={handleAddToCart} to Product Component below and then in Product.jsx/Products.jsx) 
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

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  // This hook fetches products immediately on the application load. Has dependecy array set to empty [] (like componentDidMount) it only runs once 
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);


  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <NavBar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle}/>
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
          </Route>
          <Route path="/checkout" exact>
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
