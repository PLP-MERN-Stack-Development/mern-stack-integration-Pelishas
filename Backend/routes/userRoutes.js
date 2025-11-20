const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/userController');

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

router.get('/', getUsers);
router.post('/', createUser);

module.exports = router;