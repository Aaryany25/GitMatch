import express from "express"
import { GetUserByID,SetUserByID,SignUpUser } from "../controllers/user.controller.js"
const router = express.Router()
router.get("/user",SignUpUser)
router.get("/:id",GetUserByID)
router.put("/:id",SetUserByID)


export default router