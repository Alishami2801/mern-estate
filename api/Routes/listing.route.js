import express from "express";
import {createListing } from "../Controllers/listing.controller.js";
import { verifyToken } from "../utilis/verifyToken.js";

const listingRouter = express.Router();

listingRouter.post('/create', verifyToken, createListing)



export default listingRouter;