import ObjectsToCsv from 'objects-to-csv';
import dotenv from 'dotenv';
dotenv.config();
//Update the key in the csv file
export const updateKeys = async (results) => {
    const csv = new ObjectsToCsv(results);
    try {
        // Save to file:
      await csv.toString(await csv.toDisk(process.env.FILELOCATION));
      
    } catch (err) {
        throw new Error(err);
    }
}