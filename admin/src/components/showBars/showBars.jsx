import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'



const showBars = ({ children }) => {

    const location = useLocation();

    const [showBars, setShowBars] = useState(false)

    useEffect(() => {
        const getProduct = async () => {
            if (location.pathname === "/login") {
                setShowBars(flase)
            } else {
                setShowBars(true)
            }
        };
        getProduct();
    }, [location]);


    return (
        <div>{showBars && children}</div>
    )
}

export default showBars