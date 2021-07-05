import CartItem from './CarItem/CartItem';
import {Wrapper} from './Cart.style';
import {CartItemType} from '../Types/Cart';


type Props = {
    cartItems: CartItemType[];
    addToCart: (item : CartItemType) => void;
    removeFromCart: (id: number) => void;
};

const Cart: React.FC <Props> = ({cartItems, addToCart, removeFromCart}) => <div>div</div>


export default Cart;