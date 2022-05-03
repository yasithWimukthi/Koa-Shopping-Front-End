import {useEffect, useState} from "react";

const PromotionPage = () => {

    const [items, setItems] = useState([]);
    const [promotion, setPromotion] = useState({
        id: '',
        promotion:0
    });
    useEffect(() => fetchShoppingItems(), []);

    /**
     * Fetch shopping items from the backend
     * @returns {Promise<void>}
     */
    const fetchShoppingItems = () => {
        fetch('http://localhost:3000/items/get-all')
            .then(response => response.json())
            .then(data => setItems([...data]));
    }

    const handlePromotionChange = (event) => {
        setPromotion({
            ...promotion,
            [event.target.name]: event.target.value
        });
    }

    const handlePromotionSubmit = (event) => {
        event.preventDefault();
        console.log(promotion);
    }

    return (
        <div className="container">
            <h1 className="mx-5 my-3">Promotions</h1>
            <div className="row">
                <button className="btn btn-primary my-3 " style={{width: '200px'}} data-toggle="modal"
                        data-target="#exampleModal">Add Promotion
                </button>
            </div>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Promotion</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                </tr>
                </tbody>
            </table>


            {/*add promotion modal*/}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Promotion</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handlePromotionSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Item Name</label>
                                    <select className="form-control" id="name" name="id" onChange={handlePromotionChange}>
                                        {items.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="promotion">Promotion</label>
                                    <input type="number" className="form-control" id="promotion"
                                           placeholder="Promotion" name="promotion" onChange={handlePromotionChange}/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                                    </button>
                                    <button type="submit" className="btn btn-primary">Add Item</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromotionPage;