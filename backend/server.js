const express = require('express');
const cors = require('cors');
const app = express();
const setupSwaggerDocs = require('./swagger');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
// Swagger setup
setupSwaggerDocs(app);

app.get('/', (req, res) => {
    res.send('Online Learning Platform API');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

