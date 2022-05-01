import ShoppingItem from "./ShoppingItem";

const ShoppingList = () => {
    return (
        <div className="container">
            <h2 className="my-5">Shopping Items</h2>
            <div className="row">
                <ShoppingItem/>
                <ShoppingItem/>
                <ShoppingItem/>
                <ShoppingItem/>
            </div>
        </div>
    );
}

export default ShoppingList;