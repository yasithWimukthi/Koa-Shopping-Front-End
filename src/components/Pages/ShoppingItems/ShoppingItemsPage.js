import {useState} from "react";
import axios from "axios";

const ShoppingItemsPage = () => {

    const [item, setItem] = useState({
        name: "",
        price: "",
        quantity: "",
        description: ""
    });

    const [items, setItems] = useState([]);

    const onInputChange = event => {
        setItem({
            ...item,
            [event.target.name]: event.target.value
        });
    };

    const submitHandler = event => {
        event.preventDefault();

        axios.post('http://127.0.0.1:3000/items', item)
            .then(function (response) {
                console.log(response);
                setItem({
                    name: "",
                    price: "",
                    quantity: "",
                    description: ""
                });
            })
            .catch(function (error) {
                alert(error.message);
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
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-success">Edit</button> </td>
                </tr>
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
                                    <button type="submit" className="btn btn-primary" data-dismiss="modal">Add Item</button>
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