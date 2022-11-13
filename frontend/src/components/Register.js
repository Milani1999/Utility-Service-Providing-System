import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import './Login.css'
 

const Register = () => {
    
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [IsAgree, setAgree] = useState(false);
    const [msg, setMsg] = useState('');
    const history = useHistory();
    
     

    const [nameU, setNameU] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
 
    useEffect(() => {
        refreshToken();
        getUsers();
    }, []);
 
    const axiosJWT = axios.create();
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setNameU(decoded.name);
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
    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                address: address,
                phone: phone,
                userName: userName,
                password: password,
                confPassword: confPassword,
                IsAgree : IsAgree
            });
            history.push("/login");
        } catch (error) {
            if (error.response) {
                console.log(error.response)
                setMsg(error.response.data.msg);
            }
        }
    }

    function PageChng()
    {
        history.push("/login");
    }
    const handleCheck = event => {
        if (event.target.checked) {
          console.log('✅ Checkbox is checked');
        } else {
          console.log('⛔️ Checkbox is NOT checked');
        }
        setAgree(current => !current);
      };
    
 
    // return (
    //     <section className="hero has-background-grey-light is-fullheight is-fullwidth">
    //         <div className="hero-body">
    //             <div className="container">
    //                 <div className="columns is-centered">
    //                     <div className="column is-4-desktop">
    //                         <form onSubmit={Register} className="box">
    //                             <p className="has-text-centered">{msg}</p>
    //                             <div className="field mt-5">
    //                                 <label className="label">Name</label>
    //                                 <div className="controls">
    //                                     <input type="text" className="input" placeholder="Name"
    //                                         value={name} onChange={(e) => setName(e.target.value)} />
    //                                 </div>
    //                             </div>
    //                             <div className="field mt-5">
    //                                 <label className="label">Email</label>
    //                                 <div className="controls">
    //                                     <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
    //                                 </div>
    //                             </div>
    //                             <div className="field mt-5">
    //                                 <label className="label">Password</label>
    //                                 <div className="controls">
    //                                     <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
    //                                 </div>
    //                             </div>
    //                             <div className="field mt-5">
    //                                 <label className="label">Confirm Password</label>
    //                                 <div className="controls">
    //                                     <input type="password" className="input" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
    //                                 </div>
    //                             </div>
    //                             <div className="field mt-5">
    //                                 <button className="button is-success is-fullwidth">Register</button>
    //                             </div>
    //                         </form>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
    // )

    return(
        <div>
                    <div id="containerLogin">
                    <div className="Login">
                    <div className="inner-box-Login" >

                        <div className="Login-back">
                            <h2> REGISTER</h2>

                            <form name = "RegisterForm" className="input-group" id="register"  onSubmit={Register}>
                                <input type="text" name = "name" className="input-field" placeholder="*Name"  value={name} onChange={(e) => setName(e.target.value)}/>
                                <input type="text" id = "Address" name = "address" className="input-field" placeholder="*Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                <input type="text" id = "usernameReg" name = "username" className="input-field" placeholder="*Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                                <input type="email" name = "Email" className="input-field" placeholder="*Email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                                
                                <input type="tel" name = "Phone" className="input-field" placeholder="*Phone Number"  value={phone} onChange={(e) => setPhone(e.target.value)}/>

                                {/* Recheck password */}
                                <input type="password" name = "password_1" id="input-field1" placeholder="*Password" value={password} onChange={(e) => setPassword(e.target.value)}  />
                                <input type="password" name = "password_2" id="input-field2" placeholder="*Re enter Password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                                <input type="checkbox" className="check-box" value={IsAgree} onChange={handleCheck}/>
                                <span>I agree to terms and conditions</span>
                                <p className='error'>{msg}</p>
                                {/* Register button */}
                                <button id="RegitserBtn" name = "reg_user" type="submit" className="ButtonsSubmit" >Register</button>

                            </form>

                            {/* Flip to Login page */}
                            <button id="FlipLogin" type="button" className="ButtonsSubmit" onClick={PageChng}>Already have an account? Login</button>

                        </div>
                    </div>
                    </div>
                    </div>
                    </div>

    )
}
 
export default Register