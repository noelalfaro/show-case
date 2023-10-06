import express from "express";
import "./config/dotenv.js";
import cors from "cors";

import eventsRouter from "./routes/events.js";

const app = express();
app.use(cors());

// app.use("/public", express.static("./public"));
// app.use("/scripts", express.static("./public/scripts"));

app.use("/events", eventsRouter);

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">Showcase API</h1>'
    );
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
