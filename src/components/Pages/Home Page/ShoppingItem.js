const ShoppingItem = () => {
    return(
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <div className="clearfix mb-3"><span
                        className="float-start badge rounded-pill bg-success">12354.00€</span>
                    </div>
                    <h5 className="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem
                        eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste
                        optio laudantium sed aliquam sequi.</h5>
                    <div className="d-grid gap-2 my-4"><a href="#" className="btn btn-warning">Add to Wish List</a></div>
                    <div className="d-grid gap-2 my-4"><a href="#" className="btn btn-warning">Add to Cart</a></div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingItem;