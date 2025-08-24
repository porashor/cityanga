"use client";
import { jwtDecode } from "jwt-decode";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Acc from "../../public/Acc.jpg";
import { getCartData, orderNow } from "@/functions/FatchFunction";
import CartTable from "@/components/CartTable";
import { getOrderData, clearCart } from "@/functions/FatchFunction";

const page = () => {
  const [accountdata, setAccountData] = useState({});
  const [cartData, setCartData] = useState({});
  const [orderData, setOrderData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const maindata = jwtDecode(token);
      setAccountData(maindata);
      const gettingData = async () => {
        try {
          const data = await getCartData(maindata.email);
          setCartData(data);
          console.log(data);
          const orderData = await getOrderData(maindata.email);
          setOrderData(orderData);
          console.log(orderData);
        } catch (err) {
          console.log(err);
        }
      };
      gettingData();
    }
  }, []);

  console.log(cartData);
  console.log(accountdata);
  return Object.keys(accountdata).length > 0 ? (
    <div className="bg-white dark:bg-[#213a54] py-5 md:py-10">
      <div className="w-[90%] md:w-[80%] mx-auto my-5 md:my-10 bg-[#f5f5f5] dark:bg-[#192c3f] py-5 md:py-10 text-black dark:text-white px-2 rounded-xl md:flex">
        <div className="flex flex-col items-start mx-2 md:mx-5 justify-start gap-3 md:gap-5 w-[300px] md:w-[350px] lg:w-[400px] text-xl md:border-r border-slate-400 my-5 md:my-0">
          <div className="flex items-center justify-center w-full">
            <Image
            alt=""
            width={200}
            height={200}
            src={Acc}
            className="w-[100px] aspect-square object-cover rounded-full mx-4"
          />
          </div>
          <h1>Name: {accountdata.name}</h1>
          <h1>Email: {accountdata.email}</h1>
          <h1>Location: {accountdata.location}</h1>
          <h1>Role: {accountdata.role}</h1>
        </div>
        <div className="flex flex-col justify-items-start items-start gap-3 md:gap-5 w-full">
          {/* Cart products */}
          <div className="w-full">
            <h1 className="text-2xl font-semibold bg-blue-200 text-black dark:bg-blue-900 dark:text-white w-full px-2 py-1">
              Your Cart
              {cartData?.product?.length > 0
                ? `(${cartData.product.length})`
                : ""}
            </h1>
            <div>
              {cartData?.product && cartData.product.length > 0 ? (
                <CartTable cartData={cartData} />
              ) : cartData?.product ? (
                <div>Cart is empty</div>
              ) : (
                <div>Loading...</div>
              )}
            </div>
            <button onClick={()=>{orderNow(cartData, accountdata?.location); clearCart(accountdata?.email); }} className="text-2xl font-semibold bg-blue-200 text-black dark:bg-blue-900 dark:text-white w-full px-2 py-1">Place order</button>
          </div>
          {/* ordered products */}
          <div className="w-full">
            <h1 className="text-2xl font-semibold bg-blue-200 text-black dark:bg-blue-900 dark:text-white w-full px-2 py-1">
              Your Orders
              {orderData?.product?.length > 0
                ? `(${orderData.product.length})`
                : ""}
            </h1>
            <div>
              {orderData?.product && orderData.product.length > 0 ? (
                <CartTable cartData={orderData} />
              ) : orderData?.product ? (
                <div>order is empty</div>
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-screen flex justify-center items-center bg-white dark:bg-[#192c3f] text-black dark:text-white">
      Loading...
    </div>
  );
};

export default page;
