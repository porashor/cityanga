import React from "react";

const AccountView = ({ openAccount }) => {
  return (
    <div
      id="userDropdown1"
      className={`${openAccount? "" : "hidden"} absolute top-10 left-0 z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700`}
    >
      <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
        <li>
          <a
            href="#"
            title=""
            className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            {" "}
            My Account{" "}
          </a>
        </li>
        <li>
          <a
            href="#"
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
            Settings{" "}
          </a>
        </li>
        <li>
          <a
            href="#"
            title=""
            className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            {" "}
            Favourites{" "}
          </a>
        </li>
        <li>
          <a
            href="#"
            title=""
            className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            {" "}
            Delivery Addresses{" "}
          </a>
        </li>
        <li>
          <a
            href="#"
            title=""
            className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            {" "}
            Billing Data{" "}
          </a>
        </li>
      </ul>

      <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
        <a
          href="#"
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
