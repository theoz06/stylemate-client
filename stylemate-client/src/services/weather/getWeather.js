import weatherAPI from "@/libs/dal/weatherAPI";

const getWeather = async (lat, lot) => {
    try {
        const res = await weatherAPI.get(`weather?units=metric&lat=${lat}&lon=${lot}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`)
        return res.data;
    } catch (error) {
        throw error;
    }
}

export default getWeather;