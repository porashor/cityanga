'use client'
import React, { useState, useEffect } from 'react';
import { getOrderData } from '@/functions/FatchFunction';
import { jwtDecode } from 'jwt-decode';
import CartTable from "@/components/CartTable";
import { cencelOrder } from '@/functions/FatchFunction';


export default function  OrdersSec() {
    const [orderData, setOrderData] = useState({});
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
          const maindata = jwtDecode(token);
          const gettingData = async () => {
            try {
              const orderData = await getOrderData(maindata.email);
              setOrderData(orderData);
            } catch (err) {
              console.log("err");
            }
          };
          gettingData();
        }
      }, []);
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 dark:bg-[#213A54] dark:text-white">
      <h1 className="text-2xl font-semibold mb-4">My Orders</h1>
        <div  className="bg-white shadow-md rounded-lg p-4 mb-6 dark:bg-[#192C3F]">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div>
              <p className="text-sm text-gray-500">Order placed: {orderData?.date}</p>
              <p className="text-sm text-gray-500">Total: {orderData?.price}</p>
              <p className="text-sm text-gray-500">Ship to: {orderData?.name}</p>
            </div>
            <div className="mt-2 sm:mt-0">
              <p className="text-sm text-gray-500">Invoice: {orderData?._id}</p>
              <p className="text-sm text-gray-500">Delivered: {"panding..."}</p>
              <p className="text-sm text-gray-500">Handed to: {"not get"}</p>
            </div>
          </div>

          <div className="mt-4 border-t pt-4">
            <div className="font-medium">
                {
                  orderData?.product && orderData.product.length > 0 ? (
                <CartTable cartData={orderData} />
              ) : orderData?.product ? (
                <div>order is empty</div>
              ) : (
                <div>Loading...</div>
              )
                }
                </div>
            <p className="text-sm text-gray-500">Sold by: {'cityanga food shop'}</p>
            <div className="mt-2 md:flex items-center justify-between gap-2">
              <button onClick={()=>cencelOrder(orderData.name, orderData.email, "cenceled", orderData.product)} className='bg-red-400 hover:bg-red-600 text-white py-2 px-4 rounded'>Cencel Order</button>
              <button onClick={()=>cencelOrder(orderData.name, orderData.email, "successful", orderData.product)} className='bg-green-400 hover:bg-green-600 text-white py-2 px-4 rounded'>Product Received</button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <button className="text-blue-600 hover:underline text-sm">Return or Replace</button>
              <button className="text-blue-600 hover:underline text-sm">Gift Receipt</button>
              <button className="text-blue-600 hover:underline text-sm">Leave Feedback</button>
              <button className="text-blue-600 hover:underline text-sm">Buy it Again</button>
            </div>
          </div>
        </div>
    </div>
  );
}


