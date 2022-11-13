import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "./Worker.css";

function Worker() {

    useEffect(() => {
        refreshToken();
        getUsers();
      }, []);

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
    const logOut = async () => {
        try {
          await axios.delete("http://localhost:5000/logout");
          history.push("/login");
          window.location.reload(false);
        } catch (error) {
          console.log(error);
        }
      };

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [tabState, setTabState] = useState(1);

    const TabToggle = (index) => {
        setTabState(index);
    };

    return (
        <div className="workerPro">
            <div className="rowWorker">
                <div className="columnWorker1">
                    <h3 className="Worker_Profile">Profile</h3>
                    <button className="Btn_lgt" onClick={logOut}>
                    Logout
                    </button>
                    <div className="Image_Worker"
                        //id for worker dp
                        id="Worker_image" >
                    </div>

                    <p className="lbl-worker">Bio</p>
                    <p className="Worker_Desc"
                        //id for worker bio
                        id="Worker_bio"></p>
                </div>

                <div className="columnWorker2">
                    <div className="containerWorker">
                        <div className="bloc-tabs">
                            <button
                                id="button-Login-worker"
                                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(1)}
                            >
                                About
                            </button>

                            <button
                                id="button-Login-worker"
                                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(2)}
                            >
                                Works
                            </button>

                        </div>

                        <div className="contentWorker-tabs">
                            <div
                                className={toggleState === 1 ? "content  active-content" : "content"}
                            >
                                <h2 className="WorkerProTitle">Worker Information</h2>

                                <p className="lbl-worker">Name</p>
                                <p className="Worker_Desc"
                                    //id for worker city 
                                    id="Worker_Name">{nameU}</p>

                                <p className="lbl-worker">From</p>
                                <p className="Worker_Desc"
                                    //id for worker city 
                                    id="Worker_from">{addressU}</p>

                                <p className="lbl-worker">Worker since</p>
                                <p className="Worker_Desc"
                                    //id for worker since
                                    id="Worker_since"></p>

                                <p className="lbl-worker">Worker Category</p>
                                <p className="Worker_Desc"
                                    //id for worker category
                                    id="Worker_category"></p>

                                <p className="lbl-worker">Email</p>
                                <p className="Worker_Desc"
                                    //id for worker email
                                    id="Worker_email">{EmailU}</p>

                                <p className="lbl-worker">Phone</p>
                                <p className="Worker_Desc"
                                    // id for worker phone
                                    id="Worker_phone">{contact_numberU}</p>
                            </div>

                            <div
                                className={toggleState === 2 ? "content  active-content" : "content"}
                            >

                                {/* Inside Works tab there are 3 tabs */}
                                {/* Inside Works tab there are 3 tabs */}
                                <div className="newBlock">
                                    <div className="sub-bloc-tabs">
                                        <button
                                            className={tabState === 3 ? "sub active-sub" : "sub"}
                                            onClick={() => TabToggle(3)}
                                        >
                                            All Works
                                        </button>
                                        <button
                                            className={tabState === 4 ? "sub active-sub" : "sub"}
                                            onClick={() => TabToggle(4)}
                                        >
                                            Completed
                                        </button>
                                        <button
                                            className={tabState === 5 ? "sub active-sub" : "sub"}
                                            onClick={() => TabToggle(5)}
                                        >
                                            Pending
                                        </button>
                                    </div>

                                    <div className="sub-content-tabs">
                                        <div
                                            className={tabState === 3 ? "sub_content  active-sub_content" : "sub_content"}
                                        >
                                            <table>
                                                <tr>
                                                    <th className="firstCol">
                                                        Date
                                                    </th>
                                                    <th className="secCol">
                                                        Service Description
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        {/* id for all work's date */}
                                                        <p id=""></p>
                                                    </td>
                                                    <td>
                                                        {/* id for all work's description */}
                                                        <p id=""></p>
                                                    </td>
                                                </tr>
                                            </table>

                                        </div>

                                        <div
                                            className={tabState === 4 ? "sub_content  active-sub_content" : "sub_content"}
                                        >


                                            <table>
                                                <tr>
                                                    <th className="firstCol">
                                                        Date
                                                    </th>
                                                    <th className="secCol">
                                                        Service Description
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        {/* id for completed work's date */}
                                                        <p id=""></p>
                                                    </td>
                                                    <td>
                                                        {/* id for completed work's description */}
                                                        <p id=""></p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>

                                        <div
                                            className={tabState === 5 ? "sub_content  active-sub_content" : "sub_content"}
                                        >


                                            <table>
                                                <tr>
                                                    <th className="firstCol">
                                                        Date
                                                    </th>
                                                    <th className="secCol">
                                                        Service Description
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        {/* id for pending work's date */}
                                                        <p id=""></p>
                                                    </td>
                                                    <td>
                                                        {/* id for pending work's description */}
                                                        <p id=""></p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Worker;
