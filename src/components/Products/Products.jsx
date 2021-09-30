import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
  {/* This hook allows access to our styles*/}
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {/* in each product we want to return something specific - Inside of map we have a key. Everytime we loop through something in jsx, need to have an id*/}
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            {/* Inside our grid item we put our single Product component. In product prop we are sending sending each product one by one */}
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;