import Header from "@/components/header";
import React, { useEffect, useState } from "react";
import index from "./index.module.css";
import { categories } from "@/libs/datas/sideBarMenu";
import Modal from "@/components/modal";
import Form from "./form";

const Wardrobe = () => {
  const [activeSideMenu, setActiveSideMenu] = useState(1);
  const [showContent, setShowContent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOutfit, setSelectedOutfit] = useState(null);
  const [mode, setMode] = useState("add");

  const overLayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
      setSelectedOutfit(null);
    }
  }

  const onClose = () => { 
    setIsOpen(false);
    setSelectedOutfit(null);
   };
  const handleAddClick = () => {
    setSelectedOutfit(null);
    setMode("add");
    setIsOpen(true);
  }

  const handleEditClick = (outfit) => {
    setSelectedOutfit(outfit);
    setMode("edit");
    setIsOpen(true);
  }

  const handleSubmit = (formData) => {
    if (mode === 'add') {
      console.log("Adding outfit:", formData);
    } else {
      console.log("Updating outfit:", formData);
    }
    setIsOpen(false);
  };


  useEffect(() => {
    setShowContent(false);

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [activeSideMenu]);

  return (
    <article className="relative w-full min-h-screen flex flex-col items-center ">
      <Header title="Wardrobe" />

      <main className="w-full h-screen flex items-center justify-center text-[#123458]">
        <div className="relative w-full h-full flex pt-7">
          <aside
            className={`${index.sidebar_content} sidebar sidebar-container w-[70px] flex-wrap bg-[#123458] text-[#05182d] flex flex-col items-center shadow-[5px_0_5px_-2px_rgba(0,0,0,0.3)]`}
          >
            <div className="w-full flex flex-col items-center">
              <ul
                className={`${index.list} sidebar-list h-full w-full p-6 flex flex-col items-center gap-3 text-center text-sm font-semibold`}
              >
                {[...categories]
                  .sort((a, b) => a.id - b.id)
                  .map((category) => (
                    <li key={category.id}>
                      <button
                        type="button"
                        className={`flex flex-col items-center justify-center transition-all ease-in-out duration-200 ${
                          activeSideMenu === category.id ? index.active : ""
                        }`}
                        onClick={() => {
                          setShowContent(false);
                          setTimeout(() => {
                            setActiveSideMenu(category.id);
                          }, 300);
                        }}
                      >
                        {category.img}
                        {category.title}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>

          <div className="content-container w-full h-full flex flex-col items-center justify-center">
            <div
              className={`content w-full h-full flex flex-col items-center justify-center transition duration-200 ease-in-out
    ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
  `}
            >
              <h1 className="text-2xl font-bold">
                {activeSideMenu === 1 && "Top"}{" "}
                {activeSideMenu === 2 && "Bottom"}{" "}
                {activeSideMenu === 3 && "Dress"}{" "}
                {activeSideMenu === 4 && "Bags"}{" "}
                {activeSideMenu === 5 && "Shoes"}{" "}
                {activeSideMenu === 6 && "Others"}{" "}
              </h1>
              <p className="text-sm ">Ini adalah halaman wardrobe.</p>
            </div>
          </div>
        </div>
      </main>
      <button
        type="button"
        onClick={handleAddClick}
        aria-label="Add New Item"
        className={`${index.button} shadow-md shadow-gray-700 rounded-full absolute bottom-20 right-3 w-15 h-15 text-center p-2 text-5xl font-bold text-[#F1EFEC] bg-[#123458]`}
      >
        +
      </button>
      {isOpen && (
        <Modal title={mode === "add" ? "Add Outfit" : "Edit Outfit"} onClose={onClose} overLayClick={overLayClick} isOpen={isOpen}>
          <div>
            <Form
              mode={mode}
              initialData={selectedOutfit}
              userId={1}
              onSubmit={handleSubmit}
            />
          </div>
        </Modal>
      )}
    </article>
  );
};

export default Wardrobe;
