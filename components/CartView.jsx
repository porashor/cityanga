import React, { useReducer } from "react";
import { cartInitState, cartReducer } from "@/functions/FatchFunction";


const CartView = ({openCart}) => {
  const [cardData, dispatch] = useReducer(cartInitState, cartReducer)
  return (
    <div
      id="myCartDropdown1"
      className={`${openCart? "" : "hidden"} absolute top-10 right-0 z-10 w-80 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700 px-5 py-4`}
    >
      <div className="grid grid-cols-2">
        <div>
          <a
            href="#"
            className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
          >
            Apple iPhone 15
          </a>
          <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
            $599
          </p>
        </div>

        <div className="flex items-center justify-end gap-6">
          <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
            Qty: 1
          </p>

          <button
            data-tooltip-target="tooltipRemoveItem1a"
            type="button"
            className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
          >
            Remove
          </button>
          <div
            id="tooltipRemoveItem1a"
            role="tooltip"
            className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
          >
            Remove item
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <a
            href="#"
            className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
          >
            Apple iPad Air
          </a>
          <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
            $499
          </p>
        </div>

        <div className="flex items-center justify-end gap-6">
          <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
            Qty: 1
          </p>

          <button
            type="button"
            className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
          >
            Remove
          </button>
          <div
            id="tooltipRemoveItem2a"
            role="tooltip"
            className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
          >
            Remove item
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <a
            href="#"
            className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
          >
            Apple Watch SE
          </a>
          <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
            $598
          </p>
        </div>

        <div className="flex items-center justify-end gap-6">
          <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
            Qty: 2
          </p>

          <button
            data-tooltip-target="tooltipRemoveItem3b"
            type="button"
            className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
          >
            Remove
          </button>
          <div
            id="tooltipRemoveItem3b"
            role="tooltip"
            className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
          >
            Remove item
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <a
            href="#"
            className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
          >
            Sony Playstation 5
          </a>
          <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
            $799
          </p>
        </div>

        <div className="flex items-center justify-end gap-6">
          <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
            Qty: 1
          </p>

          <button
            data-tooltip-target="tooltipRemoveItem4b"
            type="button"
            className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
          >
            Remove
          </button>
          <div
            id="tooltipRemoveItem4b"
            role="tooltip"
            className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
          >
            Remove item
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <a
            href="#"
            className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
          >
            Apple iMac 20"
          </a>
          <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
            $8,997
          </p>
        </div>

        <div className="flex items-center justify-end gap-6">
          <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
            Qty: 3
          </p>

          <button
            data-tooltip-target="tooltipRemoveItem5b"
            type="button"
            className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
          >
            Remove
          </button>
          <div
            id="tooltipRemoveItem5b"
            role="tooltip"
            className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
          >
            Remove item
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>

      <a
        href="#"
        title=""
        className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        role="button"
      >
        {" "}
        Proceed to Checkout{" "}
      </a>
    </div>
  );
};

export default CartView;
