import CartItem from "./CartItem";

const Cart = () => {
    return (
        <div className="container">
            <h1>Cart</h1>
            <div className="cart_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="cart_container">
                                <div className="cart_title">Cart<small> (1 item in your cart) </small></div>

                                <CartItem />
                                <CartItem />
                                <CartItem />

                                <div className="order_total">
                                    <div className="order_total_content text-md-right">
                                        <div className="order_total_title">Order Total:</div>
                                        <div className="order_total_amount">₹22000</div>
                                    </div>
                                </div>
                                <div className="cart_buttons">
                                    <button type="button" className="btn btn-warning">Pay Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}

export default Cart;