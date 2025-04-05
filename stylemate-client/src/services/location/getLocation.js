import locationAPI from "@/libs/dal/locationAPI";
import axios from "axios";


const getLocation = async () => {
    try {
        const res = await axios.get("https://api64.ipify.org?format=json");
        const ip = res.data.ip;
        const response = await locationAPI.get(`${ip}`);
        return response.data;
    }catch(error) {
        throw error;
    }
}

export default getLocation;