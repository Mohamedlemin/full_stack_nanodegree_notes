import express from "express";
const students = express.Router();
import logger from "../../utilities/logger";


students.get('/students',logger,(req,res)=>{
    res.send('students route');
});

export default students;