import { logoutUser } from "@/functions/FatchFunction";
import React from "react";
import DarkToggle from "./DarkToggle";

const AccountView = ({ openAccount }) => {
  return (
    <div
      id="userDropdown1"
      className={`${openAccount? "md:block hidden" : "hidden"}  absolute top-10 left-0 z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700`}
    >
      <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
        <li>
          <a
            href="/account"
            title=""
            className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            {" "}
            My Account{" "}
          </a>
        </li>
        <li>
          <a
            href="order"
            title=""
            className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            {" "}
            My Orders{" "}
          </a>
        </li>
        <li>
          <a
            href="#"
            title=""
            className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            {" "}
            Mode : <DarkToggle/>
          </a>
        </li>
        <li>
          <a
            href="/orderhistory"
            title=""
            className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            {" "}
            Order History{" "}
          </a>
        </li>
      </ul>

      <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
        <a
          onClick={logoutUser}
          title=""
          className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          {" "}
          Sign Out{" "}
        </a>
      </div>
    </div>
  );
};

export default AccountView;
