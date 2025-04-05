import axios from "axios";

const weatherAPI = axios.create({
    baseURL : "http://ip-api.com/json/",
})

export default weatherAPI;