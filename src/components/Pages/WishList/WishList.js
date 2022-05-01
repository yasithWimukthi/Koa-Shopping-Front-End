import ShoppingItem from "../Home Page/ShoppingItem";

const WishList = () => {
    return(
        <div className="container">
            <h2 className="my-5">WishList</h2>
            <div className="row">
                <ShoppingItem/>
                <ShoppingItem/>
                <ShoppingItem/>
                <ShoppingItem/>
            </div>
        </div>
    );
}

export default WishList;