import express from "express";
import { getAllUserServices } from "./userServices.controller.js";

const router = express.Router();

router.get("/get-all-user-services", getAllUserServices);