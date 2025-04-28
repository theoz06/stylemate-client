import axios from "axios";
import Cookies from "js-cookie";

const serviceAPI = axios.create({
    baseURL: process.env.STYLEMATE_SERVICE_API_URL || "http://localhost:8080",
    headers: {
        "Content-Type" : "application/json", 
    }
})

serviceAPI.interceptors.request.use((config) => {
    const token = Cookies.get("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;

    }

    if (config.data instanceof FormData){
        config.headers["Content-Type"] = "multipart/form-data";
    }

    config.withCredentials = true;

    return config;
})

serviceAPI.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const message = error.response?.data?.message || error.message || "Unknown Error!";
        const errorMessage = message || "Unknown error occurred.";
        return Promise.reject(new Error(errorMessage));
    }


)

export default serviceAPI;