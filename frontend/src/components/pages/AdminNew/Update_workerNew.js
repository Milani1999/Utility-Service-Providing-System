import React, { Component } from 'react'

export class Update_worker extends Component {
   render() {
      return (
         <div>

            {/* <?php

@include 'config.php';

$Worker_ID = $_GET['edit'];

if(isset($_POST['update_worker'])){

   $worker_name = $_POST['worker_name'];
   $worker_address = $_POST['worker_address'];
   $worker_email = $_POST['worker_email'];
   $worker_phone = $_POST['worker_phone'];
   $worker_bio=$_POST['worker_bio'];
   $worker_username = $_POST['worker_username'];
   $worker_password = $_POST['worker_password'];
   $worker_dp = $_FILES['worker_dp']['name'];
   $worker_dp_tmp_name = $_FILES['worker_dp']['tmp_name'];
   $worker_dp_folder = 'uploaded_img/'.$worker_dp;
   

   if(empty($worker_name) || empty($worker_address) || empty($worker_dp) || empty($worker_email) || empty($worker_phone) || empty($worker_bio) || empty($worker_username) || empty($worker_password)){
      $message[] = 'please fill out all!';    
   }else{

      $update_data = "UPDATE worker SET Name='$worker_name', Address='$worker_address', Dp='$worker_dp', Email_Id='$worker_email' , Phone='$worker_phone' , Bio='$worker_bio', UserName='$worker_username' , Password='$worker_password' 
      WHERE Worker_ID = '$Worker_ID'";
      $upload = mysqli_query($conn, $update_data);

      if($upload){
         move_uploaded_file($worker_dp_tmp_name, $worker_dp_folder);
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
      
      $select = mysqli_query($conn, "SELECT * FROM worker WHERE Worker_ID = '$Worker_ID'");
      while($row = mysqli_fetch_assoc($select)){

   ?> */}

                  <form action="" method="post" encType="multipart/form-data">
                     <h3 className="title">update worker details</h3>

                     <input type="text" className="box" name="worker_name" 
                     // value="<?php echo $row['Name']; ?>" 
                     placeholder="enter the worker Name" />
                     <input type="text" className="box" name="worker_address" 
                     // value="<?php echo $row['Address']; ?>" 
                     placeholder="enter the worker Address" />
                     <input type="email" className="box" name="worker_email" 
                     // value="<?php echo $row['Email_Id']; ?>" 
                     placeholder="enter the worker Email" />
                     <input type="number" className="box" name="worker_phone" 
                     // value="<?php echo $row['Phone']; ?>" 
                     placeholder="enter the worker Phone" />
                     <input type="text" className="box" name="worker_bio" 
                     // value="<?php echo $row['Bio']; ?>" 
                     placeholder="enter the worker Bio" />
                     <input type="text" className="box" name="worker_username" 
                     // value="<?php echo $row['UserName']; ?>" 
                     placeholder="Assign a username" />
                     <input type="text" className="box" name="worker_password" 
                     // value="<?php echo $row['Password']; ?>" 
                     placeholder="Assign a password" />

                     <input type="file" className="box" name="worker_dp" accept="Dp/png, Dp/jpeg, Dp/jpg" />
                     <input type="submit" value="update worker" name="update_worker" className="btn-Admin" />
                     <a href="admin_page.php" className="btn-Admin">go back!</a>
                  </form>



                  {/* <?php }; ?> */}



               </div>

            </div>

         </div>
      )
   }
}

export default Update_worker