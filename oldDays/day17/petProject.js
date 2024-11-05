import express from "express";
import process from "process";
import cors from "cors";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
