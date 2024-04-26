import express from "express";
import { connectToDatabase } from "./services/database.service"
import { citiesRouter } from "./routes/cities.router";

const app = express();
const port = 8080; // default port to listen

// call to router class to handle all calls to /cities endpoint
connectToDatabase()
    .then(() => {
        app.use("/cities", citiesRouter);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });




// app.get("/", (req, res) => {
//     res.send("Hello world!");
// });

// // start the Express server
// app.listen(port, () => {
//     console.log(`server started at http://localhost:${port}`);

    // ** TODO ** Call to Game Service to initiate connection
});
