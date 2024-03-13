import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Botttle";
import './Bottles.css'

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    const handleAddCart = bottle =>{
       const newCart = [...cart, bottle];
       setCart(newCart);
    }

    return (
        <div>
            <h3>Bottles Available: {bottles.length}</h3>

        <h3>Cart: {cart.length}</h3>

            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddCart={handleAddCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;