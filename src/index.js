import { app } from "./app.js";
import dotenv from "dotenv";
dotenv.config({
    path: "./env",
});

// require("dotenv").config({ path: "./env" });

import connectDB from "./db/index.js";
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log("Error connecting to database", error);
    });

/*
import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

        app.on("error", (error) => {
            console.log("DB error ", error);
            throw error;
        });

        app.listen(process.env.port, () => {
            console.log(`App is running on ${process.env.port}`);
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
})();
*/
