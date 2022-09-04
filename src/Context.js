import { createContext, useState } from "react"

export const CCart = createContext(); //CCart is ContextCart

const Context = ({ children }) => {

    const [cart, setCart] = useState([])

    return (
        <CCart.Provider value={{ cart, setCart }}>{children}</CCart.Provider>
    )
}

export default Context
