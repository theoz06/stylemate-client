import locationAPI from "@/libs/dal/locationAPI";
import axios from "axios";


const getLocation = async () => {
    try {
        const res = await axios.get("https://api64.ipify.org?format=json");
        const ipAddress = res.data.ip;
        const response = await locationAPI.get(`${ipAddress}?access_key=${process.env.NEXT_PUBLIC_LOCATION_API_KEY}`);
        return response.data;
    }catch(error) {
        throw error;
    }
}

export default getLocation;