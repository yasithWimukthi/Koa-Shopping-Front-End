import Navigation from "../../shared/Navigation/Navigation";
import ShoppingList from "./ShoppingList";
import Cart from "../Cart/Cart";
import ShoppingItemsPage from "../ShoppingItems/ShoppingItemsPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import WishList from "../WishList/WishList";
import Promotion from "../Promotion/Promotion";

const Home = () => {
    return (
        <div>
            <Navigation/>
            <ShoppingList/>
        </div>
    );
};

export default Home;

