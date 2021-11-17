
import csv from 'csv-parser'
import fs from 'fs'
import { addOrUpdate } from "./add-update.js";
import { updateKeys } from "./update-keys.js";
import dotenv from 'dotenv';
dotenv.config();
import logger from './logger.js';


const results = [];
const LastRow = ["key", "from_name", "to_name", "Message"];

fs.createReadStream(process.env.FILELOCATION)

    .pipe(csv())
    //Conversion to an array of objects
    .on('data', (data) => results.push(data))
    .on('end', async () => {
        console.log(`Listening on http://loclhost: ${process.env.PORT}`);
        

        //Checking the format of the title
        if (Object.keys(results[0]).equals(LastRow)) {

            try {
                await addOrUpdate(results);

            } catch (err) {
                logger.logger.error(err.message)
            }
            try {
                await updateKeys(results);
                logger.logger.info("The operation closed successfully")

            } catch (err) {
                logger.logger.error(err.message)
            }
        }

        else {
            logger.logger.error("The title is not in the appropriate format")
        }

    }
    )


Array.prototype.equals = function (arr2) {
    return (
        this.length === arr2.length &&
        this.every((value, index) => value === arr2[index])
    );
};

