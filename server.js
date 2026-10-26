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
import productRoutes from './routes/productRoutes.js'; 
import cartRoutes from './routes/cartRoutes.js';
import catagoryRoutes from './routes/catagoryRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';// Product routes import

// 3. Initialize Express App FIRST (Yeh pehle hona zaroori hai)
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

// 7. Routes (Yeh sab `const app = express();` ke baad honge)
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes); 
app.use('/api/cart', cartRoutes);
app.use('/api/catagories', catagoryRoutes);
app.use('/api/reviews', reviewRoutes);// Product route registered here correctly
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

// 9. Create HTTP Server & Listen on Port
const server = http.createServer(app); 
const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});