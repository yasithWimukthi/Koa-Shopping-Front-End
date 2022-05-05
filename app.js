import react from 'react';
import Register from "./src/components/Register/Register";
import Home from "./src/components/Pages/Home Page/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navigation from "./src/components/shared/Navigation/Navigation";
import WishList from "./src/components/Pages/WishList/WishList";
import Cart from "./src/components/Pages/Cart/Cart";
import ShoppingItemsPage from "./src/components/Pages/ShoppingItems/ShoppingItemsPage";
import Promotion from "./src/components/Pages/Promotion/Promotion";
import CustomersPage from "./src/components/Pages/Customers/Customers";


function App  () {
    return (
    <div>
        <Router>
            <Navigation/>
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/wishlist" element={<WishList />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/shopping-items" element={<ShoppingItemsPage />} />
                    <Route exact path="/promotion" element={<Promotion />} />
                    <Route exact path="/customers" element={<CustomersPage />} />
                </Routes>
        </Router>
    </div>
  );
};

export default App;