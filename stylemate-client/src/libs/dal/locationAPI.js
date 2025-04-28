import axios from "axios";

const locationAPI = axios.create({
    baseURL : "https://api.ipapi.com/"
})

export default locationAPI;