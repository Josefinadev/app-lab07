import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  };

  res.send({ message: "Usuario registrado correctamente" });
};

export const signin = async (req, res) => {
  const token = jwt.sign({ id: 1 }, "secret-key", {
    expiresIn: 86400
  });

  res.send({
    id: 1,
    username: "demo",
    accessToken: token,
    role: "user"
  });
};