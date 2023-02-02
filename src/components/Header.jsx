import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    function pathMatchRoute(route){
        if(route === location.pathname){
            return true;
        }
    }
  return (
    <div>
        <header className="flex justify-between items-center px-3 max-w-6*1 mx-auto  bg-white">
            <div>
                <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo"
                className="h-5 cursor-pointer" />
            </div>
            <div>
                <ul className="flex space-x-10">
                    <li className={`cursur-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent  ${pathMatchRoute("/") && "text-black border-b-red-500"}`} onClick={() => navigate("/")}>Home</li>
                    <li className={`cursur-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`} onClick={() => navigate("/offers")}>Offers</li>
                    <li className={`cursur-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/sign-in") && "text-black border-b-red-500"}`} onClick={() => navigate("/sign-in")}>Sign-In</li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header