import jwt from "jsonwebtoken";
import JWT_TOKEN from "./config";

function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Error while auth"
    });
  }

  const token = authHeader.split(' ')[1];
  
  try {
    const decode = jwt.verify(token, JWT_TOKEN);

    if (decode.userId) {
      req.userId = decode.userId;
      next(); // Call the next middleware or route handler
    } else {
      res.status(401).json({
        message: "Invalid token"
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Error while verifying token"
    });
  }
}

export { authMiddleware };
