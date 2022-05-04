import {useEffect, useState} from "react";
import axios from "axios";

const CustomersPage = () => {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/register/get/customers")
            .then(res => {
                setCustomers(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    },[]);
    return(
        <div className="container">
            <h1 className="mx-5 my-3">Customers</h1>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Cutomer Name Name</th>
                    <th scope="col">Email</th>
                </tr>
                </thead>
                <tbody>
                {
                    customers.map((customer,index) => {
                        return(
                            customer.type === 'customer' ? (
                                <tr key={customer.id}>
                                    <th scope="col">{index}</th>
                                    <th scope="col">{customer.name}</th>
                                    <th scope="col">{customer.email}</th>
                                </tr>
                            ) : null
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default CustomersPage;