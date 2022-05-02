import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        type: 'customer',
    });

    const onInputChange = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const submitHandler = event => {
        event.preventDefault();
        if (user.password !== user.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        axios.post('http://127.0.0.1:3000/register', user)
            .then(function (response) {
                console.log(response);
                navigate("/home", { replace: true });
            })
            .catch(function (error) {
                alert(error.message);
            });
    }

    return (
        <div className="container">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-12">
                            <div className="text-black" >
                                <div className=" p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>

                                            <form className="mx-1 mx-md-4" onSubmit={submitHandler}>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            className="form-control"
                                                            placeholder="Name"
                                                            name="name"
                                                            value={user.name}
                                                            onChange={onInputChange}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            className="form-control"
                                                            placeholder="Email"
                                                            name="email"
                                                            value={user.email}
                                                            onChange={onInputChange}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="password"
                                                            id="password"
                                                            className="form-control"
                                                            placeholder="Password"
                                                            name="password"
                                                            value={user.password}
                                                            onChange={onInputChange}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="password"
                                                            id="confirmPassword"
                                                            className="form-control"
                                                            placeholder="Confirm Password"
                                                            name="confirmPassword"
                                                            value={user.confirmPassword}
                                                            onChange={onInputChange}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-between align-items-center mb-5" style={{width:'20vw'}}>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="type"
                                                            id="type-radio-1"
                                                            value="customer"
                                                            onChange={onInputChange}
                                                            checked
                                                        />
                                                            <label className="form-check-label"
                                                                   htmlFor="type-radio-1">
                                                                Customer
                                                            </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="type"
                                                            id="type-radio-2"
                                                            value="trader"
                                                            onChange={onInputChange}
                                                        />
                                                            <label className="form-check-label"
                                                                   htmlFor="type-radio-2">
                                                                Trader
                                                            </label>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-lg">Sign Up
                                                    </button>
                                                </div>
                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Register;