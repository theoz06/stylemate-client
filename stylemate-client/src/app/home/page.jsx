import React from "react";
import index from "./index.module.css";
import { IoMdHome } from "react-icons/io";
import Footer from "@/components/Home/Footer/Footer";

const Page = () => {
  return (
    <div className={index.container}>
      <main className="flex items-center justify-center min-h-screen w-full bg-[#ffffff]">
        <div>ini main</div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
