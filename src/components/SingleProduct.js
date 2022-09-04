import { useContext } from 'react';
import { CCart } from '../Context';
import './style.css'

const SingleProduct = ({ prod }) => {

    const { cart, setCart } = useContext(CCart);

    return (
        <div className='products'>
            <img src={prod.image} alt={prod.name} />
            <div className='productDesc'>
                <span style={{ fontweight: 700 }}>{prod.name}</span>
                <span>₹ {prod.price.substring(0, 3)}</span>
            </div>

            <button className='add' onClick={() => {
                setCart([...cart, prod]);
            }}
            >Add to Cart</button>

            <button className='remove' onClick={() => {
                setCart(cart.filter((c) => c.id !== prod.id));
            }}
            >Remove from Cart</button>

        </div>
    )
}


export default SingleProduct
