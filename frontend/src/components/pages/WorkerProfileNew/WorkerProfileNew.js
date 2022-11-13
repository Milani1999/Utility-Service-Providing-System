import "./WorkerProfile.css";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { useHistory } from 'react-router-dom';
import jwt_decode from "jwt-decode";


function WorkerProfile() {
   

    const [nameWorker, setNameWorker] = useState('') ;
    const [ServiceCat, setServiceCat] = useState('') ;
    const [BioWorker, setBioWorker] = useState('') ;

    const [name, setName] = useState('') ;
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);

    const history = useHistory();
    const axiosJWT = axios.create();

    useEffect(() => {
        refreshToken();
        getUsers();
    }, []);
 
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
            if(decoded.userType==="Customer")
            history.push("/worker");
            else
            history.push("/login");
            
            
        } catch (error) {
            if (error.response) {
              history.push('/login');
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
        
        <div class="containerWorkerProfile">
            <div className="cardWorkerProfile">

                <div className="card_headerWorkerProfile">
                
                    <h2 className="WorkerTitle">Get to know your worker</h2>

                    <div className="image_wrap_worker"
                        // id for image
                        id="labelWorker">
                    </div>
                </div>

                <div class="card_main-WorkerProfile">
                    <div class="card_content-WorkerProfile">

                        <p className="headingLabel">Name :</p>
                        <p className="labelsWorkerProfile"
                            // id for Name
                            id="labelName">{nameWorker}
                        </p>

                        <p className="headingLabel">Service Category :</p>
                        <p className="labelsWorkerProfile"
                            // id for Service Category
                            id="labelService">{ServiceCat}
                        </p>

                        <p className="headingLabel">Bio :</p>
                        <p className="labelsWorkerProfile"
                            // id for Bio
                            id="labelBio">{BioWorker}
                        </p>

                        <button className="Btn-worker"
                            //id for button (another worker) 
                            id="Btn_another_worker">
                            Get another worker
                        </button>

                        <Link to='/Payment'>
                            <button className="Btn-payment"
                                //id for button payment
                                id="Btn_Payment">
                                Proceed to Payment
                            </button>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default WorkerProfile;
