import Navigation from "../../shared/Navigation/Navigation";
import ShoppingList from "./ShoppingList";
import Cart from "../Cart/Cart";
import ShoppingItemsPage from "../ShoppingItems/ShoppingItemsPage";

const Home = () => {
  return (
    <div>
        <Navigation />
      <ShoppingItemsPage/>
    </div>
  );
};

export default Home;

