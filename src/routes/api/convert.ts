import express from 'express';
const convert = express.Router();
import csv from "csvtojson";
import { promises as fsPromises } from 'fs';

const inputFile = 'src/users.csv';
const outputFile = 'users.json';

convert.get('/convert',(req,res) => {
   res.send('converting file in process !');
   csv()
   .fromFile(inputFile)
   .then((data) => {

    let new_data = data.map( 
    (item : { first_name:string; 
              last_name :string;
              phone : string;
    }) => {
        let first = item.first_name;
        let last = item.last_name;
        let phone = item.phone;
        if(item.phone ==""){
            phone= "missing data";
        }
        return {first,last,phone};
    });
    fsPromises.writeFile(outputFile,JSON.stringify(new_data));
});
});

export default convert;