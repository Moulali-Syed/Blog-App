const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./Routes/Auth');
const PORT = 8000;

require('./db');

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.json({ message: 'Demo API is working' });
});
app.use('/auth', authRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
