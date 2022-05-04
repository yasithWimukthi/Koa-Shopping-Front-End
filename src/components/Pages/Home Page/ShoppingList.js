import ShoppingItem from "./ShoppingItem";

const ShoppingList = ({items,wishlist}) => {
    return (
        <div className="container">
            <div className="row">
                {
                    items && items.length>0 && items.map(item => (
                        <ShoppingItem key={item.id} item={item} wishlist={wishlist}/>
                    ))
                }
            </div>
        </div>
    );
}

export default ShoppingList;