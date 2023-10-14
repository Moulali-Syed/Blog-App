const express = require('express');
const router = express.Router();
const User = require('../Models/UserSchema');

router.get('/api/test', async (req, res) => {
  res.json({ message: 'auth api is working' });
});

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //check if user exists
    const existingUser = User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: 'email already exists' });
    }

    const newUser = new User({ name, email, password });
    newUser.save();

    return res.status(201).json({ message: 'user registered successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
