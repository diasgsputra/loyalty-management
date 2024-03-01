// routes/auth.js
/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User authentication APIs
 */

const express = require("express");
const router = express.Router();
const { loginUser } = require("../controllers/authController");

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Authenticate user
 *     tags: [Authentication]
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
 *         description: Login successful
 *       401:
 *         description: Invalid password
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal Server Error
 */

router.post("/login", loginUser);

module.exports = router;
