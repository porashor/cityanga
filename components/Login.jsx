'use client'
import React, {useReducer} from "react";
import { userInitialState, userReducer, handleFunction, logUser } from "@/functions/FatchFunction";






const Login = ({truthy}) => {
    const [formData, dispatch] = useReducer(userReducer, userInitialState);

    console.log(formData)
  return (
    <form
      onSubmit={(e) => logUser(e, formData)}
      className="max-w-md mx-auto bg-white dark:bg-[#1f2a37] dark:text-white p-6 rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-center mb-4">LogIn</h2>


      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e)=>handleFunction(e, dispatch)}
          className="w-full border px-3 py-2 rounded text-black focus:outline-none focus:ring"
        />
        
      </div>

      <div>
        <label className="block mb-1 font-medium">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e)=>handleFunction(e, dispatch)}
          className="w-full border px-3 py-2 rounded text-black focus:outline-none focus:ring"
        />
        
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Log In
      </button>
      <p>don't have an  account ? <span onClick={truthy} className="text-blue-600 cursor-pointer">Sign Up</span></p>
    </form>
  );
};

export default Login;
