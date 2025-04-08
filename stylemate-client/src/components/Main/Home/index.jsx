import React, { useEffect, useState } from "react";
import index from "./index.module.css";
import { LuAtom } from "react-icons/lu";
import { IoIosCloudy } from "react-icons/io";
import useGetLocation from "@/hooks/locationHook/useLocationService";
import useGetWeather from "@/hooks/weatherHook/useWeatherService";
import { weathers } from "@/libs/datas/weather";
import { weatherIcons } from "@/libs/datas/weatherIcon";
import Header from "@/components/header";

const Home = ({ setActiveTab }) => {
  const [loading, setLoading] = useState(true);
  const { location } = useGetLocation();
  const { getWeatherData, error } = useGetWeather();
  const [weatherData, setWeatherData] = useState(null);

  const lat = location?.latitude;
  const lon = location?.longitude;

  useEffect(() => {
    const fetchWeather = async () => {
      if (lat && lon) {
        const weather = await getWeatherData(lat, lon);
        setWeatherData(weather);
      }
    };
    fetchWeather();
  }, [lat, lon, getWeatherData]);

  useEffect(() => {
    let isMounted = true;

    const checkData = () => {
      const allReady = location && weatherData;
      setLoading(!allReady);
    };

    checkData();

    // Set a timeout to stop showing loading after 10 seconds
    const timer = setTimeout(() => {
      if (isMounted && loading) {
        setLoading(false);
      }
    }, 10000);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [location, weatherData]);

  const translateWeather = weathers[weatherData?.weather?.[0]?.main] || "Tidak Diketahui";
  const icon = weatherIcons[weatherData?.weather?.[0]?.main];
  const temperature = weatherData?.main?.temp ? Math.floor(weatherData.main.temp) : null;

  // Loading overlay
  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="bg-none rounded-lg p-6 w-full max-w-sm z-50 text-white">
          <div className="flex flex-col justify-center items-center text-center space-y-1">
            <IoIosCloudy className="animate-bounce size-20" />
            <h3 className="text-lg">Cek cuaca hari ini...</h3>
          </div>
        </div>
      </div>
    );
  }

  // Error display
  if (error) {
    return (
      <article className="w-full flex justify-center items-start">
        <div className="bg-red-500 text-white p-4 rounded-md w-full max-w-md">
          <p>{error?.info || "Terjadi kesalahan saat mengambil data cuaca"}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="w-full flex justify-center items-start">
      <Header title="Home" />
      <main className="w-full flex flex-col items-center bg-[#F1EFEC]">
        <div className="w-full flex flex-col items-center justify-center space-y-3">
          {/* Weather and Greeting Section */}
          <div className={`${index.icon} w-full md:w-3/4 flex items-center gap-3 text-4xl font-extrabold p-4`}>
            <div className="text-5xl">{icon}</div>
            <div className="flex flex-col gap-1">
              <div className={index.greeting}>
                <h1>Selamat Pagi,</h1>
                <p>Teofilus!</p>
              </div>
              <div className="text-sm font-bold">
                <p>
                  Hari ini cuaca di {location?.city} {translateWeather.toLowerCase()}{" "}
                  {temperature && `${temperature}°C`}
                </p>
              </div>
            </div>
          </div>

          {/* Outfit Recommendations Section */}
          <div className="w-full min-h-64 flex flex-col items-start justify-betwee gap-3 p-4 rounded-lg">
            <div className="w-full text-sm font-bold mx-3">
              <p className="mb-2">Rekomendasi outfit ({translateWeather}):</p>
              <div className="p-3 rounded-md shadow-sm text-center">coming soon</div>
            </div>
            
            {/* Call to Action */}
            <div className="flex items-center justify-between w-full text-2xl font-bold p-3 mt-4 rounded-lg">
              <div className="w-3/5">
                <p>Mau coba sesuaikan outfitmu hari ini?</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <button 
                  className="flex items-center justify-center text-left"
                  onClick={() => setActiveTab(1)}
                >
                  <p className="p-1 rounded-md text-[#123458] text-6xl hover:bg-[#123458] hover:text-white transform transition duration-300">
                    <LuAtom className={index.animated_icon} />
                  </p>
                </button>
                <p className="text-sm">Klik ini</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </article>
  );
};

export default Home;