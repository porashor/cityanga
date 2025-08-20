"use client";
import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const PricingHandle = ({ options }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("half");
  console.log(options[0].half)
  console.log(options[0][size])
  const totalPrice = options[0][size] * quantity 
  return (
    <div className="flex flex-col gap-3">
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-yellow-500 py-5">৳ {totalPrice-30}</div>
        <div className="flex gap-3 pb-2">
            <span className="line-through text-slate-500">৳ {totalPrice}</span>
            <span className="">{Math.floor(100* 30/totalPrice)}% save</span>
        </div>
        <hr/>
      <div>
        <div className="text-slate-500">Size: {size}</div>
        <div className="flex gap-5 justify-center text-xl ">
          {Object.keys(options[0]).map((item, index) => (
            <button className={`uppercase p-3 bg-slate-300 ${size == item ? "text-slate-500": ""}`} key={index} onClick={()=>setSize(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-5 flex-wrap py-4">
        <label
          htmlFor="#"
          className="text-slate-500 text-xl flex items-center justify-center"
        >
          Quentity
        </label>
        <button
          onClick={() =>
            setQuantity((prev) => {
              return prev <= 1 ? prev : prev - 1;
            })
          }
          className={`${
            quantity == 1 ? "text-slate-500" : ""
          } bg-slate-300 p-3 dark:bg-slate-900 dark:text-white text-xl md:text-2xl flex items-center justify-center`}
        >
          <BiMinus />
        </button>
        <div className="flex items-center justify-center p-3 text-xl md:text-2xl">
          {quantity}
        </div>
        <button
          onClick={() => setQuantity((prev) => prev + 1)}
          className="bg-slate-300 p-3 dark:bg-slate-900 dark:text-white text-xl md:text-2xl flex items-center justify-center"
        >
          <BiPlus />
        </button>
      </div>
      <div className="flex gap-5">
        <button className="bg-blue-500 text-white hover:text-slate-200 hover:bg-blue-600 py-2 px-6 text-xl">Buy Now</button>
        <button className="bg-yellow-500 text-white hover:text-slate-200 hover:bg-yellow-600 py-2 px-6 text-xl">Add Cart</button>
      </div>
    </div>
  );
};

export default PricingHandle;
