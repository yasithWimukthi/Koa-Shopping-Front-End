const CartItem = ({cartItem}) => {
    return(
        <div className="cart_items">
            <ul className="cart_list" style={{listStyle:'none'}}>
                <li className="cart_item clearfix">
                    <div
                        className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                        <div className="cart_item_name cart_info_col">
                            <div className="cart_item_title">Name</div>
                            <div className="cart_item_text">{cartItem.name}</div>
                        </div>
                        <div className="cart_item_quantity cart_info_col">
                            <div className="cart_item_title">Quantity</div>
                            <div className="cart_item_text">{cartItem.quantity}</div>
                        </div>
                        <div className="cart_item_price cart_info_col">
                            <div className="cart_item_title">Price</div>
                            <div className="cart_item_text">${cartItem.price}</div>
                        </div>
                        <div className="cart_item_price cart_info_col">
                            <div className="cart_item_title">Promotion Price</div>
                            <div className="cart_item_text">{cartItem.promotionPrice !== 0 ? `$ ${cartItem.promotionPrice}` : 'Unavailable'}</div>
                        </div>
                        <div className="cart_item_total cart_info_col">
                            <div className="cart_item_title">Total</div>
                            <div className="cart_item_text">$ {cartItem.promotionPrice !== 0 ? ((cartItem.quantity) * (cartItem.promotionPrice)) : ((cartItem.quantity) * (cartItem.price))}</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default CartItem;