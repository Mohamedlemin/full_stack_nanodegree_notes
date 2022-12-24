import express from "express";
const teacher = express.Router();
import logger from "../../utilities/logger";

teacher.get("/teacher", logger, (req, res) => {
  res.send("teacher route");
});

export default teacher;
