import faker from 'faker'
import { useState } from 'react';
import SingleProduct from './SingleProduct'
import './style.css'

faker.seed(100);

const Home = () => {

    const productsArray = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
    }))


    const [products] = useState(productsArray)

    return (<div className="productContainer">
        {products.map((prod) => (
            <SingleProduct key={prod.id} prod={prod} />
        ))}
    </div>
    )
}

export default Home
