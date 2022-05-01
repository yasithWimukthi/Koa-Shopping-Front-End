
const Navigation = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Koa Shopping</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/wishlist">Wishlist</Link>
                    </li>
                    {/*<li className="nav-item">*/}
                    {/*    <a className="nav-link" href="#">Cart</a>*/}
                    {/*    <Link to="/about">About</Link>*/}
                    {/*</li>*/}
                    {/*<li className="nav-item">*/}
                    {/*    <a className="nav-link" href="#">Items</a>*/}
                    {/*    <Link to="/about">About</Link>*/}
                    {/*</li>*/}
                    {/*<li className="nav-item">*/}
                    {/*    <a className="nav-link" href="#">Promotions</a>*/}
                    {/*    <Link to="/about">About</Link>*/}
                    {/*</li>*/}
                    {/*<li className="nav-item">*/}
                    {/*    <a className="nav-link" href="#">Customers</a>*/}
                    {/*    <Link to="/about">About</Link>*/}
                    {/*</li>*/}
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;