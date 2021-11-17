   
   import axios from 'axios';
   import dotenv from 'dotenv'
   dotenv.config();

   //Put
    export async function axiosPut(results) {
        try {

            const res = await axios.put(process.env.HOSTPORT + '/' + results.key, {
                "from_name": results.from_name,
                "to_name": results.to_name,
                "message": results.Message
            });
            return res.data.status;

        } catch (err) {
            throw new Error(err);
        }
    }
    //Post
    export async function axiosPost(results) {
        try {
            const res = await axios.post(process.env.HOSTPORT, {
                "from_name": results.from_name,
                "to_name": results.to_name,
                "message": results.Message
            });
            return res.data.key;

        } catch (err) {
            throw new Error(err);
        }
    }