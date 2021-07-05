import { Button } from '@material-ui/core'
import { CartItemType } from '../Types/Cart';

// style
import {  Wrapper } from './item.style';

// types


type Props = {
    item: CartItemType;
    handleAddToCart: (item:CartItemType) => void;
}


const Item : React.FC<Props>  = ({item, handleAddToCart}) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>
                {item.title}
            </h3>
            <p>
                {item.description}
            </p>
            <h3>
                ${item.price}
            </h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>
            Add
        </Button>
    </Wrapper>
)

export default Item