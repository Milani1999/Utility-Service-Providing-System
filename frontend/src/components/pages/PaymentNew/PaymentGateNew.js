import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom';
import './Payment.css'

function PaymentGate () {
    const [nameU, setNameU] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
 
    useEffect(() => {
        refreshToken();
        getUsers();
    }, []);
 
    const axiosJWT = axios.create();
    const history = useHistory();
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setNameU(decoded.name);
            setExpire(decoded.exp);
            if(decoded.userType==="Customer")
            history.push("/paymentGate");
            else
            history.push("/login");
        } catch (error) {
            if (error.response) {
                history.push("/login");
            }
        }
    }

    const getUsers = async () => {
        const response = await axiosJWT.get('http://localhost:5000/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }
        return (
            <div class="wrapper">
                <div class="checkout_wrapper">
                    <div class="product_info">
                        
                        <div class="payment-content">

                            {/* Service Img And Service Name */}
                            <p>Category : </p>
                                <p
                                    //id for worker category
                                    id="Worker_category"></p>
                            <p>Booking charge : Rs.500</p>
                        </div>
                    </div>
                    <div class="checkout_form">
                        <p>Payment Section</p>
                        <div class="details">
                            <div class="section">
                                <input type="text" placeholder="Card Number" />
                            </div>
                            <div class="section">
                                <input type="text" placeholder="Cardholder Name" />
                            </div>
                            <div class="section last_section">
                                <div class="item">
                                    <input type="text" placeholder="Expiry Date" />
                                </div>
                                <div class="item">
                                    <input type="text" placeholder="CVV" />
                                </div>
                            </div>

                            <div class="btn">
                                <a href="#s">Pay</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


export default PaymentGate