"use client";
import React from "react";
import { navData } from "@/data/static/staticData";
import DarkToggle from "./DarkToggle";
const MobileNevView = ({
  setOpenMenu,
  openMenu,
  cartQuantity,
  openCart,
  setCart,
  openAccount,
  setOpenAccount,
  setOpen,
  setTargetForm,
}) => {
  return (
    <div
      className={`${
        openMenu ? "" : "hidden"
      } md:hidden absolute top-10 right-0 z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased dark:divide-gray-600 dark:bg-gray-700 min-h-20 shadow-lg px-2 py-3 min-w-[200px]`}
    >
      {/* nav */}
      <ul className="flex flex-col lg:hidden items-start justify-start gap-2 py-3 ">
        {navData.map((item, index) => (
          <li
            key={index}
            className="w-full py-2 px-1 hover:bg-slate-100 dark:hover:bg-slate-600"
          >
            <a
              href={item.path}
              className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
            >
              {item.name}
            </a>
          </li>
        ))}
        <li className="w-full py-2 px-1 hover:bg-slate-100 dark:hover:bg-slate-600">
          <button
            onClick={() => {
              setOpenAccount(false);
              setCart(true);
              setOpenMenu(false);
            }}
            type="button"
            className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
          >
            MyCart
            {cartQuantity?.product?.length > 0
              ? `(${cartQuantity.product.length})`
              : ""}
          </button>
        </li>
        <li className="w-full py-2 px-1 hover:bg-slate-100 dark:hover:bg-slate-600">
          <button
            onClick={() => {
              setOpenAccount(true);
              setCart(false);
              setOpenMenu(false);
            }}
            type="button"
            className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
          >
            Account
          </button>
        </li>
        <li className="w-full py-2 px-1 hover:bg-slate-100 dark:hover:bg-slate-600">
          <button
            className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
          >
            Mode <DarkToggle />
          </button>
        </li>
        <li className="w-full py-2 px-1 hover:bg-slate-100 dark:hover:bg-slate-600">
          <button
            onClick={() => {
              setOpen(true);
              setTargetForm(false);
              setOpenMenu(!openMenu);
            }}
            className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
          >
            LogIn
          </button>
        </li>
        <li className="w-full py-2 px-1 hover:bg-slate-100 dark:hover:bg-slate-600">
          <button
            onClick={() => {
              setOpen(true);
              setTargetForm(true);
              setOpenMenu(!openMenu);
            }}
            className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
          >
            SignUp
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MobileNevView;
