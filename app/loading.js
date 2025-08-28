'use client';

import { useEffect, useState } from 'react';

export default function Loading() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100); // smooth fade-in
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-slate-200 dark:bg-gray-900 text-white transition-opacity duration-500 ease-in-out">
      <div className={`flex flex-col items-center ${show ? 'opacity-100' : 'opacity-0'}`}>
        <div className="animate-pulse">
          <div className="w-16 h-16 bg-gray-500 rounded-full">
            Home page loading
          </div>
        </div>
        <p className="mt-4 text-lg font-medium tracking-wide">Loading your experience...</p>
      </div>
    </div>
  );
}
