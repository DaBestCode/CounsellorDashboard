import React from "react";
import logo from "../assets/logo.png"
function Navbar(){
    return(
        <header className="w-full bg-white shadow flex items-center justify-between px-6 py-4 fixed top-0 left-0 z-50">
            <a href="/" className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-8 w-10 rounded-full bg-gray-100 hover:opacity-80 transition"/>

                <span className="text-xl font-semibold tracking-tight text-blue-700 hover:opacity-80 transition">Undergraduation.com</span>
            </a>
            <nav className="flex items-center gap-6 mx-auto">
                <a href="/chatbot" className="hover:text-blue-600 font-medium transition">Chatbot</a>
                <a href="/students" className="hover:text-blue-600 font-medium transition">Students</a>
            </nav>
            <div style={{width:"100px"}}></div>
        </header>
    );
}

export default Navbar;