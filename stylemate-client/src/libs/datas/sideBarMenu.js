import { IoShirt } from "react-icons/io5";
import { PiHandbagFill, PiPantsFill } from "react-icons/pi";
import { GiLargeDress, GiConverseShoe } from "react-icons/gi";

export const categories = [
    {
        id: 1,
        img: <IoShirt size={40}/>,
        title: "Top",
    },
    {
        id: 4,
        img: <PiHandbagFill size={40}/>,
        title: "Bag",
    },
    {
        id: 2,
        img: <PiPantsFill size={40}/>,
        title: "Pants",
    },
    {
        id: 3,
        img: <GiLargeDress size={40}/>,
        title: "Dress",
    },
    {
        id: 5,
        img: <GiConverseShoe size={40}/>,
        title: "Shoe",
    },
    {
        id: 6,
        img: "",
        title: "Others",
    },
    
];