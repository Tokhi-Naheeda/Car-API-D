import express from "express";
import {carRouter} from "./routes/cars.js";

const app = express();
app.use(express.json());
app.use("/cars", carRouter);

app.listen(3000,()=>{
    console.log("Server ist started")
})