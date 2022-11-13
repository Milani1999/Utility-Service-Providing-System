import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import './Button.css';
import { Link } from 'react-router-dom';


export function ButtonNew() {
  return (
    <Link to='login'>
      <button className='btn-Nav-Login'>Login</button>
    </Link>
  );
}

  export function Button() {
    const [name, setName] = useState('');
    const [UserName, setUserName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    
    const history = useHistory();
    const axiosJWT = axios.create();

    var setLoggedIn;

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
            setUserName(decoded.userName)
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
    
    return (
      <Link to='/UserProfileNew'>
        <button className="btn-Nav-User">
          <div class = 'parent'>
          <div class = 'child'>
              <img src="" alt="" className="image_login_user"
                          //id for user image
                          id="user_dp" />
            </div>
            <div class = 'child'>
              <p id="user_Name" className="Navbar-User">{UserName}</p>
            </div>
            </div>
        </button>
      </Link>
    );
  }
