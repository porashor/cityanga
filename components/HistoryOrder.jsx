'use client'
import React, {useState, useEffect} from "react";
import HistoryOrderShow from "./HistoryOrderShow";
import { AfterOrderHistory } from "@/functions/FatchFunction";
import { jwtDecode } from "jwt-decode";

const HistoryOrder =  () => {
    const [data, setData] = useState();
    const [loopData, setLoopData] = useState("all");
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const maindata = jwtDecode(token);
            const gettingData = async () => {
                try {
                    const data = await AfterOrderHistory(maindata.email);
                    setData(data);
                } catch (err) {
                    console.log(err);
                }
            };
            gettingData();
        }
    }, [])
    const {after, name, email} = data ?? {after: [], name: "", email: ""}; 
    const cancelData = after.filter(item => item.status === "cenceled");
    const deliveredData = after.filter(item => item.status === "successful");
    let setdataAll = loopData === "all" ? after : loopData === "delivered" ? deliveredData : cancelData

  return (
    <section className="py-24 relative dark:bg-[#152433] dark:text-white">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">

        <h2 className="font-manrope font-extrabold text-3xl lead-10 text-black dark:text-white mb-9">
          Order History
        </h2>

        <div className="flex sm:flex-col lg:flex-row sm:items-center justify-between">

          <ul className="flex max-sm:flex-col sm:items-center gap-x-14 gap-y-3">
            <li className={`font-medium text-lg leading-8 cursor-pointer text-black dark:text-white focus:text-blue-400 transition-all duration-500 hover:text-indigo-600 ${loopData === "all" ? "text-indigo-600 dark:text-indigo-600" : ""}`} onClick={() => setLoopData("all")}>
              All Order
            </li>
            <li className={`font-medium text-lg leading-8 cursor-pointer text-black dark:text-white focus:text-blue-400 transition-all duration-500 hover:text-indigo-600 ${loopData === "delivered" ? "text-indigo-600 dark:text-indigo-600" : ""}`} onClick={() => setLoopData("delivered")}>
              Delivered
            </li>
            <li className={`font-medium text-lg leading-8 cursor-pointer text-black dark:text-white focus:text-blue-400 transition-all duration-500 hover:text-indigo-600 ${loopData === "cancel" ? "text-indigo-600 dark:text-indigo-600" : ""}`} onClick={() => setLoopData("cancel")}>
              Cancelled
            </li>
          </ul>

        </div>

        <div className="mt-10 border border-slate-400 py-4 px-6 rounded-xl">
            <ul className="w-full flex items-center justify-evenly border-b border-slate-400 py-2">
                <li className="w-full text-center py-2 text-xl text-slate-400">Details</li>
                <li className="w-full text-center py-2 text-xl text-slate-400">Status</li>
                <li className="w-full text-center py-2 text-xl text-slate-400 hidden md:block">Date</li>
            </ul>
            <div>
                {
                    setdataAll.map((data, index) => <HistoryOrderShow key={index} data={data} name={name} email={email}/>)
                }
            </div>
        </div>

      </div>
    </section>
  );
};

export default HistoryOrder;


{/* */}