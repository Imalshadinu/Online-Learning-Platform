const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser, getCourses } = require('../controllers/userController');
// const { getCourses } = require('../controllers/studentController');
// const auth = require('../middleware/auth'); 

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with first name, last name, email and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input
 */
router.post('/register', registerUser);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login a user
 *     description: Login a user with email and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       401:
 *         description: Invalid credentials
 */
router.post('/login', loginUser);

/**
 * @swagger
 * /api/users/logout:
 *   post:
 *     summary: Logout a user
 *     description: Logout the current user
 *     responses:
 *       200:
 *         description: User logged out successfully
 */
router.post('/logout', logoutUser);

/**
 * @swagger
 * /api/users/courses:
 *   get:
 *     summary: Get all courses
 *     description: Retrieve a list of all courses
 *     responses:
 *       200:
 *         description: A list of courses
 *       401:
 *         description: Unauthorized
 */
router.get('/courses', getCourses);

module.exports = router;
