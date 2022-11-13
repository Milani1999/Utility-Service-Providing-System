import React, { Component } from 'react'
import './Admin.css'

export class Add_worker extends Component {
    render() {
        return (
            <div>

                {/* <?php

                @include 'config.php';

                $Worker_ID = $_GET['add'];

                if(isset($_POST['add_worker'])){

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


                if(empty($worker_name) || empty($worker_address) || empty($worker_dp) ||
                empty($worker_email) || empty($worker_phone) || empty($worker_bio) || empty($worker_username) || empty($worker_password)){
                    $message[] = 'please fill out all';
   }else{
                    $insert = "INSERT INTO worker(Name,Address,Dp,Email_Id,Phone,Bio,UserName,Password) VALUES('$worker_name', '$worker_address', '$worker_dp', '$worker_email','$worker_phone','$worker_bio','$worker_username','$worker_password')";
                $upload = mysqli_query($conn,$insert);
                if($upload){
                    move_uploaded_file($worker_dp_tmp_name, $worker_dp_folder);
                header('location:admin_page.php');
                $message[] = 'new worker added successfully';
      }else{
                    $message[] = 'could not add the worker';
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
            // action="<?php $_SERVER['PHP_SELF'] ?>"
            method="post" enctype="multipart/form-data">
                <h3>add a worker</h3>
                    <input type="text" placeholder="enter worker Name" name="worker_name" className="box"/>
                    <input type="text" placeholder="enter the worker Address" className="box" name="worker_address"/>
                    <input type="email" placeholder="enter the worker Email" className="box" name="worker_email" />
                    <input type="number" placeholder="enter the worker Phone" className="box" name="worker_phone" />
                    <input type="text" placeholder="enter the worker bio" className="box" name="worker_bio" />
                    <input type="text" placeholder="Assign a username" className="box" name="worker_username" />
                    <input type="text" placeholder="Assign a password" className="box" name="worker_password" />
                    <input type="file" accept="Dp/png, Dp/jpeg, Dp/jpg" name="worker_dp" className="box"/>
                    <input type="submit" className="btn-Admin" name="add_worker" value="add worker"/>
                        <a href="admin_page.php" className="btn-Admin">go back!</a>
            </form>

        </div>

    </div>
</div>
    )
  }
}

export default Add_worker