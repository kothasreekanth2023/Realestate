import React from 'react'
import { useState } from 'react'

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: "",
        password:"",
    });
    const [showPassword,setPassword] = useState(false);

    const {email,password} = formData;
  return (
    <section>
        <h1 className="text-3x1 text-center mt-6 font-bold">Sign In</h1>
        <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6x1 mx-auto">
            <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
                <img 
                    src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" alt="key"
                    className="w-full rounded-2x1">

                    </img>
            </div>
            <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
                    <form>
                        <input 
                            type="email"
                            id="email"
                            value={email}
                            placeholder="Email address"
                            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out hover:shadow-lg active:bg-blue-800"
                            />
                        <div className="relative mb-6">
                            <input
                              type={showPassword ? "text" : "password"}
                              id="password"
                              value={password}
                              placeholder="password"
                              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded ease-in-out"
                            />
                        </div>
                        
                       
                    </form>
            </div>
        </div>
    </section>
  )
}

export default SignIn