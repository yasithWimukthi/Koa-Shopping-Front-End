const ShoppingItem = ({item}) => {
    return(
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <div className="clearfix mb-3"><span
                        className="float-start badge rounded-pill bg-success">${item.promotionPrice > 0 ? item.promotionPrice :  item.price}</span>
                    </div>
                    <h5 className="card-title" style={{height:'100px'}}>{item.description}</h5>
                    <div className="d-grid gap-2 my-4"><a href="#" className="btn btn-warning">Add to Wish List</a></div>
                    <div className="d-grid gap-2 my-4"><a href="#" className="btn btn-warning">Add to Cart</a></div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingItem;