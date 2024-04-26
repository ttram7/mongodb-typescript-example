// endpoints for client side to communicate using Express
// router handles all calls to same endpoint

// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import City from "../models/cities";

// Global Config
export const citiesRouter = express.Router();

citiesRouter.use(express.json());

// GET
citiesRouter.get("/", async (_req: Request, res: Response) => {
    try {
       const cities = (await collections.cities.find({}).toArray()) as City[];

        res.status(200).send(cities);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// POST

// PUT

// DELETE