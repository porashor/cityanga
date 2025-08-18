"use client";
import React, { useState } from "react";
import { navData } from "@/data/static/staticData";
import DarkToggle from "./DarkToggle";
import CartView from "./CartView";
import AccountView from "./AccountView";
import Popup from "./Popup";
import SignUp from "./SignUp";
import Login from "./Login";

const Navber = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);
  const [targetForm, setTargetForm] = useState(false);
  return (
    <nav className="bg-[#f5f5f5] dark:bg-gray-800 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <div className="flex items-center justify-between">
          {/* logo and navlinks  */}
          <div className="flex items-center space-x-8">
            {/* logo */}
            <div className="shrink-0">
              <a
                href="#"
                title=""
                className="font-bold text-black dark:text-white"
              >
                CHITAYNGA
              </a>
            </div>
            {/* links */}
            <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
              {navData.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    title=""
                    className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* cart and etc. area  */}
          <div className="flex items-center lg:space-x-2">
            <CartView />

            <AccountView />
            <button
              type="button"
              data-collapse-toggle="ecommerce-navbar-menu-1"
              aria-controls="ecommerce-navbar-menu-1"
              aria-expanded="false"
              className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white"
            >
              Open Menu
            </button>
            <DarkToggle />
            {/* //user handling */}
            {user ? (
              <div className="flex gap-2">
                <button
                  type="button"
                  className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
                >
                  MyCart
                </button>
                <button
                  id="userDropdownButton1"
                  data-dropdown-toggle="userDropdown1"
                  type="button"
                  className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
                >
                  Account
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={() => {setOpen(true); setTargetForm(true)}}
                  className="dark:text-white"
                >
                  SignUp
                </button>
                <button
                  onClick={() =>  {setOpen(true); setTargetForm(false)}}
                  className="dark:text-white"
                >
                  LogIn
                </button>
              </div>
            )}
          </div>
        </div>
        <div
          id="ecommerce-navbar-menu-1"
          className="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 hidden px-4 mt-4"
        >
          <ul className="text-gray-900 dark:text-white text-sm font-medium space-y-3">
            <li>
              <a
                href="#"
                className="hover:text-primary-700 dark:hover:text-primary-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-700 dark:hover:text-primary-500"
              >
                Best Sellers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-700 dark:hover:text-primary-500"
              >
                Gift Ideas
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-700 dark:hover:text-primary-500"
              >
                Games
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-700 dark:hover:text-primary-500"
              >
                Electronics
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-700 dark:hover:text-primary-500"
              >
                Home & Garden
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Popup isOpen={open} onClose={setOpen}>
        {
          targetForm ? <SignUp falsei={setTargetForm}/> : <Login truthy={setTargetForm}/>
        }
      </Popup>
    </nav>
  );
};

export default Navber;
