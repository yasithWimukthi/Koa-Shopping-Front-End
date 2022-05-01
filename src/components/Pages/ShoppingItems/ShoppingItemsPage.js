const ShoppingItemsPage = () => {
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
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Item Name</label>
                                    <input type="text" className="form-control" id="name" name="name"
                                           aria-describedby="emailHelp" placeholder="Enter Item Name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="quantity">Quantity</label>
                                    <input type="number" className="form-control" id="quantity"
                                           placeholder="Quantity" name="quantity" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea type="number" className="form-control" id="description"
                                           placeholder="Description" name="description" ></textarea>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Add Item</button>
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