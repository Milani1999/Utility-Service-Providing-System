import Booking from "../models/BookingModel.js";
import jwt from "jsonwebtoken";
 
 
export const Book = async(req, res) => {
    const { name, email, service, phone, address,problem} = req.body;
    if(name=="") return res.status(400).json({msg: "Fill All The Required* name fields"});
    if(email=="") return res.status(400).json({msg: "Fill All The Required* email fields"});
    if(phone=="") return res.status(400).json({msg: "Fill All The Required* phone fields"});
    if(address=="") return res.status(400).json({msg: "Fill All The Required* addree fields"});
    if(service=="") return res.status(400).json({msg: "Fill All The Required* serv fields"});
    if(problem=="") return  res.status(400).json({msg: "You should give your problem"});
    
    try {
        await Booking.create({
            name: name,
            email: email,
            phoneNumber: phone,
            address : address,
            service : service,
            problem : problem
        });
        res.json({msg: "Booked Successful"});
    } catch (error) {
        console.log(error);
        
    }
}