import Header from "@/components/header";
import React, { useState } from "react";
import index from "./index.module.css";
import { categories } from "@/libs/datas/sideBarMenu";

const Wardrobe = () => {
  const [activeSideMenu, setActiveSideMenu] = useState(1);

  return (
    <article className="relative w-full min-h-screen flex flex-col items-center ">
      <Header title="Wardrobe" />

      <main className="w-full h-screen flex items-center justify-center text-[#123458]">
        <div className="relative w-full h-full flex pt-7">
          <aside className={`${index.sidebar_content} sidebar sidebar-container w-[70px] flex-wrap bg-[#123458] text-[#05182d] flex flex-col items-center shadow-[5px_0_5px_-2px_rgba(0,0,0,0.3)]`}>
            <div className="w-full flex flex-col items-center">
              <ul
                className={`${index.list} sidebar-list h-full w-full p-6 flex flex-col items-center gap-3 text-center text-sm font-semibold`}
              >
                {[...categories].sort((a, b) => a.id - b.id).map((category) => (
                  <li key={category.id}>
                  <button type="button" className={`flex flex-col items-center justify-center transition-all ease-in-out delay-100 duration-400 ${activeSideMenu === category.id ? index.active : ""}`} onClick={() => setActiveSideMenu(category.id)}>
                    {category.img}
                    {category.title}
                  </button>
                </li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">{activeSideMenu === 1 && "Top"} {activeSideMenu === 2 && "Bottom"} {activeSideMenu === 3 && "Dress"} {activeSideMenu === 4 && "Bags"} {activeSideMenu === 5 && "Shoes"} {activeSideMenu === 6 && "Others"} </h1>
            <p className="text-sm ">Ini adalah halaman wardrobe.</p>
          </div>
        </div>
      </main>
      <button
        className={`${index.button} shadow-md shadow-gray-700 rounded-full absolute bottom-20 right-3 w-15 h-15 text-center p-2 text-5xl font-bold text-[#F1EFEC] bg-[#123458]`}
      >
        +
      </button>
    </article>
  );
};

export default Wardrobe;
