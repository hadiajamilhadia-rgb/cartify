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
import orderRoutes from './routes/orderRoutes.js';

// 3. Initialize Express App
const app = express();

// 4. Middlewares
app.use(cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());

// 5. Connect Database
connectdb();

// 6. Execute Helper Functions
getTime();

// 7. Routes
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.get('/', (req, res) => res.send('Welcome to the Home Page!'));

// 8. URL Module Demo
var adr = 'http://localhost:8080/default.htm?year=2017&month=february'; 
var q = url.parse(adr, true); 
console.log(q.host); 
console.log(q.pathname); 
console.log(q.search); 
var qdata = q.query; 
console.log(qdata.month); 

console.log("CLAB_11");
console.log("abc");

// 9. Create HTTP Server FIRST
const server = http.createServer(app); 

// 10. THEN Listen on Port
const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});