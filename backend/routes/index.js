import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import {Book} from '../controllers/WorkerGet.js';
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
 
const router = express.Router();
 
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/book', Book)
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
 
export default router;