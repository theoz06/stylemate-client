import getWeather from "@/services/weather/getWeather";
import { useEffect, useState } from "react";

const useGetWeather = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getWeatherData = async (lat, lon) => {
        setLoading(true);

        try {
            const res = await getWeather(lat, lon);
            console.log("res: " + res);
            return res;
        } catch (err) {
            const errMessage = err?.response?.data?.message || err?.response?.error || "Failed to fetch weather data!";
            setError(errMessage);
            setLoading(false);
        }finally{
            setLoading(false);
        }

    }
    
    return {
        getWeatherData,
        error,
        loading,
    }
    
}

export default useGetWeather;