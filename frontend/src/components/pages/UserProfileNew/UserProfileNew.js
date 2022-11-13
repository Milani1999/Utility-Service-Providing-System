import "./UserProfile.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
// import { logOut } from '../LogInFinder';
// import { login } from '../LogInFinder';


var contact_number = "0711027080";

const UserProfile = () => {
  const [nameU, setName] = useState("");
  const [EmailU, setEmail] = useState("");
  const [addressU, setAddress] = useState("");
  const [contact_numberU, setPhone] = useState("");
  const [userType, setUserType] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  
  const [file, setFile] = useState();
  const history = useHistory();

  console.log(userType);
  

  const logOut = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      history.push("/login");
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshToken();
    getUsers();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setEmail(decoded.email);
      setAddress(decoded.address);
      setUserType(decoded.userType);
      setPhone(decoded.phone);
      setExpire(decoded.exp);
      
      if(decoded.userType==="Customer")
        history.push("/UserProfileNew");
      else
        history.push("/WorkerProfileNew");
      
    
      
    } catch (error) {
      if (error.response) {
        history.push("/login");
      }
    }
  };
  const axiosJWT = axios.create();

  const getUsers = async () => {
    const response = await axiosJWT.get("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUsers(response.data);
  };

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div class="container_uprofile">
      <div className="card_uprofile">
        <button className="Btn_lgt" onClick={logOut}>
          Logout
        </button>

        {/* <Link to="/" className="link-1">
                    <button className="Btn_lgt"><FontAwesomeIcon icon={faSignOutAlt} className="logout" /></button>
                </Link> */}

        <div className="card_header_uprofile">
          <h2 className="titleProfile">Profile</h2>

          <img
            src={file}
            alt=""
            className="image_wrap_user"
            //id for user image
            id="user_dp"
          />

          <input type="file" onChange={handleChange} className="label" />
        </div>

        <div class="card_main_uprofile">
          <div class="card_content_uprofile">
            <table>
              <tr>
                <td>
                  <h3>Name :</h3>
                </td>
                <td>
                  {/* id for name */}
                  <p id="user_Name"> {nameU}</p>
                </td>
              </tr>

              <tr>
                <td>
                  <h3>Email :</h3>
                </td>
                <td>
                  {/* id for email */}
                  <p id="user_Email"> {EmailU}</p>
                </td>
              </tr>

              <tr>
                <td>
                  <h3>Address :</h3>
                </td>
                <td>
                  {/* id for address */}
                  <p id="user_Address"> {addressU}</p>
                </td>
              </tr>

              <tr>
                <td>
                  <h3>Contact No :</h3>
                </td>
                <td>
                  {/* id for mobile no */}
                  <p id="user_MobileNo"> {contact_numberU}</p>
                </td>
              </tr>
            </table>

            <h6 className="note">
              For any changes please contact our customer support
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
