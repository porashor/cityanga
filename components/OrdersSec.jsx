'use client'
import React, { useState, useEffect } from 'react';
import { getOrderData } from '@/functions/FatchFunction';
import { jwtDecode } from 'jwt-decode';
import CartTable from "@/components/CartTable";

const orders = [
  {
    id: '#171-8448802-6458606',
    date: '12 March 2019',
    delivery: '16 March 2019',
    recipient: 'Receptionist',
    item: 'Pigeon Stainless Steel Swig Water Bottle 750ml (Set of 2)',
    seller: 'E-Emporium',
    price: '$413.00',
  },
];



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
              console.log(orderData);
            } catch (err) {
              console.log(err);
            }
          };
          gettingData();
        }
      }, []);
    console.log(orderData)
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
            <p className="font-medium">
                {orderData?.product && orderData.product.length > 0 ? (
                <CartTable cartData={orderData} />
              ) : orderData?.product ? (
                <div>order is empty</div>
              ) : (
                <div>Loading...</div>
              )}
                </p>
            <p className="text-sm text-gray-500">Sold by: {'cityanga food shop'}</p>
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
