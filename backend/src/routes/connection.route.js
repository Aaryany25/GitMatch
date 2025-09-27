import express from "express"
import { GetConnection, GetMyConnections, SendConnection } from "../controllers/connection.controller.js"
const router = express.Router()
router.post("/send",SendConnection)
router.get("/requests",GetConnection)
router.get("/connections/:id",GetMyConnections)

export default router