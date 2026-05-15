import 'dotenv/config';
import express from "express";
import cors from "cors";
import authRoutes from "./app/routes/auth.routes.js";
import testRoutes from "./app/routes/test.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});