import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from "http";
import url from 'url';

// 1. Load Environment Variables First
dotenv.config();

// 2. Import Database Connection and Custom Modules
import connectdb from './config/db.js';
import getTime from "./date.js";
import authRoutes from './routes/authRoutes.js';

// 3. Initialize Express App
const app = express();

// 4. Middlewares
app.use(cors({
    origin: "*", // Apni frontend ki URL yahan daal sakte hain baad mein (e.g., "http://localhost:3000")
    methods: ["GET", "POST", "PUT", "DELETE"], // Note: 'method' ko 'methods' karna chahiye cors mein
    credentials: true
}));
app.use(express.json());

// 5. Connect Database
connectdb();

// 6. Execute Helper Functions
getTime();

// 7. Routes
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => res.send('Welcome to the Home Page!'));

// 8. URL Module Demo (Aapka test code)
var adr = 'http://localhost:8080/default.htm?year=2017&month=february'; 
var q = url.parse(adr, true); 
console.log(q.host); // returns 'localhost:8080' 
console.log(q.pathname); // returns '/default.htm' 
console.log(q.search); // returns '?year=2017&month=february' 
var qdata = q.query; // returns an object: { year: 2017, month: 'february' } 
console.log(qdata.month); // returns 'february' 

console.log("CLAB_11");
console.log("abc");

// 9. Create HTTP Server & Listen on Port 5001
const server = http.createServer(app); 

server.listen(5001, () => {
    console.log("Server is running on port 5001");
});