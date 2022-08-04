import express from "express";
import verify from "../../utils/index.js";
import { login, logout, refresh, register, updateUser } from "./functions.js";

const router = express.Router();

//REGISTER
router.post("/register", register);

//LOGIN
router.post("/login", login);

//UPDATE
router.put("/update/:id", verify, updateUser);

//REFRESH
router.post("/refresh", verify, refresh);

//LOGOUT
router.post("/logout", verify, logout);

export default router;
