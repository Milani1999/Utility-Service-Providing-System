
import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom';
import './Payment.css'


function Payment (){

    const[name, setName] = useState('');
    const[address, setAddress] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');
    const[service, setServices] = useState('');
    const[problem, setProblem] = useState('');

    const [nameU, setNameU] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [msg, setMsg] = useState('');
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
            history.push("/payment");
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
    const Book = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/Book', {
                name: name,
                email: email,
                address: address,
                phone: phone,
                service : service,
                problem : problem
                
            });
            history.push("/PaymentGate");
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.msg)
                setMsg(error.response.data.msg);
            }
        }
    }
        
    
        return (
            <div>
                <div className="containerPayment">
                    <div className="cardPayment">

                        <div className="card-front-Payment">
                            <h2 className="payment-heading">PAYMENT</h2>

                            <form className="input-group" id="login">
                                <input type="text" className="input-field-payment" placeholder='Full Name' name= {nameU} onChange={(e) => setName(e.target.value)} id="user_Name"/>
                                <input type="email" className="input-field-payment" placeholder='Email' onChange={(e) => setEmail(e.target.value)} id="user_Email"/>
                                <input type="tel" className="input-field-payment" placeholder='Phone number' onChange={(e) => setPhone(e.target.value)} id="user_MobileNo"/>
                                <input type="text" className="input-field-payment" placeholder='Address' onChange={(e) => setAddress(e.target.value)} id="user_Address"/>
                                <input type="text" className="input-field-payment" placeholder='Service' onChange={(e) => setServices(e.target.value)}/>
                                <textarea placeholder='Describe the problem in brief' onChange={(e) => setProblem(e.target.value)} rows="4" cols="50"/>

                            </form>
                            <p class = 'error'>{msg}</p>
                            <p className="booking">Booking charge : Rs 500</p>
                            
                            <button onClick={Book} className="btn-payment" >Book now</button>

                        </div>



                    </div>
                </div>
            </div>

        )
    }



export default Payment