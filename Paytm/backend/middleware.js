const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");  // Ensure correct import path

function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Authorization header missing or malformed",
    });
  }

  const token = authHeader.split(" ")[1];
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (decoded.userId) {
      req.userId = decoded.userId;
      next(); // Call the next middleware or route handler
    } else {
      res.status(401).json({
        message: "Invalid token",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Error verifying token",
      error: error.message,
    });
  }
}

module.exports = { authMiddleware };
