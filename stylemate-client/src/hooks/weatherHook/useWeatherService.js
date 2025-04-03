import getWeather from "@/services/weather/getCurrentWeather";
import { useEffect, useState } from "react";

const useGetWeather = () => {
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    const getWeatherData = async () => {
        setLoading(true);
        
        try {
            const res = await getWeather();
            setWeather(res);
        } catch (err) {
            const errMessage = err?.response?.data?.message || err?.response?.error || "Failed to fetch weather data!";
            setError(errMessage);
        } finally {
            setLoading(false);
        }

    }

    useEffect(()=> {
        getWeatherData();
    },[]);

    return {
        weather,
        error,
        loading,
    }
}

export default useGetWeather;