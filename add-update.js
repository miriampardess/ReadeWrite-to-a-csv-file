import { axiosPut, axiosPost } from "./axios-api.js";

export async function addOrUpdate(results) {
    try {
        for (let index = 0; index < results.length; index++) {

            //If there is a key required to update
            if (results[index].key) {
                const successPut = await axiosPut(results[index]);
            } else {
                //If no key is required to add
                const res = await axiosPost(results[index]);
                results[index].key = res;
            }
        }
    } catch (err) {
        throw new Error(err);
    }
}