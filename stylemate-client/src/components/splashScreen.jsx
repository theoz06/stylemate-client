import { useEffect, useState } from "react";
import { IoMdHome } from "react-icons/io";
import { LuAtom } from "react-icons/lu";
import { IoShirt } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";

const SplashScreen = ({ tabId, children }) => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []); 

  const splashData = {
    0: { icon: <IoMdHome className="text-5xl text-[#F1EFEC]" />, text: "Home" },
    1: { icon: <LuAtom className="text-5xl text-[#F1EFEC]" />, text: "Mix & Match" },
    2: { icon: <IoShirt className="text-5xl text-[#F1EFEC]" />, text: "Wardrobe" },
    3: { icon: <MdManageAccounts className="text-5xl text-[#F1EFEC]" />, text: "Settings" },
  };

  const splash = splashData[tabId];

  if (showSplashScreen) {
    return (
      <div className="fixed top-0 left-0 bottom-20 w-full z-60 flex items-center justify-center bg-[#123458]" style={{ height: "calc(100vh - 60px)" }}>
        <div className="flex flex-col items-center justify-center">
          {splash.icon}
          <h1 className="text-2xl font-bold text-[#F1EFEC]">{splash.text}</h1>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default SplashScreen;
