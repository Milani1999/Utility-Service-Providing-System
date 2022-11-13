import React, { Component } from 'react'
import './Admin.css'

export class Cusotmer_update extends Component {
    render() {
        return (
            <div>

                {/* <?php

@include 'config.php';

$Customer_ID = $_GET['edit'];

if(isset($_POST['update_customer'])){

   $customer_name = $_POST['customer_name'];
   $customer_address = $_POST['customer_address'];
   $customer_email = $_POST['customer_email'];
   $customer_phone = $_POST['customer_phone'];
   $customer_username = $_POST['customer_username'];
   $customer_password = $_POST['customer_password'];
   $customer_dp = $_FILES['customer_dp']['name'];
   $customer_dp_tmp_name = $_FILES['customer_dp']['tmp_name'];
   $customer_dp_folder = 'uploaded_img/'.$customer_dp;
   

   if(empty($customer_name) || empty($customer_address) || empty($customer_dp) || empty($customer_email) || empty($customer_phone) || empty($customer_username) || empty($customer_password)){
      $message[] = 'please fill out all!';    
   }else{

      $update_data = "UPDATE customer SET Name='$customer_name', Address='$customer_address', Dp='$customer_dp', Email_Id='$customer_email' , Phone='$customer_phone'   , UserName='$customer_username' , Password='$customer_password' 
      WHERE Customer_ID = '$Customer_ID'";
      $upload = mysqli_query($conn, $update_data);

      if($upload){
         move_uploaded_file($customer_dp_tmp_name, $customer_dp_folder);
         header('location:admin_page.php');
      }else{
         $$message[] = 'please fill out all!'; 
      }

   }
};

?> */}


                {/* <?php
   if(isset($message)){
      foreach($message as $message){
         echo '<span className="message">'.$message.'</span>';
      }
   }
?> */}

                <div className="containerForAdmin">
                    <div className="admin-Admin-form-container centered">

                        {/* <?php
      
      $select = mysqli_query($conn, "SELECT * FROM customer WHERE Customer_ID = '$Customer_ID'");
      while($row = mysqli_fetch_assoc($select)){

   ?>
    */}
                        <form action="" method="post" enctype="multipart/form-data">
                            <h3 className="title">update customer details</h3>

                            <input type="text" className="box" name="customer_name" 
                           //  value="<?php echo $row['Name']; ?>" 
                            placeholder="enter the customer Name" />
                            <input type="text" className="box" name="customer_address" 
                           //  value="<?php echo $row['Address']; ?>" 
                            placeholder="enter the customer Address" />
                            <input type="email" className="box" name="customer_email" 
                           //  value="<?php echo $row['Email_Id']; ?>" 
                            placeholder="enter the customer Email" />
                            <input type="number" className="box" name="customer_phone" 
                           //  value="<?php echo $row['Phone']; ?>" 
                            placeholder="enter the customer Phone" />
                            <input type="text" className="box" name="customer_username" 
                           //  value="<?php echo $row['UserName']; ?>" 
                            placeholder="Assign a username" />
                            <input type="text" className="box" name="customer_password" 
                           //  value="<?php echo $row['Password']; ?>" 
                            placeholder="Assign a password" />

                            <input type="file" className="box" name="customer_dp" accept="Dp/png, Dp/jpeg, Dp/jpg" />
                            <input type="submit" value="update customer" name="update_customer" className="btn-Admin" />
                            <a href="admin_page.php" className="btn-Admin">go back!</a>
                        </form>

                        {/* <?php }; ?> */}

                    </div>
                </div>

            </div>
        )
    }
}

export default Cusotmer_update