import ShoppingList from "./ShoppingList";
import {useEffect, useState} from "react";

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
        <div>
            <ShoppingList items={items}/>
        </div>
    );
};

export default Home;

