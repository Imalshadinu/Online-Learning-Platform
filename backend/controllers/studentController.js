const User = require('../models/User');

exports.addStudent = async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const student = await User.create({ first_name, last_name, email, password: hashedPassword, role: 'student' });
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getStudents = async (req, res) => {
    try {
        const students = await User.findAll({ where: { role: 'student' } });
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateStudent = async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const student = await User.update({ first_name, last_name, email, password: hashedPassword }, { where: { id, role: 'student' } });
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
        await User.destroy({ where: { id, role: 'student' } });
        res.status(204).json({});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
