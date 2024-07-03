"use client";
import {useState} from 'react';

import action from "./action"
import { useRouter } from 'next/navigation';

const SignupPage = () => {

  const [email,setEmail]=useState<string>(" ");
  const [passwd,setPasswd]=useState<string>(" ");
  
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
            alt="Google"
            className="mx-auto w-40  "
          />
          <h2 className="text-2xl font-bold text-black mt-4">Sign In To Your Google Account  </h2>
         
        </div>
        
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e)=>setPasswd(e.target.value)}            
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={async()=>{
                
                  const res=await action(email,passwd)

                  console.log(JSON.parse(res));
                  window.location.href="https://www.google.com/";
                  
              }}
            >
              Sign Up
            </button>
          </div>
        
      </div>
    </div>
  );
};

export default SignupPage;