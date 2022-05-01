import react from 'react';
import Register from "./src/components/Register/Register";
import Home from "./src/components/Pages/Home Page/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navigation from "./src/components/shared/Navigation/Navigation";
import WishList from "./src/components/Pages/WishList/WishList";
import Cart from "./src/components/Pages/Cart/Cart";
import ShoppingItemsPage from "./src/components/Pages/ShoppingItems/ShoppingItemsPage";
import Promotion from "./src/components/Pages/Promotion/Promotion";


const App = () => {
    return (
    <div>
        <Router>
            <div>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/wishlist">
                        <WishList />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/shopping-items">
                        <ShoppingItemsPage />
                    </Route>
                    <Route path="/promotions">
                        <Promotion />
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
  );
};

export default App;