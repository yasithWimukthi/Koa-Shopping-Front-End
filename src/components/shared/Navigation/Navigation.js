import {Link} from "react-router-dom";
import {connect} from 'react-redux';

const Navigation = ({currentUser}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Koa Shopping</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                    {
                        currentUser ? (
                            <>
                                <li className="nav-item active">
                                    <Link to="/home" className="mx-2" style={{textDecoration: 'none', color: '#000'}}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/wishlist" className="mx-2"
                                          style={{textDecoration: 'none', color: '#000'}}>Wishlist</Link>
                                </li>
                                <li className="nav-item active">
                                    <a><Link to="/cart" className="mx-2" style={{textDecoration: 'none', color: '#000'}}>Cart</Link></a>
                                </li>
                            </>
                        ): null
                    }

                    {
                        currentUser && currentUser.type === 'trader' ?
                            (
                                <>
                                    <li className="nav-item active">
                                        <a><Link to="/shopping-items" className="mx-2"
                                                 style={{textDecoration: 'none', color: '#000'}}>Items</Link></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a><Link to="/promotion" className="mx-2"
                                                 style={{textDecoration: 'none', color: '#000'}}>Promotions</Link></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a><Link to="/customers" className="mx-2"
                                                 style={{textDecoration: 'none', color: '#000'}}>Customers</Link></a>
                                    </li>
                                </>
                            ) : null
                    }
                </ul>
            </div>
        </nav>
    );
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(Navigation);