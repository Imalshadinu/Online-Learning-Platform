const express = require('express');
const router = express.Router();
const { auth, adminAuth } = require('../middleware/auth');
const { addCourse, getCourses, updateCourse, deleteCourse } = require('../controllers/courseController');
const { addStudent, getStudents, updateStudent, deleteStudent } = require('../controllers/studentController');

/** 
* @swagger
* /api/admin/courses:
*   post:
*     summary: Add a new course
*     description: Add a new course
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               title:
*                 type: string
*               description:
*                 type: string
*     responses:
*       200:
*         description: Course added successfully
*       400:
*         description: Invalid input
*/
router.post('/courses', addCourse);


/**
 * @swagger
 * /api/admin/courses:
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

/**
* @swagger
* /api/admin/courses/{id}:
*   put:
*     summary: Update course
*     description: Update a existing course
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               title:
*                 type: string
*               description:
*                 type: string
*     responses:
*       200:
*         description: Course updated successfully
*   delete:
*     summary: Delete a course
*     description: Update a existing course
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: string
*         description: The course ID
*     responses:
*       200:
*         description: Course deleted successfully
*/
router.put('/courses/:id',  updateCourse);
router.delete('/courses/:id',  deleteCourse);

// Student Management
/**
* @swagger
* /students:
*   post:
*     summary: Add a new student
*     tags: [Students]
*     responses:
*       200:
*         description: Student added successfully
*   get:
*     summary: Get all students
*     tags: [Students]
*     responses:
*       200:
*         description: A list of students
*/
router.post('/students', adminAuth, addStudent);
router.get('/students', adminAuth, getStudents);

/**
* @swagger
* /students/{id}:
*   put:
*     summary: Update a student
*     tags: [Students]
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: string
*         description: The student ID
*     responses:
*       200:
*         description: Student updated successfully
*   delete:
*     summary: Delete a student
*     tags: [Students]
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: string
*         description: The student ID
*     responses:
*       200:
*         description: Student deleted successfully
*/
router.put('/students/:id', adminAuth, updateStudent);
router.delete('/students/:id', adminAuth, deleteStudent);

module.exports = router;
