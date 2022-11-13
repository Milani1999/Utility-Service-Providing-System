import React, { Component } from 'react'
import './Admin.css'

export class Service_add extends Component {
    render() {
        return (
            <div>


                {/* <?php

@include 'config.php';

$Service_Id = $_GET['add'];

if(isset($_POST['add_service'])){

   $service_category = $_POST['service_category'];
   $service_desc = $_POST['service_desc'];
   $service_image = $_FILES['worker_dp']['name'];
   $service_image_tmp_name = $_FILES['worker_dp']['tmp_name'];
   $service_image_folder = 'uploaded_img/'.$service_image;


   if(empty($service_category) || empty($service_desc) || empty($service_image)){
      $message[] = 'please fill out all';
   }else{
      $insert = "INSERT INTO service(Service_Category, Service_Image, Description) VALUES('$service_category', '$service_image', '$service_desc')";
      $upload = mysqli_query($conn,$insert);
      if($upload){
         move_uploaded_file($service_image_tmp_name, $service_image_folder);
         header('location:admin_page.php');
         $message[] = 'new worker added successfully';
      }else{
         $message[] = 'could not add the Service';
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
                    <div className="admin-Admin-form-container">
                        <form
                            //   action="<?php $_SERVER['PHP_SELF'] ?>" 
                            method="post" enctype="multipart/form-data">
                            <h3>add a service</h3>
                            <input type="text" placeholder="enter service category" name="service_category" className="box" />
                            <input type="text" placeholder="enter the service description" className="box" name="service_desc" />
                            <input type="file" accept="Dp/png, Dp/jpeg, Dp/jpg" name="worker_dp" className="box" />
                            <input type="submit" className="btn-Admin" name="add_service" value="add service" />
                            <a href="admin_page.php" className="btn-Admin">go back!</a>
                        </form>

                    </div>

                </div>
            </div>
        )
    }
}

export default Service_add