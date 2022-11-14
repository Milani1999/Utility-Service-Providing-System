import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
 
export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id','name','email']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}
 
export const Register = async(req, res) => {
    const { name, email, password, confPassword, phone, address,userName, IsAgree, userType } = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Confirm Password does not match"});
    if(name=="") return res.status(400).json({msg: "Fill All The Required* fields"});
    if(email=="") return res.status(400).json({msg: "Fill All The Required* fields"});
    if(password=="") return res.status(400).json({msg: "Fill All The Required* fields"});
    if(phone=="") return res.status(400).json({msg: "Fill All The Required* fields"});
    if(address=="") return res.status(400).json({msg: "Fill All The Required* fields"});
    if(userName=="") return res.status(400).json({msg: "Fill All The Required* fields"});
    if(!IsAgree) return  res.status(400).json({msg: "You should agree our policies"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            name: name,
            email: email,
            phoneNumber: phone,
            userName : userName,
            address : address,
            password: hashPassword,
            userType : "Customer"

        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        console.log(error);
    }
}
 
export const Login = async(req, res) => {
    if(req.body.email == "") return res.status(400).json({msg: "*Email cannot be empty"});
    if(req.body.password == "") return res.status(400).json({msg: "*Password cannot be empty"});
    try {
        const user = await Users.findAll({
            where:{
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '15s'
        });
        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await Users.update({refresh_token: refreshToken},{
            where:{
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({msg:"Email not found"});
    }
}
 
export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.update({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}