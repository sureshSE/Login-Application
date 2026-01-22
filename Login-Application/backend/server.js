const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Hardcoded user credentials (for demo purposes)
const VALID_USER = {
  email: 'admin@example.com',
  password: '$2b$10$oPG8O7SmWzTU3IgR4x.LyeU35ml7sUixJWi4r0Bhf8HF0pj36ngIi'
};

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Login API endpoint

app.post("/api/login", async (req, res) => {
  try {
    let { email, password } = req.body;

    // 1️⃣ Basic validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // 2️⃣ Normalize input
    email = email.trim().toLowerCase();

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // 3️⃣ Fake hash to prevent timing attacks
    const fakeHash =
      "$2b$10$abcdefghijklmnopqrstuv1234567890abcdefghijklmnopq";

    const userPasswordHash =
      email === VALID_USER.email ? VALID_USER.password : fakeHash;

    // 4️⃣ Always run bcrypt.compare
    const isMatch = await bcrypt.compare(password, userPasswordHash);

    if (!isMatch || email !== VALID_USER.email) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // 5️⃣ Success
    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        email
      },
    });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Test credentials - Email: ${VALID_USER.email}, Password: Admin@123`);
});
