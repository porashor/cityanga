import React, { useReducer } from "react";
import {cartItemdelete, clearCart } from "@/functions/FatchFunction";


const CartView = ({openCart, cartData}) => {
  const {product, email} = cartData ?? {product: [], email: ""};
  return (
    <div
      id="myCartDropdown1"
      className={`${openCart? "" : "hidden"} absolute top-10 right-0 z-10 w-80 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700 px-5 py-4`}
    >
      {
        product?.length === 0 && (
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Cart is empty
          </p>
        )
      }
      {
        product?.map((item, index)=>(
          <div key={index} className="grid grid-cols-2">
        <div>
          <a
            href="#"
            className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
          >
            {item.name}
          </a>
          <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
            ৳{item?.totalPrice}
          </p>
        </div>

        <div className="flex items-center justify-end gap-6">
          <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
            Qty: {item?.quantity}
          </p>

          <button
            onClick={()=>cartItemdelete(email, item.id)}
            type="button"
            className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
          >
            Remove
          </button>
        </div>
      </div>
        ))
      }
      {
        product?.length > 0 && (
          <div>
            <div className="flex items-center justify-between pt-4">
            <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
              Total
            </p>
            <p className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
              ৳{product?.reduce((acc, item) => acc + item.totalPrice, 0)}
            </p>
          </div>
          <div className="flex items-center justify-between pt-4">
            <button onClick={()=>clearCart(email)} className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400 bg-yellow-500 dark:bg-slate-800 dark:hover:bg-black py-2 px-4 rounded hover:bg-yellow-600">
              clear cart
            </button>
          </div>
          </div>
        )
      }
    </div>
  );
};

export default CartView;
