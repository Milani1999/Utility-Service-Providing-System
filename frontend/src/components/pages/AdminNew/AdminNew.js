import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Admin.css'

export class Admin extends Component {
    render() {
        return (
            <div>

                {/* <?php

                @include 'config.php';


                if(isset($_GET['delete-worker'])){
                    $Worker_ID = $_GET['delete-worker'];
                mysqli_query($conn, "DELETE FROM worker WHERE Worker_ID = $Worker_ID");
                header('location:admin_page.php');
};

                if(isset($_GET['delete-service'])){
                    $Service_Id = $_GET['delete-service'];
                mysqli_query($conn, "DELETE FROM service WHERE Service_Id = $Service_Id");
                header('location:admin_page.php');
};

?> */}


                {/* <?php

                if(isset($message)){
                    foreach($message as $message){
                    echo '<span className="message">'.$message.'</span>';
   }
}

?> */}

                <div className="row-admin" id="main-menu">

                    <h4 className="Admin-heading">
                        Admin Dashboard
                    </h4>


                    <ul className='AdminList'>
                        <a href="#WorkerTable"><li className="li-admin">Manage Workers</li></a>
                        <a href="#ACmechTable"><li className="li-admin">Manage Services</li></a>
                        <ul>
                            <a href="#ACmechTable"><li className="li-admin">AC mechanics</li></a>
                            <a href="#ElectricianTable"><li className="li-admin">Electricians</li></a>
                            <a href="#PlumberTable"><li className="li-admin">Plumbers</li></a>
                            <a href="#PainterTable"><li className="li-admin">Painters</li></a>
                            <a href="#CleanerTable"><li className="li-admin">Cleaners</li></a>
                            <a href="#SupplierTable"><li className="li-admin">Gas suppliers</li></a>
                        </ul>
                        <a href="#CustomerTable"><li className="li-admin">Manage Customers</li></a>
                    </ul>

                </div>

{/* ******************************************Worker Table*************************************************** */}

                <div className="containerForAdmin" id="WorkerTable">
                    {/* <?php
                    $select = mysqli_query($conn, "SELECT * FROM worker");
   ?> */}

                    <button id="HideOpen">Manage Workers</button>
                    <div className="Admin-display" id="AdminContainer">
                        <Link to="/workeradd" className="btn-Admin-add"><i className="fas fa-user-plus"></i>add</Link>

                        <table className="Admin-display-table">
                            <thead>
                                <tr>
                                    <th>Dp</th>
                                    <th>name</th>
                                    <th>address</th>
                                    <th>email</th>
                                    <th>phone</th>
                                    <th>bio</th>
                                    <th>username</th>
                                    <th>password</th>
                                    <th>action</th>
                                </tr>
                            </thead>
                            {/* <?php while($row = mysqli_fetch_assoc($select)){ ?> */}
                            <tr>
                                <td>
                                    <img
                                        // src="uploaded_img/<?php echo $row['Dp']; ?>" 
                                        height="100" alt="" /></td>
                                <td>
                                    {/* <?php echo $row['Name']; ?> */}
                                </td>
                                <td>
                                    {/* <?php echo $row['Address']; ?> */}
                                </td>
                                <td>
                                    {/* <?php echo $row['Email_Id']; ?> */}
                                </td>
                                <td>
                                    {/* <?php echo $row['Phone']; ?> */}
                                </td>
                                <td>
                                    {/* <?php echo $row['Bio']; ?> */}
                                </td>
                                <td>
                                    {/* <?php echo $row['UserName']; ?> */}
                                </td>
                                <td>
                                    {/* <?php echo $row['Password']; ?> */}
                                </td>
                                <td>
                                    {/* <a href="admin_update.php?edit=<?php echo $row['Worker_ID']; ?>">  */}
                                    <Link to="/workerupdate" className="btn-Admin"> <i className="fas fa-edit"></i> edit </Link>
                                    {/* <a href="admin_page.php?delete-worker=<?php echo $row['Worker_ID']; ?>"> */}
                                    <Link to="/Admin" className="btn-Admin"> <i className="fas fa-trash"></i> delete </Link>
                                </td>
                            </tr>
                            {/* <? php } ?> */}
                        </table>
                    </div>
                    <a href="#main-menu" className="btn-Admin-menu">Menu</a>
                </div>


                <hr />

{/**************************************************Table for AC mechanics*******************************************/}

                <div className="containerForAdmin" id="ACmechTable">
                    {/* <?php
                    $select = mysqli_query($conn, "SELECT * FROM service");
   ?> */}
                    <button id="HideOpen">AC mechanics</button>
                    <div className="Admin-display" id="AdminContainer2">
                        {/* <a href="service_add.php"  */}
                        <Link to="/serviceadd" className="btn-Admin-add"><i className="fas fa-user-plus"></i>add</Link>

                        <table className="Admin-display-table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Category</th>
                                    <th>Decription</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {/* <?php while($row = mysqli_fetch_assoc($select)){ ?> */}
                            <tr>
                                <td><img
                                    // src="uploaded_img/<?php echo $row['Service_Image']; ?>" 
                                    height="100" alt="" /></td>
                                <td>
                                    {/* <?php echo $row['Service_Category']; ?> */}
                                </td>
                                <td>
                                    {/* <?php echo $row['Description']; ?> */}
                                </td>
                                <td>
                                    {/* <a href="service_update.php?edit=<?php echo $row['Service_Id']; ?>"  */}
                                    <Link to="/serviceupdate" className="btn-Admin"> <i className="fas fa-edit"></i> edit </Link>
                                    {/* <a href="admin_page.php?delete-service=<?php echo $row['Service_Id']; ?>"  */}
                                    <Link to="/Admin" className="btn-Admin"> <i className="fas fa-trash"></i> delete </Link>
                                </td>
                            </tr>
                            {/* <? php } ?> */}
                        </table>
                    </div>
                    <a href="#main-menu" className="btn-Admin-menu">Menu</a>
                </div>



{/*****************************************************Table for Electricians***************************************/}

                <div className="containerForAdmin" id="ElectricianTable">
                    {/* <?php
                    $select = mysqli_query($conn, "SELECT * FROM service");
   ?> */}
                    <button id="HideOpen">Electricians</button>
                    <div className="Admin-display" id="AdminContainer2">
                        {/* <a href="service_add.php"  */}
                        <Link to="/serviceadd" className="btn-Admin-add"><i className="fas fa-user-plus"></i>add</Link>

                        <table className="Admin-display-table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Category</th>
                                    <th>Decription</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {/* <?php while($row = mysqli_fetch_assoc($select)){ ?> */}
                            <tr>
                                <td><img
                                    // src="uploaded_img/<?php echo $row['Service_Image']; ?>" 
                                    height="100" alt="" /></td>
                                <td>
                                    {/* <?php echo $row['Service_Category']; ?> */}
                                </td>
                                <td>
                                    {/* <?php echo $row['Description']; ?> */}
                                </td>
                                <td>
                                    {/* <a href="service_update.php?edit=<?php echo $row['Service_Id']; ?>"  */}
                                    <Link to="/serviceupdate" className="btn-Admin"> <i className="fas fa-edit"></i> edit </Link>
                                    {/* <a href="admin_page.php?delete-service=<?php echo $row['Service_Id']; ?>"  */}
                                    <Link to="/Admin" className="btn-Admin"> <i className="fas fa-trash"></i> delete </Link>
                                </td>
                            </tr>
                            {/* <? php } ?> */}
                        </table>
                    </div>
                    <a href="#main-menu" className="btn-Admin-menu">Menu</a>
                </div>

{/*****************************************************Table for Plumbers***************************************/}

                <div className="containerForAdmin" id="PlumberTable">
                    {/* <?php
                    $select = mysqli_query($conn, "SELECT * FROM service");
   ?> */}
                    <button id="HideOpen">Plumbers</button>
                    <div className="Admin-display" id="AdminContainer2">
                        {/* <a href="service_add.php"  */}
                        <Link to="/serviceadd" className="btn-Admin-add"><i className="fas fa-user-plus"></i>add</Link>

                        <table className="Admin-display-table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Category</th>
                                    <th>Decription</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {/* <?php while($row = mysqli_fetch_assoc($select)){ ?> */}
                            <tr>
                                <td><img
                                    // src="uploaded_img/<?php echo $row['Service_Image']; ?>" 
                                    height="100" alt="" /></td>
                                <td>
                                    {/* <?php echo $row['Service_Category']; ?> */}
                                </td>
                                <td>
                                    {/* <?php echo $row['Description']; ?> */}
                                </td>
                                <td>
                                    {/* <a href="service_update.php?edit=<?php echo $row['Service_Id']; ?>"  */}
                                    <Link to="/serviceupdate" className="btn-Admin"> <i className="fas fa-edit"></i> edit </Link>
                                    {/* <a href="admin_page.php?delete-service=<?php echo $row['Service_Id']; ?>"  */}
                                    <Link to="/Admin" className="btn-Admin"> <i className="fas fa-trash"></i> delete </Link>
                                </td>
                            </tr>
                            {/* <? php } ?> */}
                        </table>
                    </div>
                    <a href="#main-menu" className="btn-Admin-menu">Menu</a>
                </div>

    {/*****************************************************Table for Painters***************************************/}

                <div className="containerForAdmin" id="PainterTable">
                    {/* <?php
                    $select = mysqli_query($conn, "SELECT * FROM service");
   ?> */}
                    <button id="HideOpen">Painters</button>
                    <div className="Admin-display" id="AdminContainer2">
                        {/* <a href="service_add.php"  */}
                        <Link to="/serviceadd" className="btn-Admin-add"><i className="fas fa-user-plus"></i>add</Link>

                        <table className="Admin-display-table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Category</th>
                                    <th>Decription</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {/* <?php while($row = mysqli_fetch_assoc($select)){ ?> */}
                            <tr>
                                <td><img
                                    // src="uploaded_img/<?php echo $row['Service_Image']; ?>" 
                                    height="100" alt="" /></td>
                                <td>
                                    {/* <?php echo $row['Service_Category']; ?> */}
                                </td>
                                <td>
                                    {/* <?php echo $row['Description']; ?> */}
                                </td>
                                <td>
                                    {/* <a href="service_update.php?edit=<?php echo $row['Service_Id']; ?>"  */}
                                    <Link to="/serviceupdate" className="btn-Admin"> <i className="fas fa-edit"></i> edit </Link>
                                    {/* <a href="admin_page.php?delete-service=<?php echo $row['Service_Id']; ?>"  */}
                                    <Link to="/Admin" className="btn-Admin"> <i className="fas fa-trash"></i> delete </Link>
                                </td>
                            </tr>
                            {/* <? php } ?> */}
                        </table>
                    </div>
                    <a href="#main-menu" className="btn-Admin-menu">Menu</a>
                </div>

 {/*****************************************************Table for Cleanners***************************************/}

                <div className="containerForAdmin" id="CleanerTable">
                    {/* <?php
                    $select = mysqli_query($conn, "SELECT * FROM service");
   ?> */}
                    <button id="HideOpen">Cleaners</button>
                    <div className="Admin-display" id="AdminContainer2">
                        {/* <a href="service_add.php"  */}
                        <Link to="/serviceadd" className="btn-Admin-add"><i className="fas fa-user-plus"></i>add</Link>

                        <table className="Admin-display-table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Category</th>
                                    <th>Decription</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {/* <?php while($row = mysqli_fetch_assoc($select)){ ?> */}
                            <tr>
                                <td><img
                                    // src="uploaded_img/<?php echo $row['Service_Image']; ?>" 
                                    height="100" alt="" /></td>
                                <td>
                                    {/* <?php echo $row['Service_Category']; ?> */}
                                </td>
                                <td>
                                    {/* <?php echo $row['Description']; ?> */}
                                </td>
                                <td>
                                    {/* <a href="service_update.php?edit=<?php echo $row['Service_Id']; ?>"  */}
                                    <Link to="/serviceupdate" className="btn-Admin"> <i className="fas fa-edit"></i> edit </Link>
                                    {/* <a href="admin_page.php?delete-service=<?php echo $row['Service_Id']; ?>"  */}
                                    <Link to="/Admin" className="btn-Admin"> <i className="fas fa-trash"></i> delete </Link>
                                </td>
                            </tr>
                            {/* <? php } ?> */}
                        </table>
                    </div>
                    <a href="#main-menu" className="btn-Admin-menu">Menu</a>
                </div>


    {/*****************************************************Table for Gas_Suppiers***************************************/}

                <div className="containerForAdmin" id="SupplierTable">
                    {/* <?php
                    $select = mysqli_query($conn, "SELECT * FROM service");
   ?> */}
                    <button id="HideOpen">Gas Suppliers</button>
                    <div className="Admin-display" id="AdminContainer2">
                        {/* <a href="service_add.php"  */}
                        <Link to="/serviceadd" className="btn-Admin-add"><i className="fas fa-user-plus"></i>add</Link>

                        <table className="Admin-display-table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Category</th>
                                    <th>Decription</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {/* <?php while($row = mysqli_fetch_assoc($select)){ ?> */}
                            <tr>
                                <td><img
                                    // src="uploaded_img/<?php echo $row['Service_Image']; ?>" 
                                    height="100" alt="" /></td>
                                <td>
                                    {/* <?php echo $row['Service_Category']; ?> */}
                                </td>
                                <td>
                                    {/* <?php echo $row['Description']; ?> */}
                                </td>
                                <td>
                                    {/* <a href="service_update.php?edit=<?php echo $row['Service_Id']; ?>"  */}
                                    <Link to="/serviceupdate" className="btn-Admin"> <i className="fas fa-edit"></i> edit </Link>
                                    {/* <a href="admin_page.php?delete-service=<?php echo $row['Service_Id']; ?>"  */}
                                    <Link to="/Admin" className="btn-Admin"> <i className="fas fa-trash"></i> delete </Link>
                                </td>
                            </tr>
                            {/* <? php } ?> */}
                        </table>
                    </div>
                    <a href="#main-menu" className="btn-Admin-menu">Menu</a>
                </div>

                <hr />

{/*******************************************************Customer Table*************************************************/}
                <div className="containerForAdmin" id="CustomerTable">
                    {/* <?php
                    $select = mysqli_query($conn, "SELECT * FROM customer");
   ?> */}


                    <button id="HideOpen">View and edit Customer details</button>

                    <div className="Admin-display" id="AdminContainer3">

                        <table className="Admin-display-table">
                            <thead>
                                <tr>
                                    <th>Dp</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {/* <?php while($row = mysqli_fetch_assoc($select)){ ?> */}
                            <tr>
                                <td><img
                                    // src="uploaded_img/<?php echo $row['Dp']; ?>" 
                                    height="100" alt="" /></td>
                                <td>
                                    {/* <?php echo $row['Name']; ?> */}
                                </td>
                                <td>
                                    {/* <?php echo $row['Address']; ?> */}
                                </td>
                                <td>
                                    {/* <?php echo $row['Email_Id']; ?> */}
                                </td>
                                <td>
                                    {/* <?php echo $row['Phone']; ?> */}
                                </td>
                                <td>
                                    {/* <?php echo $row['UserName']; ?> */}
                                </td>
                                <td>
                                    {/* <?php echo $row['Password']; ?> */}
                                </td>
                                <td>
                                    {/* <a href="customer_update.php?edit=<?php echo $row['Customer_ID']; ?>"  */}
                                    <Link to="/customerupdate" className="btn-Admin"> <i className="fas fa-edit"></i> edit </Link>
                                    {/* <a href="admin_page.php?delete-customer=<?php echo $row['Worker_ID']; ?>"> */}
                                    <Link to="/Admin" className="btn-Admin"> <i className="fas fa-trash"></i> delete </Link>
                                </td>
                            </tr>
                            {/* <? php } ?> */}
                        </table>
                    </div>
                    <a href="#main-menu" className="btn-Admin-menu">Menu</a>
                </div>
            </div >
        )
    }
}

export default Admin