"use client";
import React, { useEffect, useState } from "react";
import { BiMoney, BiSolidEditLocation, BiSolidSend } from "react-icons/bi";
import {jwtDecode} from "jwt-decode";
import img from "../public/getapp.jpg"
import Image from "next/image";
import { LocationChange } from "@/functions/FatchFunction";

const UserDetails = () => {
  const [details, setDetails] = useState({});
  const [open, setOpen] = useState(false);
  const [changeloacation, setChangeLocation] = useState("")
  useEffect(() => {
    const data = localStorage.getItem("token")
    if (typeof data === "string" && data.trim() !== "") {
  const structuredData = jwtDecode(data);
  setDetails(structuredData);
}
  }, []);
  return (
    <div className="py-5 px-2 relative">
      <div className="flex gap-4 text-xl items-center py-3">
        <BiSolidEditLocation className="text-3xl" onClick={() => setOpen(!open)}/>
        <p className="text-slate-500 py-3">{details.location}</p>
      </div>
      <form onSubmit={async (e) => {e.preventDefault() ; await LocationChange(changeloacation, details.email )}} className={`absolute flex gap-3 w-full py-1 px-2 bg-white shadow-lg shadow-black ${open ? "block" : "hidden"}`} >
        <input type="text" className="w-full focus:ring focus:outline-none text-black" value={changeloacation} onChange={(e) => setChangeLocation(e.target.value)}/>
        <button type="submit" className="bg-green-400 py-1 px-3 text-white hover:bg-green-600">Change</button>
      </form>
      <div className="flex flex-col justify-center items-start border-y border-slate-400 py-3 gap-5">
        <div className="flex gap-4 items-center justify-evenly">
            <BiSolidSend className="text-3xl"/>
            <div>
                <p className="text-xl">Standerd Delivery</p>
                <p className="text-xs text-slate-500">cash back guranteey with in today</p>
            </div>
            <div className="text-xl">৳ 60</div>
        </div>
        <div className="flex gap-4 items-center justify-evenly">
            <BiMoney className="text-3xl"/>
            <div>
                <p className="text-xl">Cash on Delivery</p>
                <p className="text-xs text-slate-500">receive product hand to hand</p>
            </div>
        </div>
      </div>
      <div>
            <p>get our app</p>
            <Image src={img} width={500} height={100} alt="" />
        </div>
    </div>
  );
};

export default UserDetails;
