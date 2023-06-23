import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import { mailRouter } from "./Routers/mail.js";



// configure the envirenment
dotenv.config()

//initialize express server framework
const PORT=process.env.PORT;
const app=express();

//middleware
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welocome to Portfolio World")
})
app.use("/mail",mailRouter)   




//listen to a server
app.listen(PORT,()=>console.log( `server started in localhost:9090`));