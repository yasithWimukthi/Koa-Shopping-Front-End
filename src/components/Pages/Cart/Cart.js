import CartItem from "./CartItem";
import {useEffect, useState} from "react";
import axios from "axios";
import {connect} from "react-redux";

const Cart = ({currentUser}) => {

    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // fetchCartItems();
        axios.get('http://localhost:3000/items/get-cart')
            .then(response => {
                console.log(response.data);
                setCartItems(response.data);
                const sum = cartItems.reduce((acc, item) => item.promotionPrice !== 0 ? (acc + item.promotionPrice) : (acc + item.price), 0);
                setTotal(response.data.reduce((acc, item) => item.promotionPrice !== 0 ? (acc + item.promotionPrice) : (acc + item.price), 0));
            })
            .catch(error => {
                console.log("error:" + error);
            });
    }, []);

    const handlePayment = () => {
        axios.post('http://localhost:3000/payment',{
            cartItems,
            total,
            name:currentUser.name
        })
            .then(response => {
                console.log(response.data);
                setCartItems([]);
                setTotal(0);
                alert("Payment Successful");
            })
            .catch(error => {
                console.log("error:" + error);
            })
    }

    return (
        <div className="container">
            <h1>Cart</h1>
            <div className="cart_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="cart_container">
                                <div
                                    className="cart_title">Cart<small> {`${cartItems.length} item in your cart`} </small>
                                </div>

                                {
                                    cartItems && cartItems.length>0 && cartItems.map(cartItem => {
                                        return (
                                            <div key={cartItem.id}>
                                                <CartItem cartItem={cartItem}/>
                                            </div>
                                        )
                                    })
                                }


                                <div className="order_total">
                                    <div className="order_total_content text-md-right">
                                        <div className="order_total_title">Order Total:</div>
                                        <div className="order_total_amount">${total}</div>
                                    </div>
                                </div>
                                <div className="cart_buttons">
                                    <button type="button" className="btn btn-warning" onClick={handlePayment}>Pay Now
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

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
})


export default connect(mapStateToProps) (Cart);