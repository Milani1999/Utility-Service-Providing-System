import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import './Login.css'
 
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const [name, setName] = useState('');
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
            history.push("/");
        } catch (error) {
            if (error.response) {
                
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
    
    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });
            history.push("/UserProfileNew");
            window.location.reload(false);
        } catch (error) {
            if (error.response) {
                console.log(error.response);
                setMsg(error.response.data.msg);
            }
        }
    }

    function PageChng()
    {
        history.push("/register");
        
    }
 
//     return (
//         <section className="hero has-background-grey-light is-fullheight is-fullwidth">
//             <div className="hero-body">
//                 <div className="container">
//                     <div className="columns is-centered">
//                         <div className="column is-4-desktop">
//                             <form onSubmit={Auth} className="box">
//                                 <p className="has-text-centered">{msg}</p>
//                                 <div className="field mt-5">
//                                     <label className="label">Email or Username</label>
//                                     <div className="controls">
//                                         <input type="text" className="input" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
//                                     </div>
//                                 </div>
//                                 <div className="field mt-5">
//                                     <label className="label">Password</label>
//                                     <div className="controls">
//                                         <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
//                                     </div>
//                                 </div>
//                                 <div className="field mt-5">
//                                     <button className="button is-success is-fullwidth">Login</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }
return (
<div>
        <div id="containerLogin">
            <div className="Login">
                <div className="inner-box-Login" >
<div className="Login-front">

<h2> LOGIN</h2>

<form name = "LogInForm" className="input-group" id="login" onSubmit={Auth}>
    <input type="Email" id = "Email" name = "Email" className="input-field" placeholder="*Email" value={email} onChange={(e) => setEmail(e.target.value)} />
    <input type="password" id = "PassWord" name = "PassWord" className="input-field" placeholder="*Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    

    <input type="checkbox" className="check-box" />
    <span>Remember Password</span>
    <p className='error'>{msg}</p>
    {/* Login Button */}
    <button id="LoginBtn" className="ButtonsSubmit" >Login</button>

</form>
{/* Flip to Register page */}
 <button id="FlipRegitser" type="button" className="ButtonsSubmit" onClick={PageChng}>Don't have an account? Sign up</button>

<a href="d">Forgot Password</a>

</div>

</div>
</div>
</div>
</div>
)
            }
 
export default Login