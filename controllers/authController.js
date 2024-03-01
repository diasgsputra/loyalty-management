// controllers/auth.js

const { sequelize } = require("../models");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Fetch user by email
    const [user] = await sequelize.query(
      "SELECT * FROM users WHERE email = :email",
      {
        replacements: { email },
        type: sequelize.QueryTypes.SELECT,
      }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if passwords match
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Handle successful login
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { loginUser };
