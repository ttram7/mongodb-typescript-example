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
citiesRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newCity = req.body as City;
        const result = await collections.cities.insertOne(newCity);

        result
            ? res.status(201).send(`Successfully created a new city with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new city.");
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});

// PUT

// DELETE