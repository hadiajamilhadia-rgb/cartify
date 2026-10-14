import express from 'express';
import cors  from 'cors';
import dotenv from 'dotenv';

// Load env vars FIRST before any other imports that may use them
dotenv.config();

import connectdb from './config/db.js';
import http, { createServer } from "http";
import url from 'url';
import getTime from  "./date.js";
import authRoute from "./router/authRoutes.js";

getTime();




const app = express();

app.use(cors({
    origin: [],
    method : ["GET", "POST", "PUT","DELETE"],
    credentials :true
}
));
app.use(express.json());

app.use("/api/auth" , authRoute);

// Basic routes on the Express app
app.get('/', (req, res) => res.send('Welcome to the Home Page!'));


const server = http.createServer(app); 

var adr = 'http://localhost:8080/default.htm?year=2017&month=february'; 
var q = url.parse(adr, true); 
console.log(q.host); //returns 'localhost:8080' 
console.log(q.pathname); //returns '/default.htm' 
console.log(q.search); //returns '?year=2017&month=february' 
var qdata = q.query; //returns an object: { year: 2017, month: 'february' } 
console.log(qdata.month); //returns 'february' 



connectdb();

console.log("CLAB_11");
console.log("abc");
server.listen(5001, ()=>{
    console.log("server is running on port 5001");
})