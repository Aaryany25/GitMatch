import express from "express"
const router = express.Router()
import { SignUpWithGitHub,LogIn, Logout } from "../controllers/auth.controller.js"
router.post("/github",SignUpWithGitHub)
router.get("/me",LogIn)
router.post("/logout",Logout)
export default router