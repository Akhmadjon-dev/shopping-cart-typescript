import { Badge, LinearProgress } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import React, {useState,} from 'react';
import { useQueries, useQuery } from 'react-query';

// custom styles
import { Wrapper } from './app.style';


// types
import { CartItemType } from './Types/Cart';


// util functions

const getProducts = async (): Promise<CartItemType[]> => await (await fetch('https://fakestoreapi.com/products')).json()





function App() {
  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts)

  console.log(data,'data')

  // handlers 

  const getTotalItems = () => null;

  const handleAddToCart = (item: CartItemType) => null;

  const handleRemoveFromCart = () => null;

  if(isLoading) return <LinearProgress/>
  if(error) return <div>Something went wrong...</div>

  return (
    <div className="app">
        app
    </div>
  );
}

export default App;
