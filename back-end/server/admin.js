import express from "express";
import fs from "fs";

const adminRouter = express.Router();
const filePath =
  "C:/Users/User/OneDrive/מסמכים/Studies/full-stack/generic-store-website/DB/generic_store_db.json";

async function getData() {
  try {
    const jsonData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading file:", error);
    throw error;
  }
}

adminRouter.get("/productsData", async (req, res, next) => {
  console.log("Admin route accessed");
  try {
    const data = await getData();
    res.json(data); // Use `res.json()` to send a proper JSON response
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { adminRouter };
