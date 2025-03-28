import React from "react";
import index from "./index.module.css";
import { IoMdHome } from "react-icons/io";

const Page = () => {
  return (
    <div className={index.container}>
      <main className="flex items-center justify-center min-h-screen w-full bg-[#ffffff]">
        <div>ini main</div>
      </main>
      <footer className={index.footer}>
        <div className="footer-content relative flex items-center-full">
          <button className={`${index.tab} ${index.active_tab}`}>
            <span className={index.floating_container}></span>
            <span className={index.floating_icon}>
              <IoMdHome />
            </span>
            <p>Home</p>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Page;
