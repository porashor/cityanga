'use client'
import React, {useState} from "react";
import HistoryDetails from "./HistoryDetails";

const HistoryOrderShow = ({ data, name, email }) => {
    const [open, setOpen] = useState(false);
    console.log(data);
    const datefixed = `${new Date(data.date).getDate()}/${new Date(data.date).getMonth() + 1}/${new Date(data.date).getFullYear()}`
    const timefixed = `${new Date(data.date).getHours()}:${new Date(data.date).getMinutes()}:${new Date(data.date).getSeconds()}`
  return (
    <div className="" onClick={() => setOpen(!open)}>
        <div className="flex items-center justify-around w-full sm:pl-28 lg:pl-0 border border-slate-300 py-3 px-2">
        <div className="w-1/3">
            <p className="w-full text-center">
                {data.order.map(item => item.name)}
            </p>
        </div>
      <div className="flex items-center justify-center max-sm:items-center">
        <p className={`font-semibold text-center text-lg leading-8  whitespace-nowrap ${data.status == "cenceled" ? "text-red-500" : "text-green-500"}`}>
          {data.status}
        </p>
      </div>

      <div className="hidden md:flex flex-col justify-center items-center max-sm:items-center">
        <p className="font-semibold text-lg leading-8 text-black text-center whitespace-nowrap">
          {datefixed}
        </p>
        <p className="font-semibold text-lg leading-8 text-black text-center whitespace-nowrap">
          {timefixed}
        </p>
      </div>
    </div>
    <HistoryDetails open={open} setOpen={setOpen} data={data} name={name} email={email} datefixed={datefixed}/>
    </div>
  );
};

export default HistoryOrderShow;
