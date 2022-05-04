import axios from "axios";

const ShoppingItem = ({item,wishlist}) => {

    const addToCart = selectedItem => {
        selectedItem = {...selectedItem,quantity: 1};
        console.log(selectedItem);
        axios.post('http://localhost:3000/cart/', selectedItem)
            .then(function (response) {
                console.log('success', response.data);
                alert('Item added to cart');

            })
            .catch(function (error) {
                alert(error.message);
                console.log('error', error);
            });
    }

    const addToWishlist = selectedItem => {
        selectedItem = {...selectedItem,quantity: 1};
        console.log(selectedItem);
        axios.post('http://localhost:3000/wishlist/', selectedItem)
            .then(function (response) {
                console.log('success', response.data);
                alert('Item added to wishlist');
            })
            .catch(function (error) {
                alert(error.message);
                console.log('error', error);
            });
    }

    return(

        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <div className="clearfix mb-3"><span
                        className="float-start badge rounded-pill bg-success">${item.promotionPrice > 0 ? item.promotionPrice :  item.price}</span>
                    </div>
                    <h5 className="card-title" style={{height:'100px'}}>{item.description}</h5>
                    {
                        wishlist === true ? <div className="d-grid gap-2 my-4"><a href="#" className="btn btn-warning" onClick={() => addToWishlist(item)}>Add to Wish List</a></div> : null
                    }
                    <div className="d-grid gap-2 my-4"><button className="btn btn-warning" onClick={() =>addToCart(item) }>Add to Cart</button></div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingItem;