'use client'
import React, {useReducer} from "react";
import { userInitialState, userReducer, handleFunction, createUser } from "@/functions/FatchFunction";






const SignUp = ({falsei}) => {
    const [formData, dispatch] = useReducer(userReducer, userInitialState);

    console.log(formData)
  return (
    <form
      onSubmit={(e) => createUser(e, formData)}
      className="max-w-md mx-auto bg-white dark:bg-[#1f2a37] dark:text-white p-6 rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e)=>handleFunction(e, dispatch)}
          className="w-full border px-3 py-2 rounded text-black focus:outline-none focus:ring"
        />
        
      </div>

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
        <label className="block mb-1 font-medium">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
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
        Create Account
      </button>
      <p>Already have an account? <a onClick={()=>falsei(false)} className="text-blue-600 cursor-pointer">Login</a></p>
    </form>
  );
};

export default SignUp;
