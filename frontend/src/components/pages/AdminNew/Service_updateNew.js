import React, { Component } from 'react'
import './Admin.css'

export class Service_update extends Component {
    render() {
        return (
            <div>

                {/* <?php

@include 'config.php';

$Service_Id = $_GET['edit'];

if(isset($_POST['update_service'])){

   $service_category = $_POST['service_category'];
   $service_desc = $_POST['service_desc'];
   $service_image = $_FILES['service_image']['name'];
   $service_image_tmp_name = $_FILES['service_image']['tmp_name'];
   $service_image_folder = 'uploaded_img/'.$service_image;
   

   if(empty($service_category) || empty($service_desc) || empty($service_image)){
      $message[] = 'please fill out all!';    
   }else{

      $update_data = "UPDATE service SET Service_Category='$service_category', Service_Image='$service_image' , Description='$service_desc'
      WHERE Service_Id = '$Service_Id'";
      $upload = mysqli_query($conn, $update_data);

      if($upload){
         move_uploaded_file($service_image_tmp_name, $service_image_folder);
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
                        {/* 
   <?php
      
      $select = mysqli_query($conn, "SELECT * FROM service WHERE Service_Id = '$Service_Id'");
      while($row = mysqli_fetch_assoc($select)){

   ?> */}

                        <form action="" method="post" enctype="multipart/form-data">
                            <h3 className="title">update the service</h3>


                            <input type="text" placeholder="enter service category" name="service_category" className="box"
                            //   value="<?php echo $row['Service_Category']; ?>"
                            />
                            <input type="text" placeholder="enter the service description" name="service_desc" className="box"
                            //   value="<?php echo $row['Description']; ?>"
                            />

                            <input type="file" className="box" name="service_image" accept="Dp/png, Dp/jpeg, Dp/jpg" />
                            <input type="submit" value="update service" name="update_service" className="btn-Admin" />
                            <a href="admin_page.php" className="btn-Admin">go back!</a>
                        </form>

                        {/* <?php }; ?> */}

                    </div>

                </div>

            </div>
        )
    }
}

export default Service_update