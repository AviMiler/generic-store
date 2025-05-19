import express from "express";
import {adminRouter} from "./server/admin.js";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors({
  origin: "http://localhost:3000"
}));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(adminRouter);
