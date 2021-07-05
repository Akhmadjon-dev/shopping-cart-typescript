import { Badge, LinearProgress } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import React, {useState,} from 'react';
import { useQueries, useQuery } from 'react-query';
import Item from './Item/Item';
// custom styles
import { StyledButton, Wrapper } from './app.style';


// types
import { CartItemType } from './Types/Cart';


// util functions

const getProducts = async (): Promise<CartItemType[]> => await (await fetch('https://fakestoreapi.com/products')).json()





function App() {
  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as CartItemType[])
  console.log(data,'data')

  // handlers 

  const getTotalItems = (items: CartItemType[]) => (
    items.reduce((sum:number, item) => sum+item.amount, 0)
  )

  const handleAddToCart = (item: CartItemType) => null;

  const handleRemoveFromCart = () => null;

  if(isLoading) return <LinearProgress/>
  if(error) return <div>Something went wrong...</div>

  return (
    <Wrapper>
      <Drawer anchor='right' open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        Cart goes here
      </Drawer>
      <StyledButton onClick={() => setIsCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCart/>
        </Badge>
      </StyledButton>
      <Grid container spacing={3} >
        {
          data?.map((item, index) => (
            <Grid item key={item.id}  xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart}/>
            </Grid>
          ))
        }

      </Grid>
    </Wrapper>
  );
}

export default App;
