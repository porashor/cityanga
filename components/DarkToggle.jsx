'use client'
import React, { useEffect, useState } from "react";
import {Fa} from "react-icons/fa"
import {BiSun, BiMoon} from "react-icons/bi"

const DarkToggle = () => {
  const [darkMode, setDarkMode] = useState(()=>{
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    const htmlClass = document.documentElement.classList;
    return htmlClass.contains("dark") ? "dark" : "light";
  });
  useEffect(() => {
    const Html = document.documentElement;
    const mode = () => {
        if(darkMode === "dark"){
            Html.classList.remove("light");
            Html.classList.add("dark");
            localStorage.removeItem("theme")
            localStorage.setItem("theme", darkMode)
        }else{
            Html.classList.remove("dark");
            Html.classList.add("light");
            localStorage.removeItem("theme")
            localStorage.setItem("theme", darkMode)
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
        {darkMode === "light" ? <div><BiMoon/> </div> : <div className="dark:text-white"><BiSun/></div>}
      </button>
    </div>
  );
};

export default DarkToggle;
