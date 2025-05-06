import express from "express";
import { createNewsletterSubscription } from "./newsletterSubscription.controller.js";

const router = express.Router();

router.post("/create", createNewsletterSubscription);