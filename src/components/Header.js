import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CCart } from '../Context'
import './style.css'

const Header = () => {

    const { cart } = useContext(CCart)

    return (
        <div>
            <span className='header'>React Context API</span>
            <ul className='nav'>
                <li>
                    <Link to='/'>Home Page</Link>
                </li>
                <li>
                    <Link to='/cart'>Cart
                        ({cart.length})
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
