import {useEffect, useState} from "react";
import axios from "axios";
import {postData} from "../../../helper";

const ShoppingItemsPage = ({}) => {

    const [item, setItem] = useState({
        name: "",
        price: "",
        quantity: "",
        description: "",
        promotionPrice: 0,
    });

    const [selectedItem, setSelectedItem] = useState({
        name: "",
        price: "",
        quantity: "",
        description: "",
    })

    const [items, setItems] = useState([]);

    useEffect(() => fetchShoppingItems(), []);

    /**
     * Fetch shopping items from the backend
     * @returns {Promise<void>}
     */
    const fetchShoppingItems = () => {
        fetch('http://localhost:3000/items/get-all')
            .then(response => response.json())
            .then(data => setItems([ ...data]));
        console.log(items);
    }

    /**
     * handle the change of the input fields
     */
    const onInputChange = event => {
        setItem({
            ...item,
            [event.target.name]: event.target.value
        });
    };

    /**
     * handle the change of the input fields
     */
    const selectedItemChangeHandler = event => {
        setSelectedItem({
            ...selectedItem,
            [event.target.name]: event.target.value
        });
    };

    /**
     * submit the add item form
     */
    const submitHandler = event => {
        event.preventDefault();

        axios.post('http://localhost:3000/items/', item)
            .then(function (response) {
                console.log('success', response);
                setItem({
                    name: "",
                    price: "",
                    quantity: "",
                    description: ""
                });
                fetchShoppingItems();
            })
            .catch(function (error) {
                alert(error.message);
                console.log('error', error);
            });

    }

    /**
     * submit the update item form
     */
    const updateItemHandler = event => {
        event.preventDefault();

        axios.put(`http://localhost:3000/items/edit/${selectedItem.id}`, selectedItem)
            .then(function (response) {
                console.log('update success', response);
                setSelectedItem({
                    name: "",
                    price: "",
                    quantity: "",
                    description: ""
                });
                console.log('edit '+response.data)
                fetchShoppingItems();
            })
            .catch(function (error) {
                alert(error.message);
                console.log('error', error);
            });
    }

    return (
        <div className="container">
            <h1 className="mx-5 my-3">Shopping Items</h1>
            <div className="row">
                <button className="btn btn-primary my-3 " style={{width: '100px'}} data-toggle="modal" data-target="#exampleModal">Add Item</button>
            </div>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Promotion Price</th>
                    <th scope="col">Edit</th>
                </tr>
                </thead>
                <tbody>
                {
                    items && items.length>0 && items.map((shopItem, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{shopItem.name}</td>
                                <td>{shopItem.description}</td>
                                <td>{shopItem.price}</td>
                                <td>{shopItem.quantity}</td>
                                <td>{shopItem.promotionPrice ? shopItem.promotionPrice : 0}</td>
                                <td>
                                    <button
                                        className="btn btn-success"
                                        data-toggle="modal"
                                        data-target="#updateItemModal"
                                        onClick={() => setSelectedItem(shopItem)}
                                    >Edit</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>


            {/*add item modal*/}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Item</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={submitHandler}>
                                <div className="form-group">
                                    <label htmlFor="name">Item Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={item.name}
                                        onChange={onInputChange}
                                        placeholder="Enter Item Name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="quantity">Quantity</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="quantity"
                                        placeholder="Quantity"
                                        name="quantity"
                                        value={item.quantity}
                                        onChange={onInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price">Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="price"
                                        placeholder="Price"
                                        name="price"
                                        value={item.price}
                                        onChange={onInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        type="number"
                                        className="form-control"
                                        id="description"
                                        placeholder="Description"
                                        name="description"
                                        value={item.description}
                                        onChange={onInputChange}
                                    ></textarea>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" >Add Item</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/*edit item modal*/}
            <div className="modal fade" id="updateItemModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Item</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={updateItemHandler}>
                                <div className="form-group">
                                    <label htmlFor="name">Item Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={selectedItem.name}
                                        onChange={selectedItemChangeHandler}
                                        placeholder="Enter Item Name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="quantity">Quantity</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="quantity"
                                        placeholder="Quantity"
                                        name="quantity"
                                        value={selectedItem.quantity}
                                        onChange={selectedItemChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price">Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="price"
                                        placeholder="Price"
                                        name="price"
                                        value={selectedItem.price}
                                        onChange={selectedItemChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price">Promotion Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="price"
                                        placeholder="Price"
                                        name="promotionPrice"
                                        value={selectedItem.promotionPrice}
                                        onChange={selectedItemChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        type="number"
                                        className="form-control"
                                        id="description"
                                        placeholder="Description"
                                        name="description"
                                        value={selectedItem.description}
                                        onChange={selectedItemChangeHandler}
                                    ></textarea>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-success" >Update Item</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ShoppingItemsPage;