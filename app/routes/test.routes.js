import express from "express";
import { verifyToken } from "../middleware/authJwt.js";

const router = express.Router();

router.get("/all", (req, res) => {
  res.send("Contenido público");
});

router.get("/user", verifyToken, (req, res) => {
  res.send("Acceso autorizado");
});

export default router;