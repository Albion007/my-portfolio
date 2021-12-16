import React from "react";
import { NavLink  } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-gray-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        to='/' 
                        exact
                        activeClassName="text-white" 
                        className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-yellow-800 text-4xl font-bold cursive tracking-widest">
                        Amorii7
                    </NavLink>
                    <NavLink to="/post" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-yellow-800"
                    activeClassName="text-red-300 bg-gray-700">
                        Postimet
                    </NavLink>
                    <NavLink to="/project" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-yellow-800"
                    activeClassName="text-red-300 bg-gray-700">
                        Projektet
                    </NavLink>
                    <NavLink to="/trajnimet" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-yellow-800"
                    activeClassName="text-red-300 bg-gray-700">
                        Trajnimet
                    </NavLink>
                    <NavLink to="/konferencat" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-yellow-800"
                    activeClassName="text-red-300 bg-gray-700">
                        Konferencat
                    </NavLink>
                    <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-yellow-800"
                    activeClassName="text-red-300 bg-gray-700">
                        Rreth meje!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.facebook.com/AlbionMorina44/" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width: 35}} />
                    <SocialIcon url="https://www.youtube.com/" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width: 35}} />
                    <SocialIcon url="https://mail.google.com/mail/u/0/#inbox" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width: 35}} />
                </div>
            </div>
        </header>
    )
}