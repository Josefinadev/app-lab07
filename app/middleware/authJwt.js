import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  let authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(403).send({ message: "No token provided!" });
  }

  let token = authHeader.split(" ")[1];

  jwt.verify(token, "secret-key", (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }

    req.userId = decoded.id;
    next();
  });
};