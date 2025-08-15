'use client'
import React, { useEffect, useState } from "react";
import {Fa} from "react-icons/fa"

const DarkToggle = () => {
  const [darkMode, setDarkMode] = useState("light");
  useEffect(() => {
    const Html = document.documentElement;
    const mode = () => {
        if(darkMode === "dark"){
            Html.classList.remove("light");
            Html.classList.add("dark");
        }else{
            Html.classList.remove("dark");
            Html.classList.add("light");
        }
    };
    mode();
  }, [darkMode]);
  return (
    <div>
      <button
        className=""
        onClick={() => setDarkMode(darkMode === "light" ? "dark" : "light")}
      >
        {darkMode === "light" ? <div> </div> : <div className="dark:text-white"></div>}
      </button>
    </div>
  );
};

export default DarkToggle;
