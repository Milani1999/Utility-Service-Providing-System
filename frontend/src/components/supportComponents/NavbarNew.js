import React, { useState , useEffect} from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { ButtonNew} from './ButtonNew';
import { Button} from './ButtonNew';
import { Link , useHistory} from 'react-router-dom';
import './Navbar.css';
import DropdownNew from './DropdownNew';
//const { Finder } = require('../supportComponents/LogInFinder');

//var a = Finder.Find;

function Navbar() {

    const [name, setName] = useState('');
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
 
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' >
          TooFoo
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                     Home
                   </Link>
                  </li>

                  <li className='nav-item'>
                   <Link
                  to='/aboutus'
                  className='nav-links'
                  onClick={closeMobileMenu}
                   >
                  About us
                 </Link>
                 </li>


          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down'/>
            </Link>
            {dropdown && <DropdownNew />}
          </li>

          <li className='nav-item'>
            <Link
              to='/contactus'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>

          <li>
          {name ?
            <Link
              to='/UserProfileNew'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Profile
            </Link>
            : 
            <Link
              to='/login'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Login
            </Link>
            
          } 
          </li>

        </ul>
        {name ? <Button /> : <ButtonNew />}
        
      </nav>
    </>
  );
}

export default Navbar;
