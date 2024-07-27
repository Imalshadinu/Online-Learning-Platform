const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Course = require('../models/Course');

exports.addCourse = async (req, res) => {
    const { title, description } = req.body;
    try {
        const course = await Course.create({ title, description });
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCourse = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
        const course = await Course.update({ title, description }, { where: { id } });
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCourse = async (req, res) => {
    const { id } = req.params;
    try {
        await Course.destroy({ where: { id } });
        res.status(204).json({});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
