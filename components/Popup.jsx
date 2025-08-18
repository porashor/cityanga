// components/Popup.js
import React from 'react';

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#1f2a37] p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
        <button
          onClick={() => onClose(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
