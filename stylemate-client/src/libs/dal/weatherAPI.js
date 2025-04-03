import axios from "axios";
import Cookies from "js-cookie";

const weatherAPI = axios.create({
    baseURL : "http://ip-api.com/json/",
})

export default weatherAPI;