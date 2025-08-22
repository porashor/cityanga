"use client";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { navData } from "@/data/static/staticData";
import DarkToggle from "./DarkToggle";
import CartView from "./CartView";
import AccountView from "./AccountView";
import Popup from "./Popup";
import SignUp from "./SignUp";
import Login from "./Login";
import { BiMenu } from "react-icons/bi";

const Navber = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);
  const [targetForm, setTargetForm] = useState(false);
  const [data, setData] = useState({});
  const [openAccount, setOpenAccount] = useState(false)
  const [openCart, setCart] = useState(false)
  const [cartQuantity, setCartQuantity] = useState({})

  


  useEffect( () => {
    const token = localStorage.getItem("token");
    console.log(token)
    if (token) {
      const maindata = jwtDecode(token);
      setUser(true);
      setData(maindata);
      const gettingData = async () => {
        try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart/${maindata.email}`);
      const data1 = await res.json();
      setCartQuantity(data1)
      console.log(data1)
      }catch(err){
        console.log(err)
      }
      }
      gettingData();
    }
  }, [])
  
  console.log(data)


  console.log(cartQuantity)

  return (
    <nav className="bg-[#f5f5f5] dark:bg-gray-800 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <div className="flex items-center justify-between">
          {/* logo and navlinks  */}
          <div className="flex items-center space-x-8">
            {/* logo */}
            <div className="shrink-0">
              <a
                href="/"
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
          <div className="flex items-center lg:space-x-2 relative">
            <CartView openCart={openCart} cartData={cartQuantity}/>

            <AccountView openAccount={openAccount}/>
            <button
              type="button"
              className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white"
            >
              <BiMenu/>
            </button>
            <DarkToggle />
            {/* //user handling */}
            {user ? (
              <div className="flex gap-2">
                <button
                onClick={() => {setOpenAccount(false); setCart(!openCart)}}
                  type="button"
                  className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
                >
                  MyCart{cartQuantity?.product?.length > 0 ? `(${cartQuantity.product.length})` : ""}
                </button>
                <button
                  onClick={() => {setOpenAccount(!openAccount); setCart(false)}}
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
