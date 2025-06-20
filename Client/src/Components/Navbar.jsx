import React from "react";
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <header>
        <nav className="flex justify-between text-2xl font-semibold bg-gray-100 p-3 w-auto ">
            <div className="img float-start">
                <a href="">
                    <h3 className="text-2xl font-bold from-indigo-300 to-pink-500">MyPortfolio</h3>
                </a>
            </div>
            <div className="navbar">
                <ul className="lg:flex ">
                    <li className="ms-8"><Link to="/home" className="hover:text-purple-800">Home</Link></li>
                    <li className="ms-8"><Link to="/project" className="hover:text-purple-800">Projects</Link></li>
                    <li className="ms-8"><Link to="/contact" className="hover:text-purple-800">Contact</Link></li>
                </ul>
            </div>
            <div>
                <button className="border rounded-lg px-2 py-1 bg-red-50"><Link to="/login">Login</Link></button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar;