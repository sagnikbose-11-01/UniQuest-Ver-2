// routes/auth.js
const express = require('express');
const router = express.Router();
const pool = require('../db'); // updated to use pg Pool

// REGISTER
router.post('/register', async (req, res) => {
  const { fullName, email, password, role } = req.body;
  if (!fullName || !email || !password) {
    return res.status(400).json({ error: 'All fields required' });
  }

  try {
    const query = `
      INSERT INTO users (fullName, email, password, role)
      VALUES ($1, $2, $3, $4)
      RETURNING id, fullName, email, role
    `;
    const values = [fullName, email, password, role || 'applicant'];

    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (err) {
    if (err.code === '23505') { // unique violation
      res.status(400).json({ error: 'Email already exists' });
    } else {
      console.error(err);
      res.status(500).json({ error: 'Database error' });
    }
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const query = 'SELECT * FROM users WHERE email = $1 AND password = $2';
    const values = [email, password];

    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const user = result.rows[0];
    res.json({ id: user.id, fullName: user.fullname, email: user.email, role: user.role });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
