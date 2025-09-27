import express from "express"
import { GetUserByID,SetUserByID } from "../controllers/user.controller.js"
const router = express.Router()
router.get("/:id",GetUserByID)
router.put("/:id",SetUserByID)


export default router