// Cartify/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { addUser } = require('../controllers/userController');

// POST API route: http://localhost:5000/api/users/add
router.post('/add', addUser);

module.exports = router;