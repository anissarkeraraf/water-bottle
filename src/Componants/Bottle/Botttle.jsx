import './Bottle.css'

const Bottle = ({bottle, handleAddCart}) => {
    const {name, img, price, quantity, ratings, ratingsCount, seller, shipping, stock
    }= bottle
    return (
        <div className="bottle">
            <h3>Bottle: {name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            <p>Ratings: {ratings}</p>
            <p>Ratings Count: {ratingsCount}</p>
            <p>Seller: {seller}</p>
            <p>Shipping: {shipping}</p>
            <p>Stock: {stock}</p>
            <button onClick={() => handleAddCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;