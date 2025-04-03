import weatherAPI from "@/libs/dal/weatherAPI";
import axios from "axios";


const getWeather = async () => {
    try {
        const res = await axios.get("https://api64.ipify.org?format=json");
        const ip = res.data.ip;
        const response = await weatherAPI.get(`${ip}`);
        return response.data;
    }catch(error) {
        throw error;
    }
}

export default getWeather;