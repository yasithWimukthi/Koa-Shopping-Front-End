import ShoppingItem from "../Home Page/ShoppingItem";
import {useEffect, useState} from "react";
import axios from "axios";
import ShoppingList from "../Home Page/ShoppingList";

const WishList = () => {

    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/wishlist/get-all")
            .then(response => {
                setWishList(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    return(
        <div className="container">
            <h2 className="my-5">WishList</h2>
            <div className="row">
                <ShoppingList items={wishList} wishlist={true}/>
            </div>
        </div>
    );
}

export default WishList;