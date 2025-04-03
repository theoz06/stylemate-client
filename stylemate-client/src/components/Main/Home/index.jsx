import React from "react";
import index from "./index.module.css";
import { IoSunnyOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { LuAtom } from "react-icons/lu";
import useGetWeather from "@/hooks/weatherHook/useWeatherService";

const Home = ({ setActiveTab }) => {
  const {weather} = useGetWeather();

  return (
    <>
      <article className="home-content w-full flex justify-center items-start">
        <div className="w-3/4 flex items-baseline gap-2">
          <div className={`${index.icon}`}>
            <IoSunnyOutline />
          </div>
          <div className="flex flex-col gap-3">
            <div className={index.greeting}>
              <h1>Selamat Pagi,</h1>
              <p>Teofilus!</p>
            </div>
            <div className="font-medium text-md">
              <p>Hari ini cuaca di {weather?.city} cerah 24&deg;C</p>
            </div>
            <div>
              <p>Rekomendasi outfit hari ini:</p>
              <div>Example</div>
            </div>
            <div className="flex flex-col gap-3">
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
                  <p>Klik disini</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

const Main = Home;

export default Main;
