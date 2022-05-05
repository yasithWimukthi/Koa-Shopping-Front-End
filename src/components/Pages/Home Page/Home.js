import ShoppingList from "./ShoppingList";
import {useEffect, useState} from "react";
import Navigation from "../../shared/Navigation/Navigation";

const Home = () => {

    const [items, setItems] = useState([]);

    useEffect(() => fetchShoppingItems(), []);

    /**
     * Fetch shopping items from the backend
     * @returns {Promise<void>}
     */
    const fetchShoppingItems = () => {
        fetch('http://localhost:3000/items/get-all')
            .then(response => response.json())
            .then(data => setItems([ ...data]));

        console.log(items);
    }

    return (
        <div className="container">
            <h2 className="my-5">Shopping Items</h2>
            <ShoppingList items={items} wishlist={false}/>
        </div>
    );
};

export default Home;

