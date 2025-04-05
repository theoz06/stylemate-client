import axios from "axios";

const weatherAPI = axios.create({
    baseURL : "https://api.ipapi.com/",
})

export default weatherAPI;