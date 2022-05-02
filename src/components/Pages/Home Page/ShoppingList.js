import ShoppingItem from "./ShoppingItem";

const ShoppingList = ({items}) => {
    return (
        <div className="container">
            <h2 className="my-5">Shopping Items</h2>
            <div className="row">
                {
                    items && items.length>0 && items.map(item => (
                        <ShoppingItem key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    );
}

export default ShoppingList;