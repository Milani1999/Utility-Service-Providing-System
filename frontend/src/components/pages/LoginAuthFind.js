import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import jwt_decode from "jwt-decode";

export var setLoggedIn;
function LogInAuthFind()
   {
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
            setLoggedIn = true;
            
        } catch (error) {
            if (error.response) {
              setLoggedIn = false;
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
    
}