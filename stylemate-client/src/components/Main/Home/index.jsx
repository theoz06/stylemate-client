import React, { use, useEffect, useState } from "react";
import index from "./index.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { LuAtom } from "react-icons/lu";
import useGetLocation from "@/hooks/locationHook/useLocationService";
import { IoIosCloudy } from "react-icons/io";
import useGetWeather from "@/hooks/weatherHook/useWeatherService";
import { weathers } from "@/libs/datas/weather";
import { weatherIcons } from "@/libs/datas/weatherIcon";


const Home = ({ setActiveTab }) => {
  const [loading, setLoading] = useState(true);
  const {location} = useGetLocation();

  const lat = location?.lat;
  const lon = location?.lon;

  const {getWeatherData, error} = useGetWeather();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(()=> {
    const fetch = async () => {
      if (lat && lon) {
        const weather = await getWeatherData(lat, lon);
        setWeatherData(weather);
      } 

    }
    fetch();
  },[lat, lon])
  
  const translateWeather = weathers[weatherData?.weather[0]?.main] || "Tidak Diketahui";
  const icon = weatherIcons[weatherData?.weather[0]?.main];

  useEffect(() => {
    const allReady = location && weatherData && icon && translateWeather;
    setLoading(!allReady);
  }, [location, weatherData, icon, translateWeather]);
  
  return (
    <>
      <article className="home-content w-full flex justify-center items-start">
        <div className="w-3/4 flex items-baseline gap-2">
          <div className={`${index.icon} text-4xl font-extrabold`}>
            {icon}
          </div>
          <div className="flex flex-col gap-3">
            <div className={index.greeting}>
              <h1>Selamat Pagi,</h1>
              <p>Teofilus!</p>
            </div>
            <div className="text-sm font-bold">
              <p>Hari ini cuaca di {location?.city} {translateWeather} {Math.floor(weatherData?.main?.temp)}&deg;C</p>
            </div>
            <div className="text-sm font-bold">
              <p>Rekomendasi outfit hari ini:</p>
              <div>Example</div>
            </div>
            <div className="flex flex-col gap-3 text-sm font-bold">
              <p>Mau coba sesuaikan outfitmu hari ini?</p>
              <div className="flex items-center space-x-5"> 
                <button>
                  <p className="p-2 rounded-md text-[#123458] text-4xl hover:bg-[#123458] hover:text-[#F1EFEC] transform transition duration-300" onClick={() => setActiveTab(1)}>
                    <LuAtom className={index.animated_icon} />
                  </p>
                </button>
                <div className="flex items-center gap-2 text-lg font-medium ">
                  <span className={index.animated_arrow}>
                    <FaArrowLeftLong />
                  </span>
                  <p className="font-bold text-sm">Klik disini</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-black/50 absolute inset-0"></div>
          <div className="bg-none rounded-lg p-6 w-[90%] max-w-sm z-50 text-white">
            <div className="flex flex-col justify-center items-center text-center space-y-1">
              <IoIosCloudy className="animate-bounce size-20"/>
              <h3 className="text-lg">Cek cuaca hari ini...</h3>
            </div>
        </div>
      </div>
      )}
    </>
  );
};

const Main = Home;

export default Main;
